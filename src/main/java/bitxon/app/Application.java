package bitxon.app;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@SpringBootApplication
public class Application {

    @Value("${APP_NAME:unknown}")
    private String appName;

    @GetMapping("/hello")
    public String hello() {
        log.info("GET /hello -> {}", appName);
        return appName;
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
