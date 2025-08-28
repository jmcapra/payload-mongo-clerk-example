import { CollectionBeforeChangeHook } from "payload";


export const setCreatedByOnCreate: CollectionBeforeChangeHook = async ({ data, operation, req }) => {
    if (operation === "create") {
      if (req.user) {
        data.createdBy = req.user.id;
        return data;
      }
    }
  };