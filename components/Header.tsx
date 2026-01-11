import LogoTitle from "@/images/logo_title.svg"

export default function Header() {
    return (
        <header className="w-full h-[60px] flex items-center bg-white border-b border-b-slate-200">
            <LogoTitle
                alt="logo"
                width={151}
                height={40}
            />
        </header>
    )
}