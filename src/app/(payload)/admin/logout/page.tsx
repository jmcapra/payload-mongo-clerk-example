"use client";

import { MinimalTemplate } from "@payloadcms/next/templates";
import { LoadingOverlay, useTranslation } from "@payloadcms/ui";
import { useEffect } from "react";
import { useClerk } from "@clerk/nextjs";

export default function Page() {
  const { t } = useTranslation();
  const { signOut } = useClerk();

  useEffect(() => {
    (async () => {
      await signOut({ redirectUrl: "/" });
      window.location.href = "/";
    })();
  });

  return (
    <MinimalTemplate>
      <LoadingOverlay
        animationDuration={"0ms"}
        loadingText={t("authentication:loggingOut")}
      />
    </MinimalTemplate>
  );
}
