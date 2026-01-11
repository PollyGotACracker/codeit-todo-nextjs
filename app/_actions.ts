"use server";

import fetcher from "@/libs/fetcher";
import { revalidatePath } from "next/cache";
import { ItemPostRes } from "@/types";
import { ROUTE } from "@/constants/route";

export async function createItem(formData: FormData) {
  const name = formData.get("name");
  if (!name) return;

  const endpoint = `/items`;
  await fetcher<ItemPostRes>(endpoint, {
    method: "POST",
    body: JSON.stringify({ name }),
  });

  revalidatePath(ROUTE.HOME);
}

export async function completeItem(itemId: number, isCompleted: boolean) {
  const endpoint = `/items/${itemId}`;
  await fetcher<ItemPostRes>(endpoint, {
    method: "PATCH",
    body: JSON.stringify({ isCompleted }),
  });

  revalidatePath(ROUTE.HOME);
}
