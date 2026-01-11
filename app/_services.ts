import fetcher from "@/libs/fetcher";
import { ItemGetRes } from "@/types";

export default async function getItems() {
  const endpoint = `/items`;
  return fetcher<ItemGetRes[]>(endpoint);
}
