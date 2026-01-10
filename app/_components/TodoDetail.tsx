import ImgSvg from '../../public/images/img.svg';
import PlusLgSvg from '../../public/icons/plus_lg.svg';
import EditSvg from '../../public/icons/edit.svg';
import MemoSvg from '../../public/images/memo.svg';

interface AttachImgType { imgUrl: string }
interface MemoType { memo: string }
export default function TodoDetail({ }) {
    return (
        <section>
            <form method="post" encType="multipart/form-data" className="w-full h-[311px] flex gap-[24px]">
                <AttachImg imgUrl={""} />
                <Memo memo={"모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다. 모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다. 국회의원은 국회에서 직무상 행한 발언과 표결에 관하여 국회외에서 책임을 지지 아니한다. 대통령은 국회에 출석하여 발언하거나 서한으로 의견을 표시할 수 있다. 국회가 재적의원 과반수의 찬성으로 계엄의 해제를 요구한 때에는 대통령은 이를 해제하여야 한다. 모든 국민은 종교의 자유를 가진다. 대통령은 취임에 즈음하여 다음의 선서를 한다. 모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다. 모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다. 국회의원은 국회에서 직무상 행한 발언과 표결에 관하여 국회외에서 책임을 지지 아니한다. 대통령은 국회에 출석하여 발언하거나 서한으로 의견을 표시할 수 있다. 국회가 재적의원 과반수의 찬성으로 계엄의 해제를 요구한 때에는 대통령은 이를 해제하여야 한다. 모든 국민은 종교의 자유를 가진다. 대통령은 취임에 즈음하여 다음의 선서를 한다."} />
            </form>
        </section>
    )
}

function AttachImg({ imgUrl }: AttachImgType) {
    const styleKey = !imgUrl ? "add" : "edit"
    return (
        <section className="w-full h-full max-w-[384px] relative">
            <label htmlFor="image" className={`${AttachImgButtonStyle[styleKey]} absolute bottom-[16px] right-[16px] w-[64px] h-[64px] flex justify-center items-center rounded-[50%] cursor-pointer`}>
                {!imgUrl ? <PlusLgSvg /> : <EditSvg />}
            </label>
            <input type="file" id="image" name="image" accept="image/*" className="absolute opacity-0" />
            {!imgUrl ? <AttachImgEmpty /> : <img />}
        </section>
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

function Memo({ memo }: MemoType) {
    return (
        <section
            className="w-full max-w-[588px] h-full relative rounded-[16px] px-[8px] py-[16px] flex flex-col justify-center items-center gap-y-[16px]"
        >
            <h2 className="w-[48px] h-[18px] font-extrabold text-amber-800">Memo</h2>
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