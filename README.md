
# 🚀 Projeto Strapi + Docker + PostgreSQL

Projeto desenvolvido para estudo e demonstração técnica de implementação de um CMS Strapi v5
containerizado utilizando Docker Compose e banco de dados PostgreSQL 16.

As credenciais são fornecidas via arquivo .env.

------------------------------------------------------------

# 📋 Pré-requisitos

- Docker 24+
- Docker Compose
- Node.js
- Git

------------------------------------------------------------

# 📁 Estrutura do Projeto

```
proj-strapi/
│
├── config/
├── src/
├── public/
├── database/
├── types/
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .env.example
├── .gitignore
├── package.json
├── generate-env.js
└── README.md
```

------------------------------------------------------------

# 🐳 Executando o Projeto

1) Clonar o repositório:

```
git clone https://github.com/andrelinhares-CI/proj-strapi.git
```
```
cd proj-strapi
```
------------------------------------------------------------

2) Criar o arquivo .env

Execute o script de setup para gerar automaticamente o arquivo .env com as secrets:

```
npm run setup
```

O script irá:

Criar o arquivo .env caso ele não exista

Gerar automaticamente:

APP_KEYS
API_TOKEN_SALT
ADMIN_JWT_SECRET
JWT_SECRET
TRANSFER_TOKEN_SALT
ENCRYPTION_KEY

As variáveis básicas do banco PostgreSQL

------------------------------------------------------------

3) Subir os containers:

```
docker compose up -d --build
```
------------------------------------------------------------

4) Acessar o painel administrativo:

http://localhost:1337/admin

------------------------------------------------------------

# 🛑 Parar o Ambiente

Parar containers:
```
docker compose down
```

Resetar banco de dados:

```
docker compose down -v
```
------------------------------------------------------------

# 🔐 Boas Práticas Aplicadas

- Uso de variáveis de ambiente para dados sensíveis
- Criação da .env e variáveis básicas do banco automaticamente
- Banco PostgreSQL isolado em container
- Persistência de dados via volume Docker

------------------------------------------------------------

# 👤 Autor

Andre Linhares

------------------------------------------------------------

# 📄 Licença

Uso educacional.
