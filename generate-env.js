const fs = require("fs");
const crypto = require("crypto");

const generate = (size = 32) =>
  crypto.randomBytes(size).toString("base64");

if (!fs.existsSync(".env")) {
  const content = `
# Server
HOST=0.0.0.0
PORT=1337

# Secrets
APP_KEYS=${[generate(16), generate(16), generate(16), generate(16)].join(",")}
API_TOKEN_SALT=${generate(16)}
ADMIN_JWT_SECRET=${generate(32)}
JWT_SECRET=${generate(32)}
TRANSFER_TOKEN_SALT=${generate(16)}
ENCRYPTION_KEY=${generate(32)}

# Database
DATABASE_CLIENT=postgres
DATABASE_HOST=db
DATABASE_PORT=5432
DATABASE_NAME=projstrapi
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
DATABASE_SSL=false
`;

  fs.writeFileSync(".env", content.trim());
  console.log("? .env criado automaticamente!");
} else {
  console.log("?? .env já existe.");
}