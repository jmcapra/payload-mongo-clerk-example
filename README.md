## Payload and Clerk example

[![Payload and Clerk example](https://img.youtube.com/vi/7PNGNqqFlu0/0.jpg)](https://www.youtube.com/watch?v=7PNGNqqFlu0)

YouTube video: [https://www.youtube.com/watch?v=7PNGNqqFlu0](https://www.youtube.com/watch?v=7PNGNqqFlu0)

This is an example for Payload CMS and Clerk integration.

## Getting Started

1. Copy the `env.example` file into `.env.local` or `.env`

2. Set the Clerk values in `.env.local` or `.env` and uncomment `DATABASE_URI` for `SQLite` or `PostgreSQL` 

3. If you selected the `PostgreSQL` you can use Docker:

```bash
docker compose up
```

and edit the `src/payload.config.ts` file:

Uncomment:
```typescript
import { postgresAdapter } from "@payloadcms/db-postgres";
```

Comment / delete:
```typescript
import { sqliteAdapter } from "@payloadcms/db-sqlite";
```

Uncomment:
```typescript
  // PostgreSQL
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
```

Comment / delete:
```typescript
  // SQLite
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || "",
    },
  }),
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
