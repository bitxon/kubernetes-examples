const appName = Bun.env.APP_NAME;

const server = Bun.serve({
    port: 8080,
    async fetch(request) {
        const { method, url, body } = request;
        const bodyTxt = body == null ? null : await Bun.readableStreamToText(body);

        console.log(`${method} ${url} ${bodyTxt}`);

        return new Response(`Hello from ${appName}`);
    },
});

console.log(`Listening on ${server.hostname}:${server.port}`);
