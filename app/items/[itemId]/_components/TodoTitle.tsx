'use client';

import { useState } from 'react';
import { ItemDetail } from '@/types';
import DotSvg from '@/icons/dot.svg';
import DotDoneSvg from '@/icons/dot_done.svg';

type TodoTitleType = Pick<ItemDetail, "name" | "isCompleted">;
export default function TodoTitle({ name, isCompleted }: TodoTitleType) {
    const [isChecked, setIsChecked] = useState<boolean>(isCompleted);

    const onChangeCompleted = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    };

    return (
        <div className={`${isChecked ? 'bg-violet-200' : 'bg-transparent'} w-full max-w-[966px] h-[64px] rounded-[27px] border-[2px] border-slate-900 flex justify-center items-center gap-[16px] px-[16px] py-[8px]`}>
            <label htmlFor="isCompleted" className="cursor-pointer">
                <input
                    type="checkbox"
                    id="isCompleted"
                    name="isCompleted"
                    value={isChecked ? 'true' : 'false'}
                    defaultChecked={isCompleted}
                    onChange={onChangeCompleted}
                    hidden
                />
                {!isChecked ? <DotSvg /> : <DotDoneSvg />}
            </label>
            <input id="name" name="name" defaultValue={name} className="text-slate-900 font-bold text-xl underline text-center outline-none" />
        </div >
    )
}

