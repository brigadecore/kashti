FROM node:boron

RUN apt-get clean && apt-get update
RUN apt-get install -y curl

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing nodesjs
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash
RUN apt-get install -y nodejs

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY /dist /usr/src/app

CMD node /assets/js/app.js
EXPOSE 4000
