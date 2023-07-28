FROM node:19.9.0-buster-slim
WORKDIR /home/app

COPY package.json .
RUN npm install --omit=dev --force

ADD ./build.tar.xz .

CMD [ "node", "main.js" ]