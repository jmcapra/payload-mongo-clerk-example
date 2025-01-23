import { Role } from "@/types/globals";
import { auth } from "@clerk/nextjs/server";

export const checkRole = async (checkRoles: Role[] = []) => {
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata?.roles) {
    if (
      checkRoles.some((checkRole) => {
        return sessionClaims.metadata.roles?.some(
          (sessionRole) => sessionRole === checkRole,
        );
      })
    ) {
      return true;
    }
  }

  return false;
};
