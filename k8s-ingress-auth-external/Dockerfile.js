FROM oven/bun:1.0.5-alpine
ARG FILE=server.js
WORKDIR /app
COPY src/${FILE} app.js
CMD ["bun", "run", "app.js"]
EXPOSE 8080