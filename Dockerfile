### STAGE 1: BASE
FROM  node:14.17.3-alpine AS base
LABEL Name=internalapp Version=0.0.1
WORKDIR /app
# Copy files to virtual directory
COPY package*.json nx.json tsconfig*.json nginx.conf decorate-angular-cli.js  ./
# Run command in Virtual directory
RUN npm install

FROM base AS builder
RUN npm cache clean --force
# Copy files from local machine to virtual directory in docker image
# COPY . .
# RUN rm -f node_modules/@angular/compiler-cli/ngcc/__ngcc_lock_file__
COPY . .
RUN npm install -g nx@15.0.5
RUN nx run-many --target=build --all=true

### STAGE 2: RUN
FROM  nginx:1.17.1-alpine AS ngi
COPY --from=builder /app/dist/apps /user/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf
