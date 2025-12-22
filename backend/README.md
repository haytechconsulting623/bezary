<<<<<<< HEAD
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
=======
# 🔧 Bezary Backend - API NestJS

API REST pour la plateforme marketplace Bezary. Gère l'authentification OTP, le catalogue produits multi-vendeurs, les commandes et les paiements Mobile Money.

## 🚀 Installation

### Prérequis

- Node.js ≥ 18.x
- PostgreSQL 15+
- npm ou yarn

### Setup Initial

```bash
# 1. Installer les dépendances
npm install

# 2. Copier et configurer .env
cp .env.example .env

# 3. Générer le client Prisma
npx prisma generate

# 4. Lancer les migrations
npx prisma migrate dev

# 5. (Optionnel) Seed data
npm run seed

# 6. Démarrer en mode dev
npm run start:dev
```

**API accessible sur:** http://localhost:3000  
**Swagger Docs:** http://localhost:3000/api/docs

## 📋 Variables d'Environnement

Créer un fichier `.env` à la racine:

```env
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/bezary?schema=public"

# JWT
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
JWT_EXPIRES_IN="7d"

# Server
PORT=3000
NODE_ENV="development"

# SMS Provider (pour OTP - optionnel en dev)
SMS_API_KEY=""
SMS_API_URL=""
```

## 🗄️ Base de Données (Prisma)

### Commandes Prisma

```bash
# Créer une nouvelle migration
npx prisma migrate dev --name nom_de_la_migration

# Appliquer migrations (production)
npx prisma migrate deploy

# Regénérer le client après modif schema
npx prisma generate

# Ouvrir l'interface Prisma Studio
npx prisma studio  # http://localhost:5555

# Reset database (⚠️ supprime tout)
npx prisma migrate reset
```

### Schéma Simplifié

```prisma
User (id, phone, role, passwordHash)
  └─ Vendor (storeName, wallet_balance, status)
       └─ Product (title, description)
            └─ Variant (sku, price, stock)

GlobalOrder (client, total, payment_status)
  └─ SubOrder (vendor, delivery_status)
       └─ OrderItem (variant, quantity, price_snapshot)

PayoutRequest (vendor, amount, status)
```

## 📦 Structure du Projet

```
backend/
├── prisma/
│   ├── schema.prisma        # Schéma DB
│   ├── migrations/          # Historique migrations
│   └── seed.ts             # Données de test
├── src/
│   ├── auth/               # Module Auth (OTP, JWT)
│   ├── vendor/             # Module Vendeur
│   ├── market/             # Module Catalogue Public
│   ├── finance/            # Module Finance (Wallet, Payout)
│   ├── prisma/             # Service Prisma
│   ├── app.module.ts       # Module racine
│   └── main.ts             # Point d'entrée
├── test/                   # Tests E2E
└── package.json
```

## 🔑 Endpoints Principaux

### 🔐 Auth (`/auth`)

| Méthode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| `POST` | `/auth/otp/request` | Envoyer code OTP | ❌ |
| `POST` | `/auth/otp/verify` | Vérifier OTP → JWT | ❌ |
| `GET` | `/auth/me` | Info utilisateur | ✅ |

**Exemple Request:**

```bash
# 1. Demander OTP
curl -X POST http://localhost:3000/auth/otp/request \
  -H "Content-Type: application/json" \
  -d '{"phone": "261340000001"}'

# 2. Vérifier OTP
curl -X POST http://localhost:3000/auth/otp/verify \
  -H "Content-Type: application/json" \
  -d '{"phone": "261340000001", "code": "123456"}'

# Response: { "accessToken": "eyJhbGc..." }

# 3. Utiliser le token
curl http://localhost:3000/auth/me \
  -H "Authorization: Bearer eyJhbGc..."
```

### 🏪 Vendor (`/vendor`)

| Méthode | Endpoint | Description | Role |
|---------|----------|-------------|------|
| `POST` | `/vendor/register` | Créer boutique | USER |
| `GET` | `/vendor/my-store` | Ma boutique | VENDOR |
| `PATCH` | `/vendor/:id` | Modifier boutique | VENDOR |
| `GET` | `/vendor/wallet` | Voir wallet | VENDOR |
| `GET` | `/vendor/orders` | Mes commandes | VENDOR |

### 🛍️ Market (`/market`)

| Méthode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| `GET` | `/market/products` | Liste produits | ❌ |
| `GET` | `/market/products/:id` | Détails produit | ❌ |
| `POST` | `/market/products` | Créer produit | VENDOR |
| `PATCH` | `/market/products/:id` | Modifier produit | VENDOR |
| `DELETE` | `/market/products/:id` | Supprimer produit | VENDOR |

**Filtres disponibles:**

```bash
GET /market/products?page=1&limit=20&search=laptop&minPrice=10000&maxPrice=50000&vendorId=xxx
```

### 📦 Orders (`/orders`)

| Méthode | Endpoint | Description | Role |
|---------|----------|-------------|------|
| `POST` | `/orders/checkout` | Créer commande | CLIENT |
| `GET` | `/orders` | Mes commandes | CLIENT |
| `GET` | `/orders/:id` | Détails commande | CLIENT |

**Exemple Checkout:**

```json
{
  "items": [
    {"variantId": "uuid-variant-1", "quantity": 2},
    {"variantId": "uuid-variant-2", "quantity": 1}
  ],
  "shippingAddress": "Antananarivo, 101, Madagascar",
  "paymentProvider": "MVOLA"
}
```

### 💰 Finance (`/finance`)

| Méthode | Endpoint | Description | Role |
|---------|----------|-------------|------|
| `POST` | `/finance/payout-requests` | Demander retrait | VENDOR |
| `GET` | `/finance/payout-requests` | Mes demandes | VENDOR |
| `GET` | `/admin/finance/payouts` | Toutes demandes | ADMIN |
| `PATCH` | `/admin/finance/payouts/:id` | Approve/Reject | ADMIN |

## 🧪 Tests

### Tests Unitaires

```bash
# Lancer tous les tests
npm run test

# Mode watch
npm run test:watch

# Coverage
npm run test:cov
```

### Tests E2E

```bash
# Tests end-to-end
npm run test:e2e

# Exemple: test du workflow complet
npm run test:e2e -- auth.e2e-spec.ts
```

### Écrire un Test

```typescript
// src/auth/auth.service.spec.ts
import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should generate OTP code', async () => {
    const code = await service.generateOtpCode();
    expect(code).toHaveLength(6);
    expect(Number(code)).toBeGreaterThan(0);
  });
});
```

## 🔒 Sécurité

### Guards

- **JwtAuthGuard:** Vérifie le token JWT
- **RolesGuard:** Vérifie le rôle (ADMIN, VENDOR, CLIENT)

**Utilisation:**

```typescript
@Controller('vendor')
@UseGuards(JwtAuthGuard, RolesGuard)
export class VendorController {
  @Get('my-store')
  @Roles('VENDOR')
  getMyStore(@CurrentUser() user: User) {
    // Seul VENDOR peut accéder
  }
}
```

### Rate Limiting

Le système limite à **5 tentatives OTP par numéro par heure**.

### Validation

Toutes les entrées sont validées avec `class-validator`:

```typescript
export class CreateProductDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsInt()
  @Min(0)
  priceCents: number;
}
```

## 📊 Seed Data

Le script de seed crée des données de test:

```bash
npm run seed
```

**Crée:**
- 1 Admin: `261340000001` (code: `123456`)
- 3 Vendeurs: `261340000002-004` (code: `123456`)
- 10 Clients: `261340000010-020` (code: `123456`)
- 20 Produits avec variants
- 5 Commandes de test

## 🚀 Déploiement

### Build Production

```bash
# Build
npm run build

# Lancer
npm run start:prod
```

### Docker

```dockerfile
# Dockerfile déjà présent
docker build -t bezary-api .
docker run -p 3000:3000 --env-file .env bezary-api
```

### Variables Production

```env
NODE_ENV=production
DATABASE_URL=postgresql://user:pass@host:5432/db
JWT_SECRET=<long-random-string>
```

## 📈 Monitoring

### Logs

```typescript
// Le système utilise le Logger NestJS
import { Logger } from '@nestjs/common';

const logger = new Logger('AuthService');
logger.log('User logged in');
logger.error('Payment failed', error.stack);
```

### Health Check

```bash
curl http://localhost:3000/health
```

## 🛠️ Scripts npm

```json
{
  "start:dev": "nest start --watch",
  "start:prod": "node dist/main",
  "build": "nest build",
  "test": "jest",
  "test:e2e": "jest --config ./test/jest-e2e.json",
  "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
  "format": "prettier --write \"src/**/*.ts\""
}
```

## 🐛 Debugging

### VSCode Launch Config

```json
{
  "type": "node",
  "request": "launch",
  "name": "Debug NestJS",
  "runtimeExecutable": "npm",
  "runtimeArgs": ["run", "start:debug"],
  "console": "integratedTerminal",
  "restart": true
}
```

## 📚 Ressources

- [NestJS Docs](https://docs.nestjs.com)
- [Prisma Docs](https://www.prisma.io/docs)
- [Swagger/OpenAPI](http://localhost:3000/api/docs)

---

**Développeur Backend:** Junior Backend  
**Lead:** Lead Architect  
**Version:** 1.0.0
>>>>>>> develop
