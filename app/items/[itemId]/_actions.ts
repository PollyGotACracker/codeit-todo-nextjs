"use server";

import { redirect } from "next/navigation";
import fetcher from "@/libs/fetcher";
import { ImageUploadRes, ItemDetail } from "@/types";
import { ROUTE } from "@/constants/route";

export async function updateItem(itemId: number, formData: FormData) {
  const isCompleted = !!formData.get("isCompleted"); // "true" | null => true | false
  const name = formData.get("name");
  const memo = formData.get("memo");
  const imageUrl = formData.get("imageUrl");

  const endpoint = `/items/${itemId}`;
  await fetcher<ItemDetail>(endpoint, {
    method: "PATCH",
    body: JSON.stringify({ name, memo, imageUrl, isCompleted }),
  });

  redirect(ROUTE.HOME);
}

export async function uploadImage(formData: FormData): Promise<ImageUploadRes> {
  const endpoint = `/images/upload`;
  const res = await fetcher<ImageUploadRes>(endpoint, {
    method: "POST",
    body: formData,
  });

  return res;
}

export async function deleteItem(itemId: number) {
  const endpoint = `/items/${itemId}`;
  await fetcher<ItemDetail>(endpoint, {
    method: "DELETE",
  });

  redirect(ROUTE.HOME);
}
