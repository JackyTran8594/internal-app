### STAGE 1: builder
FROM  alpine:latest AS builder
LABEL Name=internalapp Version=0.0.1
WORKDIR /app
# Copy files to virtual directory
COPY dist/apps nginx.conf /app/
RUN ls -la /app/*


### STAGE 2: RUN
FROM  nginx:1.17.1-alpine AS ngi
COPY --from=builder /app /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf
RUN ls -la /usr/share/nginx/html/
RUN ls -la /etc/nginx/conf.d/default.conf
EXPOSE 80
