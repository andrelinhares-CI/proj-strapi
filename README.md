
# 🚀 Projeto Strapi + Docker + PostgreSQL

Projeto desenvolvido para estudo e demonstração técnica de implementação de um CMS Strapi v5
containerizado utilizando Docker Compose e banco de dados PostgreSQL 16.

As credenciais são fornecidas via arquivo .env.

------------------------------------------------------------

# 📋 Pré-requisitos

- Docker 24+
- Docker Compose
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
└── README.md
```

------------------------------------------------------------

# 🐳 Executando o Projeto

1) Clonar o repositório:

git clone https://github.com/andrelinhares-CI/proj-strapi.git
cd proj-strapi

------------------------------------------------------------

2) Criar o arquivo .env

Copie o modelo:

cp .env.example .env

Configure com valores reais:

```env
# Server
HOST=0.0.0.0
PORT=1337

# Secrets
APP_KEYS=sua_chave1,sua_chave2
API_TOKEN_SALT=seu_salt
ADMIN_JWT_SECRET=seu_admin_secret
JWT_SECRET=seu_jwt_secret

# Database (PostgreSQL)
DATABASE_CLIENT=postgres
DATABASE_HOST=db
DATABASE_PORT=5432
DATABASE_NAME=projstrapi
DATABASE_USERNAME=seu_usuario
DATABASE_PASSWORD=sua_senha
DATABASE_SSL=false
```
------------------------------------------------------------

3) Subir os containers:

docker compose up -d --build

------------------------------------------------------------

4) Acessar o painel administrativo:

http://localhost:1337/admin

------------------------------------------------------------

# 🛑 Parar o Ambiente

Parar containers:
docker compose down

Resetar banco de dados:
docker compose down -v

------------------------------------------------------------

# 🔐 Boas Práticas Aplicadas

- Uso de variáveis de ambiente para dados sensíveis
- Separação entre .env (local) e .env.example (versionado)
- Banco PostgreSQL isolado em container
- Persistência de dados via volume Docker
- Estrutura preparada para ambiente de produção

------------------------------------------------------------

# 👤 Autor

Andre Linhares
Projeto desenvolvido para fins de estudo e apresentação técnica.

------------------------------------------------------------

# 📄 Licença

Uso educacional.
