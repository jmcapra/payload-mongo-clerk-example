import configPromise from "@payload-config";
import { getPayload } from "payload";
import { checkRole } from "@/lib/auth-utils";

export const GET = async () => {
  if (!(await checkRole(["super-admin"]))) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "users",
  });

  return Response.json(data);
};
