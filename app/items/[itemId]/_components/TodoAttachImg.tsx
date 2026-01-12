'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ItemDetail } from '@/types';
import { ITEM_TEXT } from '@/constants/messages';
import ImgSvg from '@/images/img.svg';
import PlusLgSvg from '@/icons/plus_lg.svg';
import EditSvg from '@/icons/edit.svg';
import { uploadImage } from '../_actions';
import { validateImageFile } from '../_helpers';

type TodoAttachImgType = Pick<ItemDetail, "imageUrl"> & { setIsChanged: React.Dispatch<React.SetStateAction<boolean>> };
export default function TodoAttachImg({ imageUrl, setIsChanged }: TodoAttachImgType) {
    const [image, setImage] = useState(imageUrl ?? "");
    const [alert, setAlert] = useState("");

    const upload = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
        try {
            const input = e.target;
            if (!input.files || input.files.length === 0) return;
            const file = input.files[0];
            validateImageFile(file);

            const formData = new FormData();
            formData.append('image', file);
            const res = await uploadImage(formData);
            setImage(res.url);
            setIsChanged(true);
            setAlert("");
        } catch (e) {
            if (e instanceof Error) {
                if (e.message === "Invalid file") {
                    setAlert(ITEM_TEXT.INVALID_FILE_ALERT);
                } else {
                    setAlert(ITEM_TEXT.ERROR_FILE_ALERT);
                }
            }
        }
    }

    return (
        <>
            <section className="w-full h-full max-w-[384px] relative">
                <label htmlFor="image" className={`${AttachImgButtonStyle[!image ? "add" : "edit"]} absolute z-[1] bottom-[16px] right-[16px] w-[64px] h-[64px] flex justify-center items-center rounded-[50%] cursor-pointer`}>
                    {!image ? <PlusLgSvg /> : <EditSvg />}
                </label>
                {/* image: 이미지 업로드용 input. FormData 미포함 */}
                <input type="file" id="image" accept="image/*" onChange={upload} hidden />
                <input type="text" id="imageUrl" name="imageUrl" value={image} readOnly hidden />
                {!image ?
                    <AttachImgEmpty /> :
                    <Image
                        src={image}
                        alt="todo image"
                        fill
                        className="object-cover rounded-[24px]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />}
            </section>
            <p>{alert}</p>
        </>
    )
}

function AttachImgEmpty() {
    return (
        <div className="w-full h-full rounded-[24px] bg-slate-50 border-slate-300 border-[2px] border-dashed flex justify-center items-center">
            <ImgSvg />
        </div>
    )
}

const AttachImgButtonStyle = {
    add: "bg-slate-200",
    edit: "border-[2px] border-slate-900 bg-foreground/50", // background opacity 50%
}