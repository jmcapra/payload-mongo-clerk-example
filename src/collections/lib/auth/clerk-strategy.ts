import { auth } from "@clerk/nextjs/server";
import {
  AuthStrategy,
  AuthStrategyFunctionArgs,
  AuthStrategyResult,
  type Payload,
  User,
} from "payload";

export async function getUser({
  payload,
}: {
  payload: Payload;
}): Promise<User | null> {
  const { userId }: { userId: string | null } = await auth();

  if (!userId) {
    return null;
  }

  let currentUser;
  const findUserQuery = await payload.find({
    collection: "users",
    where: {
      clerkUserId: {
        equals: userId,
      },
    },
  });
  if (findUserQuery.docs.length === 0) {
    currentUser = await payload.create({
      collection: "users",
      data: {
        clerkUserId: userId,
      },
    });
  } else {
    currentUser = findUserQuery?.docs[0];
  }

  return {
    collection: "users",
    ...currentUser,
  };
}

async function authenticate({
  payload,
}: AuthStrategyFunctionArgs): Promise<AuthStrategyResult> {
  const user = await getUser({ payload });

  if (!user) {
    return { user: null };
  }

  return {
    user,
  };
}

export const ClerkAuthStrategy: AuthStrategy = {
  name: "clerk-auth-strategy",
  authenticate,
};
