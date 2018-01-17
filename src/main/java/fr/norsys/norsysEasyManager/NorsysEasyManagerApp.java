package fr.norsys.norsysEasyManager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import fr.norsys.norsysEasyManager.configuration.JpaConfiguration;

@Import(JpaConfiguration.class)
@SpringBootApplication(scanBasePackages = { "fr.norsys.norsysEasyManager" })
public class NorsysEasyManagerApp {
    public static void main(final String[] args) {
        SpringApplication.run(NorsysEasyManagerApp.class, args);
    }
}
