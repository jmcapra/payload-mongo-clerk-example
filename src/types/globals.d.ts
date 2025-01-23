import { ROLES } from "@/constants/auth";

export {};

export type Role = (typeof ROLES)[number];

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      roles?: Role[];
    };
  }
}
