import TodoAdd from './_components/TodoAdd';
import TodoSection from './_components/TodoSection';
import getItems from './_services';
import { groupItems } from './_helpers';

export default async function Home() {
  const res = await getItems({ page: 1, pageSize: 100 });
  const grouped = groupItems(res);

  return (
    <main className="main relative gap-[24px] desktop:gap-[40px]">
      <TodoAdd />
      <TodoSection data={grouped} />
    </main>
  );
}