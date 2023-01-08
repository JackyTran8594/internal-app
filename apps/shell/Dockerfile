# # ### STAGE 1: builder
# FROM  alpine:3.14 AS builder
# LABEL Name=internalapp Version=0.0.1
# COPY apps /app/
# COPY dist /app/
# # WORKDIR /app/
# # Copy files to virtual directory
# # COPY . .
# # RUN ls -la /app/


### STAGE 2: RUN
FROM  nginx:1.17.1-alpine AS ngi
WORKDIR /app
COPY apps/ /app/
COPY dist/ /app/
RUN ls -la /app/*
COPY /app/dist/apps/shell /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY /app/apps/shell/nginx.conf /etc/nginx/conf.d
RUN ls -la /usr/share/nginx/html/
RUN ls -la /etc/nginx/conf.d/default.conf   

EXPOSE 4200


