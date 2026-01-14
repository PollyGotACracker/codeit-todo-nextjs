"use server";

import fetcher from "@/libs/fetcher";
import { revalidatePath } from "next/cache";
import { ItemDetail, ActionState } from "@/types";
import { ROUTE } from "@/constants/route";
import { ERROR_MSG } from "@/constants/errors";

export async function createItem(
  _: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const name = formData.get("name");
    if (!name) return { error: ERROR_MSG.INVALID_FIELD("name") };

    const endpoint = `/items`;
    await fetcher<ItemDetail>(endpoint, {
      method: "POST",
      body: JSON.stringify({ name }),
    });
    revalidatePath(ROUTE.HOME);

    return { success: true };
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message };
    } else {
      return { error: ERROR_MSG.SERVER_ERROR };
    }
  }
}

type CompleteItemPayload = {
  itemId: number;
  isCompleted: boolean;
};
export async function completeItem(
  _: ActionState,
  payload: CompleteItemPayload
): Promise<ActionState> {
  try {
    const { itemId, isCompleted } = payload;
    if (!itemId) return { error: ERROR_MSG.INVALID_PARAM("itemId") };
    if (typeof isCompleted !== "boolean") {
      return { error: ERROR_MSG.INVALID_PARAM("isCompleted") };
    }

    const endpoint = `/items/${itemId}`;
    await fetcher<ItemDetail>(endpoint, {
      method: "PATCH",
      body: JSON.stringify({ isCompleted }),
    });
    revalidatePath(ROUTE.HOME);
    revalidatePath(`${ROUTE.ITEMS}/${itemId}`);

    return { success: true };
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message };
    } else {
      return { error: ERROR_MSG.SERVER_ERROR };
    }
  }
}
