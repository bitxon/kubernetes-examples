const appName = Bun.env.APP_NAME;
const appHealthDelay = +Bun.env.APP_HEALTH_DELAY || 6000;
const healthTime = Date.now() + appHealthDelay;


const server = Bun.serve({
  port: 8080,
  async fetch(request) {
    const { method, url, body } = request;
    const bodyTxt = body == null ? null : await Bun.readableStreamToText(body);


    // Pretend to be unhealthy for a while
    if (url.includes("/health") && healthTime > Date.now()) {
      console.log(`[${new Date().toISOString()}] ${method} ${url} ${bodyTxt} --> 503`);
      return new Response("Not ready", { status: 503 });
    }

    console.log(`[${new Date().toISOString()}] ${method} ${url} ${bodyTxt} --> 200`);
    return new Response(`Hello from ${appName}`);
  },
});

console.log(`[${new Date().toISOString()}] Listening on ${server.hostname}:${server.port} with health delay ${appHealthDelay}ms`);
