FROM node:lts
RUN mkdir /root/backend
WORKDIR /root/backend/
COPY backend/ /root/backend/
EXPOSE 8080

CMD ["node", "server.js"]