# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# multi stage build to reduce image size
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./
RUN npm install --omit=dev
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
EXPOSE 3000
CMD ["node", "index.js"]