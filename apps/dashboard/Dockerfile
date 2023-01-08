# ### STAGE 1: builder
FROM  alpine:3.14 AS builder
LABEL Name=internalapp Version=0.0.1
WORKDIR /app
# Copy files to virtual directory
COPY . .
# RUN ls -la /app/


### STAGE 2: RUN
FROM  nginx:1.17.1-alpine AS ngi
# WORKDIR /app
# COPY . .
RUN ls -la /app/
COPY --from=builder dist/apps/dashboard /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY --from=builder apps/dashboard/nginx.conf /etc/nginx/conf.d
RUN ls -la /usr/share/nginx/html/
RUN ls -la /etc/nginx/conf.d

EXPOSE 4201


