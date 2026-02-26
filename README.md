🚀 Projeto Strapi + Docker + PostgreSQL

Projeto desenvolvido para estudo e demonstração técnica de implementação de um CMS Strapi v5 containerizado utilizando Docker Compose e banco de dados PostgreSQL 16.

A aplicação e o banco de dados executam em containers isolados, seguindo boas práticas de organização e configuração de ambiente.

📌 Objetivo

Demonstrar:

Configuração do Strapi v5 com TypeScript

Containerização da aplicação com Docker

Orquestração de serviços com Docker Compose

Integração com banco relacional PostgreSQL

Uso de variáveis de ambiente para segurança

Persistência de dados com volumes Docker

Versionamento com Git & GitHub

🛠️ Tecnologias Utilizadas

Node.js 20

Strapi v5+

TypeScript

PostgreSQL 16

Docker

Docker Compose

Git & GitHub

🏗️ Arquitetura da Solução
┌──────────────┐       ┌──────────────┐
│   Strapi     │  ---> │ PostgreSQL   │
│  (Container) │       │ (Container)  │
└──────────────┘       └──────────────┘
         │
         ▼
  Docker Compose Network

O Strapi se conecta ao banco via hostname interno db

O banco possui volume persistente (db_data)

As credenciais são fornecidas via .env

📁 Estrutura do Projeto
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

🐳 Executando o Projeto
1️⃣ Clonar o repositório
git clone https://github.com/andrelinhares-CI/proj-strapi.git
cd proj-strapi
2️⃣ Criar o arquivo .env

Copie o modelo:

cp .env.example .env

Configure com valores reais:

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

⚠️ O arquivo .env não deve ser versionado.

3️⃣ Subir os containers
docker compose up -d --build
4️⃣ Acessar o painel administrativo

Abra no navegador:

http://localhost:1337/admin

🛑 Parar o Ambiente

Parar containers:

docker compose down

Resetar banco de dados (remove volume):

docker compose down -v

🔐 Boas Práticas Aplicadas

Separação entre .env (local) e .env.example (versionado)

Nenhuma credencial armazenada no docker-compose.yml

Persistência de dados via volume Docker

Comunicação interna entre containers via rede Docker

Estrutura preparada para migração futura para ambiente de produção

📚 Conceitos Aplicados

Integração entre aplicação Node.js e banco relacional

Uso do driver pg para PostgreSQL

Gerenciamento de dependências via package.json

Isolamento de serviços com containers

Versionamento estruturado com Git

🎯 Considerações Técnicas

A arquitetura permite substituir facilmente o banco de dados por outro SGBD (como MySQL) apenas alterando variáveis de ambiente e driver correspondente.

O modelo segue padrão comum utilizado em ambientes corporativos e aplicações SaaS modernas.

👤 Autor

Andre Linhares
Projeto desenvolvido para fins de estudo e apresentação técnica.

📄 Licença

Uso educacional.