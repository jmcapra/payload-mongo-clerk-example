import type { CollectionConfig } from "payload";
import { isAdminEnabledRoles } from "./lib/access/is-admin-enabled-roles";
import { isAdminEnabledRolesOrPublishedStatus } from "./lib/access/is-admin-enabled-roles-or-published-status";
import { isAdminRolesOrSelf } from "./lib/access/is-admin-roles-or-self";
import { setCreatedByOnCreate } from "@/hooks/beforeChange/setCreatedByOnCreate";

export const Posts: CollectionConfig = {
  slug: "posts",
  access: {
    create: isAdminEnabledRoles,
    read: isAdminEnabledRolesOrPublishedStatus,
    update: isAdminRolesOrSelf,
    delete: isAdminRolesOrSelf,
    readVersions: isAdminEnabledRoles,
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "createdBy",
      type: "relationship",
      relationTo: "users",
      access: {
        update: () => false,
      },
      admin: {
        readOnly: true,
        position: "sidebar",
        condition: (data) => Boolean(data?.createdBy),
      },
    },
  ],
  hooks: {
    beforeChange: [setCreatedByOnCreate],
  },
};
