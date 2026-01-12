'use client';

import { useEffect, useState, } from "react";
import { ItemDetail } from "@/types";
import { ROUTE } from "@/constants/route";
import { ITEM_TEXT } from "@/constants/messages";
import { deleteItem, updateItem } from "../_actions";
import CheckSvg from "@/icons/check.svg";
import XSvg from "@/icons/x.svg";
import TodoTitle from "./TodoTitle";
import TodoAttachImg from "./TodoAttachImg";
import TodoMemo from "./TodoMemo";
import Button from "@/components/Button";
import useServerAction from "@/hooks/useServerAction";

interface TodoUpdate {
    data: ItemDetail;
}
export default function TodoUpdate({ data }: TodoUpdate) {
    const [isChanged, setIsChanged] = useState(false);
    const _update = updateItem.bind(null, data.id);
    const _delete = deleteItem.bind(null, data.id);
    const [updateAction, isUpdatePending, isUpdateSuccess] = useServerAction(_update);
    const [deleteAction, isDeletePending] = useServerAction(_delete, ROUTE.HOME);

    useEffect(() => {
        if (isUpdateSuccess) {
            setIsChanged(false);
        }
    }, [isUpdateSuccess])

    const onChangeForm = (e: React.FormEvent<HTMLFormElement>) => {
        const form = e.currentTarget;
        let hasChanged = false;

        // checkbox checked 값이 false일 경우 FormData에 포함되지 않기 때문
        const elements = Array.from(form.elements) as (HTMLInputElement | HTMLTextAreaElement)[];
        for (const element of elements) {
            if (!element.name) continue;
            let flag = false;

            if (element instanceof HTMLInputElement && element.type === "checkbox") {
                // input checkbox
                flag = element.checked !== element.defaultChecked;
            } else {
                // input text | textarea
                flag = element.value !== element.defaultValue;
            }
            if (flag) {
                hasChanged = true;
                break;
            }
        }

        setIsChanged(hasChanged);
    }

    return (
        <form action={updateAction} onChange={onChangeForm} className="w-full flex flex-col items-center">
            <TodoTitle name={data?.name} isCompleted={data?.isCompleted} />
            <section className="w-full h-[311px] flex justify-center gap-[24px]">
                <TodoAttachImg imageUrl={data?.imageUrl} setIsChanged={setIsChanged} />
                <TodoMemo memo={data?.memo} />
            </section>
            <section className="w-full flex justify-end gap-[24px]">
                <Button
                    disabled={!isChanged || isUpdatePending}
                    type="submit"
                    Icon={CheckSvg}
                    text={ITEM_TEXT.UPDATE_BUTTON}
                    {...(isChanged) && { bgColor: "var(--lime-300)" }}
                />
                <Button
                    disabled={isDeletePending}
                    type="button"
                    Icon={XSvg}
                    text={ITEM_TEXT.DELETE_BUTTON}
                    bgColor="var(--rose-500)"
                    textColor="#fff"
                    onClick={deleteAction}
                />
            </section>
        </form>
    )
}