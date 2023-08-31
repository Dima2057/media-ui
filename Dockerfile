FROM node:alpine3.17 AS build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM nginx:stable-alpine3.17
COPY --from=build /app/dist/media-ui/ /usr/share/nginx/html

EXPOSE 80
