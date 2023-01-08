# ### STAGE 1: builder
# FROM  node:14.17.3-alpine AS builder
# LABEL Name=internalapp Version=0.0.1
# WORKDIR /app
# # Copy files to virtual directory
# COPY dist/apps nginx.conf /app/
# RUN ls -la /app/*


### STAGE 2: RUN
FROM  nginx:1.17.1-alpine AS ngi
WORKDIR /app
COPY . .
RUN ls -la /app
COPY disk/apps/task-management /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY apps/task-management/nginx.conf /etc/nginx/conf.d
RUN ls -la /usr/share/nginx/html/
RUN ls -la /usr/share/nginx/html/
RUN ls -la /etc/nginx/conf.d/

EXPOSE 4201


