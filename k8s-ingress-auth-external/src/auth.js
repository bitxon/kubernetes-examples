const appName = Bun.env.APP_NAME;

const server = Bun.serve({
    port: 8080,
    async fetch(request) {
        const { method, url, body, headers } = request;
        const bodyTxt = body == null ? null : await Bun.readableStreamToText(body);
        const headersTxt = "\n  " + new Array(...headers.entries()).join("\n  ");

        console.log(`${method} ${url} ${bodyTxt} ${headersTxt}`);

        // Allow only one hardcoded token 'SecretToken'
        const isAuthValid = headers.get('Authorization') === "Bearer SecretToken";

        if (isAuthValid) {
            return new Response("", {
                status: 200,
                headers: {
                    'Custom-Header': 'Custom-Value'
                }
            });
        } else {
            return new Response("", {
                status: 401,
                headers: {
                    'Custom-Header': 'Custom-Value'
                }
            })
        }
    },
});

console.log(`Listening on ${server.hostname}:${server.port}`);
