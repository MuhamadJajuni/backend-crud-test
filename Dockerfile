FROM node:20-bookworm-slim

ENV NODE_ENV=production

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000

CMD ["npm", "start"]
