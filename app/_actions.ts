"use server";

import fetcher from "@/libs/fetcher";
import { revalidatePath } from "next/cache";
import { ItemDetail } from "@/types";
import { ROUTE } from "@/constants/route";

export async function createItem(formData: FormData) {
  const name = formData.get("name");
  if (!name) return;

  const endpoint = `/items`;
  await fetcher<ItemDetail>(endpoint, {
    method: "POST",
    body: JSON.stringify({ name }),
  });

  revalidatePath(ROUTE.HOME);
}

export async function completeItem(itemId: number, isCompleted: boolean) {
  const endpoint = `/items/${itemId}`;
  await fetcher<ItemDetail>(endpoint, {
    method: "PATCH",
    body: JSON.stringify({ isCompleted }),
  });

  revalidatePath(ROUTE.HOME);
  revalidatePath(`${ROUTE.ITEMS}/${itemId}`);
}
