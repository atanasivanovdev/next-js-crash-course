"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, name }) {
  const path = usePathname();

  return (
    <Link href={href} className={path.startsWith(href) ? "active" : undefined}>
      {name}
    </Link>
  );
}
