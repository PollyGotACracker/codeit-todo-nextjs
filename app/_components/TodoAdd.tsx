'use client';

import { HOME_TEXT } from "@/constants/messages";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { createItem } from '../_actions';
import { useEffect, useState } from "react";
import useServerAction from "@/hooks/useServerAction";
import { validateText } from "@/libs/handlers";

export default function TodoAdd() {
    const [isFilled, setIsFilled] = useState(false);
    const [createAction, isCreatePending] = useServerAction(createItem);

    useEffect(() => {
        if (isCreatePending) {
            setIsFilled(false);
        }
    }, [isCreatePending])

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsFilled(validateText(e.target.value));
    }

    return (
        <form action={createAction} className="w-full flex justify-center gap-x-[8px] desktop:gap-x-[16px]">
            <Input id="name" name="name" placeholder={HOME_TEXT.CREATE_PLACEHOLDER} onChange={onChangeInput} />
            {/* disabled true: initial */}
            <Button
                disabled={!isFilled}
                type="submit"
                iconType="insert"
                text={HOME_TEXT.CREATE_BUTTON}
                hideMobileText={true}
                bgColor="var(--violet-600)"
                textColor="#fff"
            />
        </form>
    )

}