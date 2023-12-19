FROM node:18-alpine

WORKDIR /test

ADD package.json /test/

RUN npm i --silent

ADD . /test/

CMD npx prisma generate && npm dev