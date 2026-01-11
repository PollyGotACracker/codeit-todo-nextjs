import CapsuleSvg from '@/images/capsule.svg';

interface ButtonType {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    text: string,
    bgColor?: string,
    textColor?: string
    type?: "button" | "submit" | "reset" | undefined,
    id?: string,
    name?: string
}
export default function Button({
    Icon,
    text,
    bgColor = "var(--slate-100)",
    textColor = "var(--slate-900)",
    type = "button",
    id,
    name
}: ButtonType) {
    return (
        <button
            type={type}
            {...(id && { id })}
            {...(name && { name })}
            className="relative w-full max-w-[168px] h-[56px] flex justify-center items-center gap-x-[4px] cursor-pointer outline-none"
        >
            <Icon stroke={textColor} />
            <span
                className="font-bold"
                style={{ color: textColor } as React.CSSProperties}
            >
                {text}
            </span>
            <CapsuleSvg width="100%" height="100%" fill={bgColor} className="absolute z-[-1]" />
        </button>

    )
}

