### STAGE 1: builder
FROM  node:16.10-alpine AS builder
LABEL Name=internalapp Version=0.0.1
WORKDIR /app
# Copy files to virtual directory
# COPY package.json package-lock.json ./
# Run command in Virtual directory
RUN npm cache clean --force
# Copy files from local machine to virtual directory in docker image
COPY . .
RUN npm install
RUN nx run-many --target=build --all=true

### STAGE 2: RUN
FROM  nginx:1.17.1-alpine AS ngi
COPY --from=builder /app/dist/apps /user/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf
