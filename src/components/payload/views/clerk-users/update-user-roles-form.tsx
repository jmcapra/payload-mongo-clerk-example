"use client";

import { updateRoles, UpdateUserRolesState } from "./actions";
import React, { useActionState } from "react";
import { ROLES } from "@/constants/auth";

interface UpdateUserRolesFormProps {
  userId: string;
  roles: string[];
}

export const UpdateUserRolesForm: React.FC<UpdateUserRolesFormProps> = ({
  userId,
  roles = [],
}: UpdateUserRolesFormProps) => {
  const initialState: UpdateUserRolesState = {
    errors: {},
    roles,
    message: null,
  };
  const updateRolesWithUserId = updateRoles.bind(null, userId);
  const [state, formAction, pending] = useActionState(
    updateRolesWithUserId,
    initialState,
  );

  return (
    <form action={formAction}>
      <div aria-live="polite" aria-atomic="true">
        {state.message && <p>{state.message}</p>}
      </div>
      <fieldset>
        <legend aria-describedby="roles-error">Roles:</legend>
        {ROLES.map((role) => (
          <div key={role}>
            <input
              type="checkbox"
              id={`${role}-role`}
              name="roles"
              value={role}
              defaultChecked={roles.includes(role)}
            />
            <label htmlFor={`${role}-role`}>{role}</label>
          </div>
        ))}
        <div id="roles-error" aria-live="polite" aria-atomic="true">
          {state.errors?.roles &&
            state.errors.roles.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
        </div>
      </fieldset>
      <button type="submit" disabled={pending} style={{ marginTop: "10px" }}>
        Update
      </button>
    </form>
  );
};

export default UpdateUserRolesForm;
