'use client';

import { useRouter, usePathname } from "next/navigation";
import { ROUTE } from "@/constants/route";

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();

    const handleNavigation = () => {
        if (pathname === ROUTE.HOME) {
            window.location.reload();
        } else {
            router.push(ROUTE.HOME);
        }
    }

    return (
        <header className="w-full h-[60px] pl-[16px] flex items-center bg-white border-b border-b-slate-200">
            <button type="button" title="Do It" onClick={handleNavigation}>
                <div className="logo" />
            </button>
        </header>
    )
}