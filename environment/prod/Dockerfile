FROM node:20.16-alpine

WORKDIR /frontend
COPY ../../package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]

