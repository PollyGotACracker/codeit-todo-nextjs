import { ItemDetail } from '@/types';
import { ITEM_TEXT } from '@/constants/messages';
import MemoSvg from '@/images/memo.svg';

type TodoMemoType = Pick<ItemDetail, "memo">;
export default function TodoMemo({ memo }: TodoMemoType) {
    return (
        <section
            className="w-full max-w-[588px] h-full relative rounded-[16px] px-[8px] py-[16px] flex flex-col justify-center items-center gap-y-[16px]"
        >
            <h2 className="w-[48px] h-[18px] font-extrabold text-amber-800">{ITEM_TEXT.MEMO_LABEL}</h2>
            <textarea
                defaultValue={memo}
                id="memo"
                name="memo"
                className="custom-scrollbar w-full h-full overflow-auto resize-none outline-none"
            />
            <MemoSvg className="absolute w-full h-full z-[-1] rounded-[16px]" />
        </section>
    )
}