FROM node:20-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app

RUN npm run build --prod


FROM nginx:latest

COPY --from=build-step /app/dist/startual /usr/share/nginx/html
