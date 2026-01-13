import { InputHTMLAttributes } from 'react';
import CapsuleSvg from '@/images/capsule.svg';

export default function Input({ id, name, placeholder, ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="relative w-full max-w-[1016px] min-w-0 h-[56px] flex items-center">
            <CapsuleSvg width="100%" height="100%" fill="var(--slate-100)" className="absolute" />
            <input
                type="text"
                id={id}
                name={name}
                placeholder={placeholder}
                defaultValue=""
                spellCheck="false"
                autoComplete="false"
                {...props}
                className="absolute w-full outline-none px-[24px] translate-y-[-3.5px]"
            />
        </div >
    )
}

