import type { CollectionConfig } from "payload";
import { isAdminEnabledRoles } from "./lib/access/isAdminEnabledRoles";
import { isAllowed } from "./lib/access/isAllowed";
import { isAdminRoles } from "./lib/access/isAdminRoles";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    create: isAdminEnabledRoles,
    read: isAllowed,
    update: isAdminRoles,
    delete: isAdminRoles,
    readVersions: isAdminEnabledRoles,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  upload: true,
};
