import { ButtonHTMLAttributes } from 'react';
import CapsuleSvg from '@/images/capsule.svg';

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    text: string,
    hideText?: boolean,
    bgColor?: string,
    textColor?: string
    type?: "button" | "submit" | "reset" | undefined,
}
export default function Button({
    Icon,
    text,
    hideText = false,
    bgColor = "var(--slate-100)",
    textColor = "var(--slate-900)",
    type = "button",
    ...props
}: ButtonType) {
    return (
        <button
            type={type}
            {...props}
            className={`relative min-w-[56px] max-w-[168px] h-[56px] outline-none`}
        >
            <span className="inline-flex justify-center items-center gap-x-[4px] pr-[7px] pb-[7px]">
                <Icon stroke={textColor} />
                {!hideText && <span
                    className="font-bold"
                    style={{ color: textColor } as React.CSSProperties}
                >
                    {text}
                </span>}
            </span>
            <CapsuleSvg width="100%" height="100%" fill={bgColor} className="absolute top-[0px] z-[-1]" />
        </button>

    )
}

