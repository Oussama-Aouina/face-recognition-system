'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoCloseCircleOutline, IoMenu } from 'react-icons/io5';
import Menu from './Menu';
export default function Navbar(): JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState<true | false>(false);
    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="sm:px-20 z-10 flex w-full items-center justify-between px-5 py-5 ">
            <Link href="/" className=" flex items-center gap-2">
                <Image
                    src="/images/logo/logo.png"
                    alt="Logo"
                    width={31}
                    height={32}
                    priority
                />
                <span className="text-2xl font-bold">Recognizer</span>
            </Link>
            <ul className="flex gap-16 font-bold max-md:hidden">
                <li>
                    <Link href="/">Documentation</Link>
                </li>
                <li>
                    <Link href="/">How It Work</Link>
                </li>
            </ul>

            {!isMenuOpen ? (
                <IoMenu
                    className="hidden cursor-pointer text-4xl max-md:block"
                    onClick={handleMenu}
                />
            ) : (
                <IoCloseCircleOutline
                    className="hidden cursor-pointer text-4xl max-md:block"
                    onClick={handleMenu}
                />
            )}
            {
                // working on the sidebar
            }
            {isMenuOpen && <Menu closeMenu={handleMenu} />}
        </nav>
    );
}
