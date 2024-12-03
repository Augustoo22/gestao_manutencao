package com.manutencao.carro.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.License;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
            .info(new Info()
                .title("API de Manutenção de Veículos")
                .version("1.0")
                .description("Documentação da API de Manutenção de Veículos")
                .contact(new Contact()
                    .name("Seu Nome")
                    .email("seuemail@exemplo.com")
                    .url("https://github.com/seuprojeto"))
                .license(new License()
                    .name("MIT License")
                    .url("https://opensource.org/licenses/MIT")));
    }
}
