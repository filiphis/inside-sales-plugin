FROM node:20-alpine

WORKDIR /app

# Instale o Yarn 4.9.1 globalmente via corepack
RUN corepack enable && corepack prepare yarn@4.9.1 --activate

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 5173

CMD ["yarn", "dev", "--host", "0.0.0.0"]