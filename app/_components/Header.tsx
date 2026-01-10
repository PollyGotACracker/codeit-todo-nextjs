import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full h-[60px] flex items-center bg-white border-b border-b-slate-200">
            <Image
                src="/images/logo_title.svg"
                alt="doit logo"
                width={151}
                height={40}
            />
        </header>
    )
}