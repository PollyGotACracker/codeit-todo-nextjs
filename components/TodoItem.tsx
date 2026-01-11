import DotSvg from '@/icons/dot.svg';
import DotDoneSvg from '@/icons/dot_done.svg';

interface TodoItemType { content: string, isDone: boolean }
export default function TodoItem({ content, isDone }: TodoItemType) {
    const styleKey = !isDone ? 'undone' : 'done';

    return (
        <li className={`w-full max-w-[588px] h-[50px] rounded-[27px] border-[2px] border-slate-900 flex items-center gap-[16px] px-[16px] py-[8px] ${BgStyles[styleKey]}`}>
            <button className="cursor-pointer">
                {!isDone ? <DotSvg /> : <DotDoneSvg />}
            </button>
            <span className={`text-slate-800 ${ContentStyles[styleKey]}`}>{content}</span>
        </li>
    )
}

const BgStyles = {
    undone: "",
    done: "bg-violet-100",
}

const ContentStyles = {
    undone: "",
    done: "line-through",
}