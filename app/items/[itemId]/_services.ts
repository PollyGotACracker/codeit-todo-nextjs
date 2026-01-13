"use server";

import fetcher from "@/libs/fetcher";
import { ItemDetail } from "@/types";

export default async function getItem(itemId: number) {
  const endpoint = `/items/${itemId}`;
  return fetcher<ItemDetail>(endpoint);
}
