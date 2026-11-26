# syntax=docker/dockerfile:1

# --- Base stage ---
FROM node:20-alpine AS base
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# --- Development stage ---
FROM base AS dev
ENV NODE_ENV=development
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# --- Builder stage ---
FROM base AS builder
ENV NODE_ENV=production
COPY . .
RUN npm run build

# --- Production stage (Nginx) ---
FROM nginx:1.27-alpine AS prod
COPY .infrastructure/docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
