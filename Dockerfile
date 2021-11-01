FROM node:lts
LABEL maintener="DANU AMIRUDIN"
RUN mkdir /root/backend
WORKDIR /root/backend/
COPY backend/ /root/backend/


#Install tools
RUN curl  -o /tmp/filebeat-7.14.1-amd64.deb https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-7.14.1-amd64.deb &&  dpkg -i /tmp/filebeat-7.14.1-amd64.deb

#Configure Filebeat
COPY filebeat.yml /etc/filebeat/filebeat.yml
RUN chmod go-w /etc/filebeat/filebeat.yml
COPY entrypoint.sh /root/backend/entrypoint.sh
RUN chmod +x /root/backend/entrypoint.sh
ENTRYPOINT ["/bin/bash","-c","./entrypoint.sh"]