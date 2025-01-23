import { PayloadRequest } from "payload";
import { checkRole } from "@/lib/auth-utils";

export const isAdminRolesOrSelf = async ({
  req: { user },
}: {
  req: PayloadRequest;
}) => {
  if (await checkRole(["super-admin", "admin"])) {
    return true;
  }

  if (user) {
    return {
      createdBy: {
        equals: user.id,
      },
    };
  }

  return false;
};
