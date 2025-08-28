import { Role } from "@/types/globals";
import { currentUser } from "@clerk/nextjs/server";
import { checkRoles as checkRolesUtil } from "@/lib/auth-utils";

export const checkRoles = async (rolesToCheck: Role[] = []) => {
  const user = await currentUser();

  console.log("roles", user?.publicMetadata?.roles);

  return checkRolesUtil(rolesToCheck, user?.publicMetadata?.roles as Role[]);
};
