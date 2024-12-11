# Etapa 1: Construir o projeto
FROM node:20-alpine AS build

# Configurar o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de dependências
COPY package.json package-lock.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código fonte
COPY . .

# Construir a aplicação para produção
RUN npm run build

# Etapa 2: Servir a aplicação
FROM node:20-alpine

# Configurar o diretório de trabalho
WORKDIR /app

# Instalar uma dependência para rodar a aplicação no modo de produção
RUN npm install next

# Copiar os arquivos construídos da etapa anterior
COPY --from=build /app ./

# Expor a porta padrão do Next.js
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
