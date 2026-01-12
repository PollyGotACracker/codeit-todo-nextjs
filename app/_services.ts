import fetcher from "@/libs/fetcher";
import { Item } from "@/types";

export default async function getItems() {
  const endpoint = `/items`;
  return fetcher<Item[]>(endpoint);
}
