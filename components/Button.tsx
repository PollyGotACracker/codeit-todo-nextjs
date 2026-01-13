import { ButtonHTMLAttributes } from 'react';
import CapsuleSvg from '@/images/capsule.svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    text: string,
    hideMobileText?: boolean,
    bgColor?: string,
    textColor?: string
    type?: "button" | "submit" | "reset" | undefined,
}
export default function Button({
    Icon,
    text,
    hideMobileText = false,
    bgColor = "var(--slate-100)",
    textColor = "var(--slate-900)",
    type = "button",
    ...props
}: ButtonProps) {
    const key = !hideMobileText ? "visible" : "hidden"

    return (
        <button
            type={type}
            {...props}
            className={`group isolate relative ${BUTTON_STYLE[key]} desktop:w-[168px] h-[56px] flex-shrink-0 outline-none`}
        >
            <span className="z-1 relative inline-flex justify-center items-center gap-x-[4px] translate-x-[-3.5px] translate-y-[-3.5px]">
                <Icon stroke={textColor} className="translate-y-[1.5px] group-disabled:!stroke-slate-900" />
                <span
                    className={`font-bold ${TEXT_STYLE[key]} desktop:inline-block text-[--custom-color] group-disabled:!text-slate-900`}
                    style={{ color: textColor } as React.CSSProperties}
                >
                    {text}
                </span>
            </span>
            <CapsuleSvg
                width="100%"
                height="100%"
                fill={bgColor}
                className={`absolute top-[0px] group-disabled:!fill-slate-100`}
            />
        </button>
    )
}

const BUTTON_STYLE = {
    hidden: "w-[56px]",
    visible: "w-[168px]"
}
const TEXT_STYLE = {
    hidden: "hidden",
    visible: "inline-block"
}