# # ### STAGE 1: builder
# FROM  alpine:3.14 AS builder
# LABEL Name=internalapp Version=0.0.1
# COPY apps /app/
# COPY dist /app/
# WORKDIR /app/
# Copy files to virtual directory
# RUN ls -la /app/


### STAGE 2: RUN
FROM  nginx:1.19.0-alpine AS ngi
WORKDIR /app
COPY apps ./
COPY dist ./
RUN ls -la /app/*
# RUN ls -la /app/
# COPY --from=builder /app/dist/apps/task-management /usr/share/nginx/html
# RUN rm -rf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/apps/task-management/nginx.conf /etc/nginx/conf.d
COPY /app/dist/apps/task-management /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY /app/apps/task-management/nginx.conf /etc/nginx/conf.d
RUN ls -la /usr/share/nginx/html/
RUN ls -la /usr/share/nginx/html/
RUN ls -la /etc/nginx/conf.d/

EXPOSE 4202


