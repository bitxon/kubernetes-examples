const appName = Bun.env.APP_NAME;

const server = Bun.serve({
    port: 8080,
    async fetch(request) {
        const { method, url, body, headers } = request;
        const bodyTxt = body == null ? null : await Bun.readableStreamToText(body);
        const headersTxt = "\n  " + new Array(...headers.entries()).join("\n  ");

        console.log(`${method} ${url} ${bodyTxt} ${headersTxt}`);

        return new Response(`Hello from ${appName}`);
    },
});

console.log(`Listening on ${server.hostname}:${server.port}`);
