FROM node:10.15.3-alpine

WORKDIR /usr/app

COPY ./package.json ./package-lock.json ./
RUN npm install --quiet

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
