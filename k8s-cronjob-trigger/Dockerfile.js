FROM oven/bun:1.0.5-alpine
WORKDIR /app
COPY src/server.js server.js
CMD ["bun", "run", "server.js"]
EXPOSE 8080