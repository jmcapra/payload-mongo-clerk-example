"use client";

import { useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { LogOutIcon } from "@payloadcms/ui";
import React from "react";

export const LogOutButton: React.FC = () => {
  const { signOut } = useClerk();

  const handleOnClick = async () => {
    await signOut({ redirectUrl: "/" });
  };

  return (
    <Link href="/" onClick={handleOnClick}>
      <LogOutIcon />
    </Link>
  );
};

export default LogOutButton;
