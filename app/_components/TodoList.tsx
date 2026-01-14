import { Item } from "@/types";
import { HOME_TEXT } from "@/constants/strings";
import TodoItem from "./TodoItem";
import TodoSvg from "@/images/todo.svg";
import DoneSvg from "@/images/done.svg";
import TodoEmptySvg from "@/images/todo_empty.svg"
import DoneEmptySvg from "@/images/done_empty.svg"

// Todo 목록 컴포넌트
interface TodoListProps {
    data: Item[],
    type: 'todo' | 'done'
}
export default function TodoList({ data, type }: TodoListProps) {
    const { Title, empty } = UI_DATA[type]

    return (
        <section className="w-full flex flex-col gap-y-[16px]">
            <Title />
            {data.length >= 1 ?
                <ul className="flex flex-col gap-y-[16px]">
                    {data.map(i => <TodoItem key={i.id} {...i} />)}
                </ul> :
                <div className="flex flex-col items-center gap-y-[16px] desktop:gap-y-[24px]">
                    <empty.EmptyImg className="w-[120px] desktop:w-[240px] h-[120px] desktop:h-[240px]" />
                    <p className="whitespace-pre-line text-center text-slate-400 font-bold">{empty.msg}</p>
                </div>
            }
        </section>
    )
}

const UI_DATA = {
    todo: {
        Title: TodoSvg,
        empty: {
            EmptyImg: TodoEmptySvg,
            msg: HOME_TEXT.TODO_EMPTY_MSG
        }
    },
    done: {
        Title: DoneSvg,
        empty: {
            EmptyImg: DoneEmptySvg,
            msg: HOME_TEXT.DONE_EMPTY_MSG
        }
    }
}
