# Dockerfile for Next.js app (production build)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app .
RUN chown -R node:node /app
RUN chmod -R 755 /app/public
EXPOSE 3000
CMD ["npm", "start"]
