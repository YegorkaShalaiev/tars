FROM node:18-alpine as base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM base AS production

COPY --from=base /app/package*.json ./
COPY --from=base /app/dist ./dist

RUN npm ci --only=production

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]

FROM base AS development

RUN npm install -g nodemon

CMD ["npm", "run", "dev"]



