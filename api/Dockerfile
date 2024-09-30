# Dockerfile for the API
FROM node:21

WORKDIR /celsia
COPY package.json .
RUN npm install

EXPOSE 3001

COPY . .
CMD npm start
