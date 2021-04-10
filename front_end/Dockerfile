

FROM alpine:3.10

ENV NODE_VERSION 15.14.0

WORKDIR /app

COPY package.json /app 

RUN npm install 

COPY . /app

EXPOSE 80

CMD ["node", "index.js" ,"demo purpose sample file"]
