"use client";

import React from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export const ClerkUsersLink: React.FC = () => {
  const { isLoaded, user } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (!(user?.publicMetadata.roles as Array<string>).includes("super-admin")) {
    return null;
  }

  return <Link href="/admin/clerk-users">Users</Link>;
};

export default ClerkUsersLink;
