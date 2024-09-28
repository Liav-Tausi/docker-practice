FROM node:22-alpine AS build

WORKDIR /app
ENV NODE_ENV=production
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5173
RUN npm run build

FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html

