import CapsuleSvg from '../../public/images/capsule.svg';

interface TodoInputType { placeholder: string }
export default function TodoInput({ placeholder }: TodoInputType) {
    return (
        <div className="relative w-full max-w-[1016px] h-[56px] flex items-center">
            <CapsuleSvg width="100%" height="100%" fill="var(--slate-100)" className="absolute" />
            <input
                type="text"
                name="todo_insert"
                placeholder={placeholder}
                className="absolute w-full outline-none px-[16px]"
            />
        </div >
    )
}

