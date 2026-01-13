import { Item } from "@/types";

export interface GroupedItems {
  todo: Item[];
  done: Item[];
}
export function groupItems(data: Item[]): GroupedItems {
  return data.reduce<GroupedItems>(
    (acc, cur) => {
      const key = cur.isCompleted ? "done" : "todo";
      acc[key].push(cur);
      return acc;
    },
    { todo: [], done: [] }
  );
}
