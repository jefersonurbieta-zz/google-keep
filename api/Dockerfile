FROM node:12.4.0-stretch

RUN apt-get update && apt-get -y install tzdata openssl curl bash jq build-essential python

ENV TZ=America/Sao_Paulo
RUN echo $TZ > /etc/timezone \
    && dpkg-reconfigure -f noninteractive tzdata \
    && date

COPY package.json .

RUN npm install

COPY . .

RUN cp env .env

ENV NODE_ENV production

CMD ["node", "-r", "esm", "index.js"]
