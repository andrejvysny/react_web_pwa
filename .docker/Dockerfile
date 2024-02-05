FROM node:16-alpine AS development

ENV NODE_ENV development

WORKDIR /var/www/html
COPY package*.json ./
RUN npm install
COPY . .


FROM node:16-alpine AS build-step
WORKDIR /build
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine AS production

WORKDIR /var/www/html

RUN apk update && apk add bash

COPY .docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /build/dist /var/www/html

ENV NODE_ENV production

#COPY ./.docker/configure-runtime.sh /var/www/html/configure-runtime.sh
#RUN chmod +x /var/www/html/configure-runtime.sh
#CMD /bin/bash -c /var/www/html/configure-runtime.sh ; nginx -g 'daemon off;'


COPY ./.docker/env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh