'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ItemDetail } from '@/types';
import { ITEM_TEXT } from '@/constants/strings';
import { ERROR_MSG } from '@/constants/errors';
import ImgSvg from '@/images/img.svg';
import PlusLgSvg from '@/icons/plus_lg.svg';
import EditSvg from '@/icons/edit.svg';
import { uploadImage } from '../_actions';
import { validateImageFile } from '../_helpers';

// 이미지 첨부, 표시 컴포넌트
type TodoAttachImgProps = Pick<ItemDetail, "imageUrl">
export default function TodoAttachImg({ imageUrl }: TodoAttachImgProps) {
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
            setImage(res.url); // imageUrl 저장
            setAlert("");
        } catch (err) {
            if (err instanceof Error) {
                // 에러가 발생한 imageFile 업로드 파일 삭제
                e.target.value = '';
                // 유효성 검사
                if (err.message === ERROR_MSG.INVALID_ATTACH_IMG) {
                    setAlert(ITEM_TEXT.INVALID_FILE_ALERT);
                }
                // 서버 에러
                else {
                    setAlert(ITEM_TEXT.ERROR_FILE_ALERT);
                }
            }
        }
    }

    return (
        <section className="w-full h-full min-h-[311px] desktop:max-w-[384px]">
            <input type="text" id="imageUrl" name="imageUrl" value={image} readOnly hidden />
            <div className="w-full h-full min-h-[311px] relative">
                {!image ?
                    <AttachImgEmpty /> :
                    <Image
                        src={image}
                        alt="todo image"
                        fill
                        className="w-full h-full object-cover rounded-[24px]"
                        sizes="100vw, 100vh"
                    />}
                <label htmlFor="imageFile" className={`${AttachImgButtonStyle[!image ? "add" : "edit"]} absolute z-[1] bottom-[16px] right-[16px] w-[64px] h-[64px] flex justify-center items-center rounded-[50%] cursor-pointer`}>
                    {!image ? <PlusLgSvg /> : <EditSvg />}
                    {/* imageFile: 이미지 업로드용 input. 데이터 변경 감지를 위해 name 속성 포함 */}
                    <input type="file" id="imageFile" name="imageFile" defaultValue="" accept="image/*" onChange={upload} hidden />
                </label>
            </div>
            <p className="w-full break-keep text-center">{alert}</p>
        </section>
    )
}

// 빈 이미지 영역 컴포넌트
function AttachImgEmpty() {
    return (
        <div className="w-full h-full min-h-[311px] rounded-[24px] bg-slate-50 border-slate-300 border-[2px] border-dashed flex justify-center items-center">
            <ImgSvg />
        </div>
    )
}

const AttachImgButtonStyle = {
    add: "bg-slate-200",
    edit: "border-[2px] border-slate-900 bg-foreground/50", // background opacity 50%
}