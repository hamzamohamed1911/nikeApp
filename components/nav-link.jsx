'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function NavLink({ href, children ,className}) {
  const path = usePathname();
  const isActive = path.startsWith(href);

  return (
    <Link href={href}  className={isActive ? 'font-bold mr-4' : className }>
  {children}
    </Link>
  );
}
