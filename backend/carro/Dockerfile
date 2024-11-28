# Etapa 1: Imagem de build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copiar o arquivo de projeto e restaurar as dependências
COPY *.csproj ./
RUN dotnet restore

# Copiar o resto do código e compilar
COPY . ./
RUN dotnet publish -c Release -o /app/publish

# Etapa 2: Imagem de runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .

# Configurar a porta para expor
EXPOSE 50
# EXPOSE 443

# Definir variável de ambiente para Development
ENV ASPNETCORE_ENVIRONMENT=Development

# Comando de entrada para rodar a aplicação
ENTRYPOINT ["dotnet", "carro.dll"]
