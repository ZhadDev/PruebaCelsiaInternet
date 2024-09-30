# Dockerfile for the webapp
FROM node:21

WORKDIR /celsiaApp
COPY package.json .
RUN npm install
RUN npm i -g serve
COPY . .
RUN npm run build
EXPOSE 3000
CMD serve -s dist