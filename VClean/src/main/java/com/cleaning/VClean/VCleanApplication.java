package com.cleaning.VClean;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.cleaning.VClean.Entity")
public class VCleanApplication {

    public static void main(String[] args) {
        SpringApplication.run(VCleanApplication.class, args);
    }
}