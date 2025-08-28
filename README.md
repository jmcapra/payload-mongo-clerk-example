# Payload CMS + Clerk + MongoDB Starter

Building on the foundation of [DanailMinchev's payload-clerk-example](https://github.com/DanailMinchev/payload-clerk-example), this starter modernises the stack with MongoDB and provides a complete authentication solution. 

A minor contribution by Jaiden Capra as part of the [TYMO Forge](https://www.tymo.ai) open source app starter initiative.

## ✨ Features

- **Payload CMS v3.53** - Modern headless CMS with TypeScript
- **Clerk Authentication** - Complete user management with roles & permissions  
- **Role-Based Access** - Super admin, admin, editor, and user roles
- **Webhook Integration** - Real-time user sync between Clerk and Payload

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (free tier available) - can also use local containerised mongo in your dev environment (run `docker-compose up`)
- Clerk account (free tier available)

### Installation

```bash
git clone https://github.com/your-org/payload-mongo-clerk-example.git
cd payload-mongo-clerk-example
pnpm install
```

### Configuration

1. **Copy environment variables:**
   ```bash
   cp .env.example .env.local
   ```

2. **Set up Clerk:**
   - Create a new [Clerk application](https://clerk.com)
   - Enable Email as Sign-in option
   - Enable Test mode for development
   - Configure public metadata with `{"metadata": "{{user.public_metadata}}"}`
   - Add your keys to `.env.local`:
     ```
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
     CLERK_SECRET_KEY=sk_test_...
     SIGNING_SECRET=whsec_...
     ```

3. **Set up MongoDB:**
   - Create a [MongoDB Atlas](https://www.mongodb.com/atlas) cluster
   - Get your connection string and add to `.env.local`:
     ```
     MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
     ```

4. **Configure Payload:**
   ```
   PAYLOAD_SECRET=your-32-character-secret-key
   ```

### Youtube tutorials from Danail
For more details, check out the full videos from Danail:

**Part 2 - Advanced integration**

[![Payload CMS and Clerk - advanced integration](https://img.youtube.com/vi/egKaeOuddFA/0.jpg)](https://www.youtube.com/watch?v=egKaeOuddFA)

[https://www.youtube.com/watch?v=egKaeOuddFA](https://www.youtube.com/watch?v=egKaeOuddFA)

Source code for the video is in the `part-2` branch of the original repo: https://github.com/DanailMinchev/payload-clerk-example/tree/feat/part-2

**Part 1 - Basic integration**

[![Payload and Clerk example](https://img.youtube.com/vi/7PNGNqqFlu0/0.jpg)](https://www.youtube.com/watch?v=7PNGNqqFlu0)

[https://www.youtube.com/watch?v=7PNGNqqFlu0](https://www.youtube.com/watch?v=7PNGNqqFlu0)

Source code for the video is in the `part-1` branch of the original repo: https://github.com/DanailMinchev/payload-clerk-example/tree/feat/part-1

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) and follow the setup wizard to create your first admin user.

### Seed Test Users (Optional)

For testing with predefined roles, visit [/api/app/seed](http://localhost:3000/api/app/seed) to create:
- `super-admin-1+clerk_test@example.com` (Super Admin)
- `admin-1+clerk_test@example.com` (Admin)  
- `editor-1+clerk_test@example.com` (Editor)
- `user-1+clerk_test@example.com` (User)

⚠️ **Warning:** This endpoint will delete existing data.

## 🐳 Docker Development (Optional)

For local MongoDB without Atlas:

```bash
# Update MONGODB_URI in .env.local to mongodb://127.0.0.1/your-db-name
docker-compose up -d
pnpm dev
```

## 🔗 Webhooks

The app includes Clerk webhook integration at `POST /api/clerk/webhooks` for real-time user synchronisation.

**Supported Events:**
- `user.created` - Creates corresponding Payload user
- `user.updated` - Updates user data and roles  
- `user.deleted` - Removes user from Payload

**Ngrok Testing:**
```bash
ngrok http 3000 --url=your-domain.ngrok-free.app
```

Add the ngrok URL to your [Clerk webhook endpoints](https://dashboard.clerk.com/last-active?path=webhooks).

In production, ngrok is not needed. Use your live domain.

## 🧪 Testing

Full E2E test suite with Playwright:

```bash
# Install Playwright
npx playwright install

# Run tests
pnpm run playwright:test:ui      # Interactive mode
pnpm run playwright:test:debug   # Debug mode  
pnpm run playwright:test         # CI mode
```

Tests cover authentication flows, role-based access control, and admin panel functionality.

## 📚 Collections

### Users (Authentication)
Auth-enabled collection with Clerk integration and role-based permissions.

### Media  
Upload-enabled collection with automatic resising, focal points, and multiple size variants.

## 🤝 Contributing

This project builds on the [Payload-Clerk example](https://github.com/DanailMinchev/payload-clerk-example) from [Danail Minchev](https://github.com/DanailMinchev) and the Payload CMS community. Contributions welcome!

## 📖 Learn More 

- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Clerk Documentation](https://clerk.com/docs)  
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [TYMO Forge](https://www.tymo.ai) - More open source tools coming soon

## 💬 Support

- [Payload Discord](https://discord.com/invite/payload)
- [GitHub Discussions](https://github.com/payloadcms/payload/discussions)
- [Clerk Support](https://clerk.com/support)

---

*Need help with Payload CMS implementation or custom solutions? [TYMO AI](https://www.tymo.ai/contact) offers expert consulting services for startups and established firms.*
