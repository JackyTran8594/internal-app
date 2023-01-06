### STAGE 1: BUILD
FROM  node:14.17.3-alpine AS builder
LABEL Name=internalapp Version=0.0.1
WORKDIR /app
# COPY package*.json decorate-angular-cli.js nginx.conf nx.json tsconfig.base.json jest*.ts jest*.js /app/
# Copy files to virtual directory
COPY . .
RUN ls -la /app/*
# Run command in Virtual directory
RUN npm install -g nx@15.0.5
RUN npm install -g @angular/cli@14.2.0
RUN npm cache clean --force
RUN npm install
# RUN nx run-many --target=build --all=true
RUN ng build shell
RUN ls -la /app/*

# FROM base AS builder
# # Copy files from local machine to virtual directory in docker image
# # COPY . .
# # RUN rm -f node_modules/@angular/compiler-cli/ngcc/__ngcc_lock_file__
# COPY . .
# RUN npm install -g nx@15.0.5

### STAGE 2: RUN
FROM  nginx:1.17.1-alpine AS ngi
COPY --from=builder /app/dist/apps /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf
