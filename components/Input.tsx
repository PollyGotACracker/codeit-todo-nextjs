'use client';

import { InputHTMLAttributes } from 'react';
import CapsuleSvg from '@/images/capsule.svg';
import { findFormSubmit, validateText } from '@/libs/handlers';

export default function Input({ id, name, placeholder, ...props }: InputHTMLAttributes<HTMLInputElement>) {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const form = e.currentTarget.form;
        if (form) {
            const submitBtn = findFormSubmit(form) as HTMLButtonElement;
            submitBtn.disabled = validateText(e.target.value);
        }
    };

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
                onChange={onChange}
                {...props}
                className="absolute w-[calc(100%-24px)] outline-none pl-[24px] translate-y-[-3.5px]"
            />
        </div >
    )
}

