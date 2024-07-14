'use client';
import Link from 'next/link';
import { useEffect } from 'react';
function Menu({ closeMenu }: Readonly<{ closeMenu: Function }>): JSX.Element {
    useEffect(() => {
        // Disable scroll when menu is open
        document.body.style.overflow = 'hidden';

        // Re-enable scroll when menu is closed
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div
            className="absolute right-0 top-20 z-30 hidden h-screen w-full flex-col items-center justify-start border-t   border-slate-400 bg-background bg-opacity-70 px-20 shadow-md backdrop-blur-lg max-md:flex"
            onClick={closeMenu as () => void}
        >
            <ul className={`flex w-full flex-col text-lg  font-semibold  `}>
                <li className=" flex w-full cursor-pointer justify-center border-b border-slate-400 py-5">
                    <Link href="/">Documentation</Link>
                </li>
                <li className="flex w-full cursor-pointer  justify-center border-b border-slate-400 py-5">
                    <Link href="/register">How It Work</Link>
                </li>
            </ul>
        </div>
    );
}
export default Menu;
