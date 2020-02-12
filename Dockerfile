FROM node:latest

WORKDIR /usr/src/app

RUN npm install -g sails

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1337

CMD ["npm","start"]
