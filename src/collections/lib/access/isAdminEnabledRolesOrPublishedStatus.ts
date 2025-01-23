import { isAdminEnabledRoles } from "./isAdminEnabledRoles";

export const isAdminEnabledRolesOrPublishedStatus = async () => {
  if (await isAdminEnabledRoles()) {
    return true;
  }

  return {
    _status: {
      equals: "published",
    },
  };
};
