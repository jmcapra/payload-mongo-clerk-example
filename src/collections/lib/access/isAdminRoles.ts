import { checkRole } from "@/lib/auth-utils";

export const isAdminRoles = () => checkRole(["super-admin", "admin"]);
