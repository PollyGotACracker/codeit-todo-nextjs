'use client';

import { useActionState, useState } from "react";
import { HOME_TEXT } from "@/constants/strings";
import { validateText } from "@/libs/handlers";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { createItem } from '../_actions';

// Todo 항목 추가 폼 컴포넌트
export default function TodoAdd() {
    const [isFilled, setIsFilled] = useState(false);
    const [_, createAction, pending] = useActionState(createItem, null);

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsFilled(validateText(e.target.value));
    }

    return (
        <form action={createAction} className="w-full flex justify-center gap-x-[8px] desktop:gap-x-[16px]">
            <Input id="name" name="name" placeholder={HOME_TEXT.CREATE_PLACEHOLDER} onChange={onChangeInput} />
            <Button
                disabled={pending || !isFilled}
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