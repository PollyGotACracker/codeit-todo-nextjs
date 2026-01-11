import { ItemGetRes } from "@/types";

interface GroupedItems {
  todo: ItemGetRes[];
  done: ItemGetRes[];
}
export function groupItems(data: ItemGetRes[]): GroupedItems {
  return data.reduce<GroupedItems>(
    (acc, cur) => {
      const key = cur.isCompleted ? "done" : "todo";
      acc[key].push(cur);
      return acc;
    },
    { todo: [], done: [] }
  );
}
