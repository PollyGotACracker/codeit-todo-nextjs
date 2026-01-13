import TodoList from '@/app/_components/TodoList';
import getItems from './_services';
import { groupItems } from './_helpers';
import TodoAdd from './_components/TodoAdd';

export default async function Home() {
  const res = await getItems();
  const data = groupItems(res);

  return (
    <main className="main gap-[24px] desktop:gap-[40px]">
      <TodoAdd />
      <section className="w-full max-w-[1200px] flex flex-col desktop:flex-row gap-x-[24px] gap-y-[48px]">
        <TodoList data={data.todo} type="todo" />
        <TodoList data={data.done} type="done" />
      </section>
    </main>
  );
}

