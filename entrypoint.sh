#!/bin/bash

/etc/init.d/filebeat start

exec node server.js