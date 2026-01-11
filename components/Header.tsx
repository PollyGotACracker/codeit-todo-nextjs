import Link from "next/link";
import { ROUTE } from "@/constants/route";
import LogoTitle from "@/images/logo_title.svg";

export default function Header() {
    return (
        <header className="w-full h-[60px] pl-[16px] flex items-center bg-white border-b border-b-slate-200">
            <Link href={ROUTE.HOME}>
                <LogoTitle
                    alt="logo"
                    width={151}
                    height={40}
                />
            </Link>
        </header>
    )
}