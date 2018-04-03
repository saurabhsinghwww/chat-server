FROM node:7
WORKDIR /app
COPY package.json /app
RUN npm install && npm run build
COPY . /app
CMD node app.js
EXPOSE 5000