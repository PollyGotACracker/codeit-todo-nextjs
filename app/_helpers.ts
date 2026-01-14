import { Item } from "@/types";

export interface GroupedItems {
  todo: Item[];
  done: Item[];
}
export function groupItems(data: Item[]): GroupedItems {
  return data.reduce<GroupedItems>(
    (acc, cur) => {
      // Todo 항목 배열을 done, todo 키로 그룹핑
      const key = cur.isCompleted ? "done" : "todo";
      acc[key].push(cur);
      return acc;
    },
    { todo: [], done: [] }
  );
}
