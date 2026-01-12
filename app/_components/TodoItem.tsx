'use client';

import Link from 'next/link';
import DotSvg from '@/icons/dot.svg';
import DotDoneSvg from '@/icons/dot_done.svg';
import { Item } from '@/types';
import { completeItem } from '@/app/_actions';

export default function TodoItem({ id, name, isCompleted }: Item) {
    const styleKey = !isCompleted ? 'undone' : 'done';
    return (
        <li className={`w-full max-w-[588px] h-[50px] rounded-[27px] border-[2px] border-slate-900 flex items-center gap-[16px] px-[16px] py-[8px] ${BgStyles[styleKey]}`}>
            <button onClick={async () => completeItem(id, !isCompleted)}>
                {!isCompleted ? <DotSvg /> : <DotDoneSvg />}
            </button>
            <Link href={`/items/${id}`}>
                <span className={`text-slate-800 ${nameStyles[styleKey]}`}>{name}</span>
            </Link>
        </li>
    )
}

const BgStyles = {
    undone: "",
    done: "bg-violet-100",
}
const nameStyles = {
    undone: "",
    done: "line-through",
}