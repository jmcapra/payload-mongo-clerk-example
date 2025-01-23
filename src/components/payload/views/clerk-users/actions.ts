"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { checkRole } from "@/lib/auth-utils";

const updateRolesSchema = z.object({
  roles: z
    .string()
    .array()
    .min(1, { message: "You must choose at least one role" }),
});

export interface UpdateUserRolesState {
  errors: {
    roles?: string[];
  };
  roles: string[] | null;
  message: string | null;
}

export async function updateRoles(
  userId: string,
  prevState: UpdateUserRolesState,
  formData: FormData,
): Promise<UpdateUserRolesState> {
  // Check that the user trying to set the role is an admin
  if (!(await checkRole(["super-admin"]))) {
    return {
      errors: {},
      roles: null,
      message: "Not Authorized",
    };
  }

  // Validate form fields using Zod
  const validatedFields = updateRolesSchema.safeParse({
    roles: formData.getAll("roles"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      roles: null,
      message: "Error. Failed to update roles.",
    };
  }

  // Prepare data
  const { roles } = validatedFields.data;

  const client = await clerkClient();

  try {
    const result = await client.users.updateUser(userId, {
      publicMetadata: { roles },
    });

    revalidatePath("/admin/clerk-users");

    return {
      errors: {},
      roles: result.publicMetadata.roles as Array<string>,
      message: "Updated successfully.",
    };
  } catch (exception) {
    return {
      errors: {},
      roles: null,
      message: exception as string,
    };
  }
}
