package bitxon.app;


import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.util.Optional;
import java.util.logging.LogManager;
import java.util.logging.Logger;

public class Application {
    static final int PORT = 8080;
    static final String APP_NAME = Optional.ofNullable(System.getenv("APP_NAME")).orElse("unknown");

    public static void main(String[] args) throws IOException {
        LogManager.getLogManager()
            .readConfiguration(Application.class.getResourceAsStream("/logging.properties"));
        var log = Logger.getLogger(Application.class.getName());

        var server = HttpServer.create(new InetSocketAddress(PORT), 0);
        server.createContext("/", new AllRequestsHandler());
        server.start();
        log.info("Started '%s'".formatted(APP_NAME));
    }


    static class AllRequestsHandler implements HttpHandler {
        Logger log = Logger.getLogger(AllRequestsHandler.class.getName());

        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String method = exchange.getRequestMethod();
            String path = exchange.getRequestURI().getPath();
            String body = exchange.getRequestBody().available() > 0
                ? new String(exchange.getRequestBody().readAllBytes(), StandardCharsets.UTF_8)
                : null;

            log.info("'%s' '%s' '%s' -> %s".formatted(method, path, body, APP_NAME));

            exchange.sendResponseHeaders(200, APP_NAME.getBytes().length);
            var output = exchange.getResponseBody();
            output.write(APP_NAME.getBytes());
            output.flush();
            exchange.close();
        }
    }
}
