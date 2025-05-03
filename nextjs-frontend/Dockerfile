# Etapa 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar o package.json e o package-lock.json para instalar as dependências
COPY package.json package-lock.json ./
RUN npm install

# Copiar o restante do código fonte para o diretório de trabalho
COPY . .

# Definir variáveis de ambiente que serão usadas no build
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_API_URL_IMAGE
ENV NEXT_PUBLIC_API_URL_IMAGE=$NEXT_PUBLIC_API_URL_IMAGE
ARG API_URL
ENV API_URL=$API_URL

# Gerar os arquivos de build do Next.js
RUN npm run build

# Remover dependências desnecessárias para produção
RUN npm prune --production

# Etapa 2: Produção
FROM node:18-alpine

WORKDIR /app

# Copiar arquivos do build para o container
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Instalar o bash e curl, além de baixar o wait-for-it.sh
RUN apk add --no-cache bash curl && \
    curl -o /wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh && \
    chmod +x /wait-for-it.sh

# Expor a porta 3000 para a aplicação
EXPOSE 3000

# Iniciar a aplicação, aguardando o backend estar pronto
CMD ["/wait-for-it.sh", "backend_monte_seu_pc:1338", "--", "npm", "run", "start"]
