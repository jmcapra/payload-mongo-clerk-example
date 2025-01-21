import type { CollectionConfig } from "payload";
import { ClerkAuthStrategy } from "./lib/auth/clerk-strategy";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    disableLocalStrategy: true,
    strategies: [ClerkAuthStrategy],
  },
  fields: [
    {
      name: "clerkUserId",
      type: "text",
      label: "Clerk userId",
      required: true,
      index: true,
      unique: true,
    },
  ],
};
