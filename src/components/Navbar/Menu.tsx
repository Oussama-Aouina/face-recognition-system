"use client";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
function Menu({ closeMenu }: Readonly<{ closeMenu: Function }>): JSX.Element {
  return (
    <div
      className="absolute right-0 top-20 z-30 hidden h-[89vh] w-full flex-col items-center justify-start bg-background   bg-opacity-70 backdrop-blur-lg px-20 border-t border-slate-400 shadow-md max-md:flex"
      onClick={closeMenu as () => void}>
      {/* <div className="w-full">
        <span className="font-bold cursor-pointer text-2xl absolute left-4 top-6">
          X
        </span>
      </div> */}
      <ul className={`font-semibold flex flex-col text-lg  w-full  `}>
        <li className=" flex justify-center border-b border-slate-400 w-full py-5 cursor-pointer">
          <Link href="/">Documentation</Link>
        </li>
        <li className="border-b flex justify-center  border-slate-400 w-full py-5 cursor-pointer">
          <Link href="/register">How It Work</Link>
        </li>
      </ul>
    </div>
  );
}
export default Menu;
