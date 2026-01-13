"use server";

import fetcher from "@/libs/fetcher";
import { Item } from "@/types";

type GetItemsParams = {
  page?: number;
  pageSize?: number;
};
export default async function getItems({
  page = 1,
  pageSize = 10,
}: GetItemsParams) {
  const endpoint = `/items?page=${page}&pageSize=${pageSize}`;
  return fetcher<Item[]>(endpoint);
}
