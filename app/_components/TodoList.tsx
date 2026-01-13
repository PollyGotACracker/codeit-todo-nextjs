import { Item } from "@/types";
import { HOME_TEXT } from "@/constants/messages";
import TodoItem from "./TodoItem";
import TodoSvg from "@/images/todo.svg";
import DoneSvg from "@/images/done.svg";
import TodoEmptySvg from "@/images/todo_empty.svg"
import DoneEmptySvg from "@/images/done_empty.svg"

interface TodoList {
    data: Item[],
    type: 'todo' | 'done'
}
export default function TodoList({ data, type }: TodoList) {
    const { Title, empty } = UI_DATA[type]

    if (data.length < 1) return (
        <section className="w-full flex flex-col gap-y-[16px]"> {/* desktop 64px */}
            <Title />
            <div className="flex flex-col items-center gap-y-[16px]"> {/* desktop 24px */}
                <empty.EmptyImg className="w-[120px] desktop:w-[240px] h-[120px] desktop:h-[240px]" />
                <p className="whitespace-pre-line text-center text-slate-400 font-bold">{empty.msg}</p>
            </div>
        </section>
    )
    return (
        <section className="w-full flex flex-col gap-y-[16px]">{/* desktop 64px */}
            <Title />
            <ul className="flex flex-col gap-y-[16px]"> {/* desktop 24px */}
                {data.map(i => <TodoItem key={i.id} {...i} />)}
            </ul>
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
    }, done: {
        Title: DoneSvg,
        empty: {
            EmptyImg: DoneEmptySvg,
            msg: HOME_TEXT.DONE_EMPTY_MSG
        }
    }
}
