import PlusSvg from '@/icons/plus.svg';
import TodoInput from "@/components/TodoInput";
import Button from "@/components/Button";
import TodoItem from "@/components/TodoItem";
import getItems from './_services';
import { createItem } from './_actions';
import { groupItems } from './_helpers';

export default async function Home() {
  const res = await getItems();
  const data = groupItems(res);

  return (
    <main className="w-full flex flex-col">
      <form action={createItem}>
        <TodoInput id="name" name="name" placeholder="할 일을 입력해주세요" />
        <Button type="submit" Icon={PlusSvg} text="추가하기" />
      </form>
      <section>
        {data.todo.map(i => <TodoItem key={i.id} {...i} />)}
      </section>
      <section>
        {data.done.map(i => <TodoItem key={i.id} {...i} />)}
      </section>
    </main>
  );
}

