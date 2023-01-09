### STAGE 1: BUILD ###
FROM node:14.17.3-alpine AS build
# Create a Virtual directory inside the docker image
WORKDIR /app
# Copy files to virtual directory
# Run command in Virtual directory
# Copy files from local machine to virtual directory in docker image
COPY . .
RUN ls -la /app/*
RUN npm install -g nx@15.0.5
RUN npm cache clean --force
RUN npm install
RUN nx deploy shell

### STAGE 2:RUN ###
# Defining nginx image to be used
FROM nginx:1.17.1-alpine AS ngi
# Copying compiled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder 
COPY --from=build /app/dist/apps /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY --from=build /app/nginx.conf  /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]
RUN chmod -R 777 /usr/share/nginx/html/*

EXPOSE 80