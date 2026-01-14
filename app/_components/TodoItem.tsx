'use client';

import Link from 'next/link';
import DotSvg from '@/icons/dot.svg';
import DotDoneSvg from '@/icons/dot_done.svg';
import { Item } from '@/types';
import { completeItem } from '@/app/_actions';
import { startTransition, useActionState } from 'react';

// Todo 목록 항목 컴포넌트
export default function TodoItem({ id, name, isCompleted }: Item) {
    const [_, completeAction, pending] = useActionState(completeItem, null);
    const styleKey = !isCompleted ? 'undone' : 'done';

    const handleComplete = () => {
        // onClick 에서 useActionState action 사용 시 startTransition 필요
        startTransition(() => {
            completeAction({
                itemId: id,
                isCompleted: !isCompleted
            })
        })
    }

    return (
        <li className={`w-full h-[50px] rounded-[27px] border-[2px] border-slate-900 flex items-center gap-[16px] px-[16px] py-[8px] ${BgStyles[styleKey]}`}>
            <button
                disabled={pending}
                type="button"
                title={`${name} checkbox`}
                onClick={handleComplete}
            >
                {!isCompleted ? <DotSvg /> : <DotDoneSvg />}
            </button>
            <Link href={`/items/${id}`} className="flex-1">
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