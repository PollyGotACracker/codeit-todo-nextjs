import TodoList from './TodoList';
import { GroupedItems } from '../_helpers';

// Todo 목록 Wrapper 컴포넌트
interface TodoSectionProps { data: GroupedItems }
export default function TodoSection({ data }: TodoSectionProps) {
    return (
        <section className="w-full max-w-[1200px] flex flex-col desktop:flex-row gap-x-[24px] gap-y-[48px]">
            <TodoList data={data.todo} type="todo" />
            <TodoList data={data.done} type="done" />
        </section>
    );
}

