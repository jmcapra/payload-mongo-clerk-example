import { checkRole } from "@/lib/auth-utils";

export const isAdminEnabledRoles = () =>
  checkRole(["super-admin", "admin", "editor"]);
