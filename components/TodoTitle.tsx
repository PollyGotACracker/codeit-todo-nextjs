import DotSvg from '@/icons/dot.svg';
import DotDoneSvg from '@/icons/dot_done.svg';

interface TodoTitleType { name: string, isCompleted: boolean }
export default function TodoTitle({ name, isCompleted }: TodoTitleType) {
    const styleKey = !isCompleted ? 'undone' : 'done';

    return (
        <li className={`w-full max-w-[966px] h-[64px] rounded-[27px] border-[2px] border-slate-900 flex justify-center items-center gap-[16px] px-[16px] py-[8px] ${BgStyles[styleKey]}`}>
            <button>
                {!isCompleted ? <DotSvg /> : <DotDoneSvg />}
            </button>
            <span className="text-slate-900 font-bold text-xl underline">{name}</span>
        </li>
    )
}

const BgStyles = {
    undone: "",
    done: "bg-violet-200",
}

