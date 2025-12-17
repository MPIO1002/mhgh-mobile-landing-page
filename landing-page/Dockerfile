# ===== BUILD STAGE =====
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build


# ===== PRODUCTION STAGE =====
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy only necessary files
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install only production dependencies
RUN npm ci --only=production

# Security hardening
RUN chown -R node:node /app \
 && chmod -R 755 /app/public

USER node

EXPOSE 3000
CMD ["npm", "start"]