FROM node:boron

RUN apt-get clean && apt-get update
RUN apt-get install -y curl

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing nodesjs
# RUN curl -sL https://deb.nodesource.com/setup_7.x | bash
# RUN apt-get install -y nodejs

# Install app dependencies
COPY package.json .
COPY bower.json .

RUN npm install --quiet -g foundation-cli gulp bower && npm cache clean
RUN npm install --quiet
RUN bower install --allow-root

# Bundle app source
COPY . .

CMD [ "npm", "start" ]
EXPOSE 8080
