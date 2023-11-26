FROM node:alpine3.17

ARG BASE_DIR

WORKDIR /build

COPY ${BASE_DIR}/package.json .

RUN npm install

COPY ${BASE_DIR}/. .

CMD ["npm", "start"]
