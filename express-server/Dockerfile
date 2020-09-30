# FROM mhart/alpine-node:8.11.4

# RUN mkdir /api
# WORKDIR /api

# RUN npm install

# CMD ["node", "server.js"]


FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9000
CMD ["npm", "start"]
