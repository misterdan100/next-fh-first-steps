'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    path: string
    text: string
}

export const ActiveLink = ({path, text}: Props) => {
    const pathname = usePathname()
  return (
    <Link
      className={`${
        pathname === path ? "bg-slate-800 " : ""
      } px-2 rounded`}
      href={path}
    >
      {text}
    </Link>
  );
};
