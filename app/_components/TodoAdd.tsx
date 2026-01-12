'use client';

import { ChangeEvent, useEffect, useState } from "react";
import { HOME_TEXT } from "@/constants/messages";
import PlusSvg from '@/icons/plus.svg';
import Input from "@/components/Input";
import Button from "@/components/Button";
import { createItem } from '../_actions';
import useServerAction from "@/hooks/useServerAction";

export default function TodoAdd() {
    const [name, setName] = useState("");
    const [isFilled, setIsFilled] = useState(false);
    const [createAction, isCreatePending, isCreateSuccess] = useServerAction(createItem);

    useEffect(() => {
        // name 보다 success 가 우선순위 높음
        if (name.trim().length > 0) {
            setIsFilled(true)
        }
        if (isCreateSuccess) {
            setIsFilled(false)
        }
    }, [name, isCreateSuccess])

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (
        <form action={createAction} className="w-full flex justify-center gap-x-[8px]">
            <Input id="name" name="name" placeholder={HOME_TEXT.CREATE_PLACEHOLDER} onChange={onChangeInput} />
            <Button
                disabled={!isFilled || isCreatePending}
                type="submit"
                Icon={PlusSvg}
                text={HOME_TEXT.CREATE_BUTTON}
                {...isFilled && { bgColor: "var(--violet-600)", textColor: "#fff" }}
            />
        </form>
    )

}