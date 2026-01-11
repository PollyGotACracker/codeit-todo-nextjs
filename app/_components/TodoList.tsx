import { ItemGetRes } from "@/types";
import TodoItem from "./TodoItem";
import TodoSvg from "@/images/todo.svg";
import DoneSvg from "@/images/done.svg";
import TodoEmptySvg from "@/images/todo_empty.svg"
import DoneEmptySvg from "@/images/done_empty.svg"

interface TodoList {
    data: ItemGetRes[],
    type: 'todo' | 'done'
}
export default function TodoList({ data, type }: TodoList) {
    const { Title, empty } = UI_DATA[type]

    if (data.length < 1) return (
        <section className="w-full flex flex-col gap-y-[16px]"> {/* desktop 64px */}
            <Title />
            <div className="flex flex-col items-center gap-y-[16px]"> {/* desktop 24px */}
                <empty.EmptyImg width="120px" height="120px" />
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

const todo = {
    Title: TodoSvg,
    empty: {

        EmptyImg: TodoEmptySvg,
        msg: "할 일이 없어요.\nTODO를 새롭게 추가해주세요!"
    }
}
const done = {
    Title: DoneSvg,
    empty: {
        EmptyImg: DoneEmptySvg,
        msg: "아직 다 한 일이 없어요.\n해야 할 일을 체크해보세요!"
    }
}

const UI_DATA = { todo, done }
