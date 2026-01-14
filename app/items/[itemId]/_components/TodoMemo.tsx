import { ItemDetail } from '@/types';
import { ITEM_TEXT } from '@/constants/messages';
import MemoSvg from '@/images/memo.svg';

// 메모 표시, 수정 컴포넌트
type TodoMemoProps = Pick<ItemDetail, "memo">;
export default function TodoMemo({ memo }: TodoMemoProps) {
    return (
        <section
            className="isolate w-full h-full min-h-[311px] relative rounded-[16px] px-[8px] py-[16px] flex flex-col justify-center items-center gap-y-[16px]"
        >
            <h2 className="z-1 w-[48px] h-[18px] font-extrabold text-amber-800">{ITEM_TEXT.MEMO_LABEL}</h2>
            <textarea
                defaultValue={memo}
                id="memo"
                name="memo"
                className="custom-scrollbar z-1 w-full h-full flex-1 overflow-auto text-ellipsis resize-none outline-none"
            />
            <MemoSvg className="absolute w-full h-full rounded-[16px]" />
        </section>
    )
}