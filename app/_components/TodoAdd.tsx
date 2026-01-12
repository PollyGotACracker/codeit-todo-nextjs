'use client';

import { ChangeEvent, useState } from "react";
import { useFormStatus } from "react-dom";
import { HOME_TEXT } from "@/constants/messages";
import PlusSvg from '@/icons/plus.svg';
import Input from "@/components/Input";
import Button from "@/components/Button";
import { createItem } from '../_actions';

export default function TodoAdd() {
    const [name, setName] = useState<string>("");
    const { pending } = useFormStatus();
    const isFilled = name.trim().length > 0;

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (
        <form action={createItem} className="w-full flex justify-center gap-x-[8px]">
            <Input id="name" name="name" placeholder={HOME_TEXT.CREATE_PLACEHOLDER} onChange={onChangeInput} />
            <Button
                disabled={!isFilled || pending}
                type="submit"
                Icon={PlusSvg}
                text={HOME_TEXT.CREATE_BUTTON}
                {...isFilled && { bgColor: "var(--violet-600)", textColor: "#fff" }}
            />
        </form>
    )

}