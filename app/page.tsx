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

/**
 * [ISSUE: form action error]
 * javascript:throw new Error('A React form was unexpectedly submitted. 
 * If you called form.submit() manually, consider using form.requestSubmit() instead. 
 * If you're trying to use event.stopPropagation() in a submit event handler, 
 * consider also calling event.preventDefault().')
 * ** HTML에서 표시됨. 사라졌다가 페이지 복귀 시 다시 나타나는 경우도 있음.
 * 1. state 변수 제거?: X
 * 2. form 을 포함한 내부 요소의 eventHandler 제거?: X
 * 3. submit 버튼 disabled 변경 금지?: X
 * 4. e.preventDefault() 사용?: X
 */