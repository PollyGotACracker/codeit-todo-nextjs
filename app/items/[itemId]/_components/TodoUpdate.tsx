'use client';

import { ItemDetail } from "@/types";
import { ITEM_TEXT } from "@/constants/messages";
import { deleteItem, updateItem } from "../_actions";
import { checkUpdateFormChanged } from "../_helpers";
import CheckSvg from "@/icons/check.svg";
import XSvg from "@/icons/x.svg";
import TodoTitle from "./TodoTitle";
import TodoAttachImg from "./TodoAttachImg";
import TodoMemo from "./TodoMemo";
import Button from "@/components/Button";
import { findFormSubmit } from "@/libs/handlers";

interface TodoUpdateProps {
    data: ItemDetail;
}
export default function TodoUpdate({ data }: TodoUpdateProps) {
    const updateAction = updateItem.bind(null, data.id);
    const deleteAction = deleteItem.bind(null, data.id);

    const onChangeForm = (e: React.FormEvent<HTMLFormElement>) => {
        const hasChanged = checkUpdateFormChanged(e);
        const form = e.currentTarget;
        const submitBtn = findFormSubmit(form) as HTMLButtonElement;
        if (submitBtn) {
            submitBtn.disabled = !hasChanged;
        }
    }

    return (
        <form action={updateAction} onChange={onChangeForm} className="w-full max-w-[996px] h-full flex flex-col items-center">
            <TodoTitle name={data?.name} isCompleted={data?.isCompleted} />
            <section className="w-full h-full desktop:h-[311px] flex flex-col desktop:flex-row justify-center gap-x-[24px] gap-y-[15px] mt-[17px] desktop:mt-[24px]">
                <TodoAttachImg imageUrl={data?.imageUrl} />
                <TodoMemo memo={data?.memo} />
            </section>
            <section className="w-full flex flex-wrap justify-center desktop:justify-end gap-[7px] desktop:gap-[16px] mt-[24px]">
                {/* disabled true: initial */}
                <Button
                    disabled={true}
                    type="submit"
                    Icon={CheckSvg}
                    text={ITEM_TEXT.UPDATE_BUTTON}
                    bgColor="var(--lime-300)"
                />
                <Button
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