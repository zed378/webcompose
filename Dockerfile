# Build stage
FROM node:22-alpine AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Lightweight Nginx server stage using Alpine
FROM nginx:alpine

# Copy built files to Nginx's public directory
COPY --from=build /app/build /usr/share/nginx/html

# Optionally replace default Nginx config (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
