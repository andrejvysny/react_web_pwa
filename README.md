# REACT PWA TEMPLATE


- [React Docs](https://reactjs.org/)
- [ReactRouter v6](https://reactrouter.com/docs/en/v6)
- [Workbox Docs](https://developers.google.com/web/tools/workbox)
- [Webpack Docs](https://webpack.js.org/)

# Development

## Node
#### Instalation
```shell
npm install
```
#### Development mode
```shell
npm start
```
#### Production build
Build production version in **./dist** folder.
```shell
npm run build
```
----

## Docker

#### Start app
```shell
docker-compose up -d
```
#### Install npm locally for IDE
```shell
docker run -v "$PWD":/var/www -w /var/www node:16-alpine npm install
```
#### Production build
```shell
docker run -v "$PWD":/var/www -w /var/www node:16-alpine npm run build
```

# Documentation

