# Usar uma imagem oficial do OpenJDK
FROM openjdk:17-jdk-slim

# Define o diretório de trabalho
WORKDIR /app

# Copia o arquivo jar para o contêiner
COPY target/carro-0.0.1-SNAPSHOT.jar app.jar

# Expõe a porta da aplicação
EXPOSE 8080

# Comando para iniciar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]
