import CapsuleSvg from '@/images/capsule.svg';

interface TodoInputType { id: string, name: string, placeholder: string }
export default function TodoInput({ id, name, placeholder }: TodoInputType) {
    return (
        <div className="relative w-full max-w-[1016px] h-[56px] flex items-center">
            <CapsuleSvg width="100%" height="100%" fill="var(--slate-100)" className="absolute" />
            <input
                type="text"
                id={id}
                name={name}
                placeholder={placeholder}
                defaultValue=""
                spellCheck={false}
                className="absolute w-full outline-none px-[16px]"
            />
        </div >
    )
}

