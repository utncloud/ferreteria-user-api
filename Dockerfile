FROM node:10-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3008
CMD [ "node", "server.js" ]
