# Use uma imagem base do Java
FROM eclipse-temurin:17-jdk-alpine

# Diretório de trabalho no contêiner
WORKDIR /app

# Copiar o arquivo JAR gerado pelo Maven
COPY target/carro-0.0.1-SNAPSHOT.jar app.jar

# Expor a porta em que o Spring Boot será executado
EXPOSE 8080

# Comando para rodar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]
