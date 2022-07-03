FROM node:16-alpine AS development

ENV NODE_ENV development

RUN mkdir /var/www
WORKDIR /var/www
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]