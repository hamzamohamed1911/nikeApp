'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function NavLink({ href, children ,className,key}) {
  const path = usePathname();
  const isActive = path.startsWith(href);

  return (
    <Link  key={key} href={href} className={isActive ? 'font-bold mr-4' : className }>
  {children}
    </Link>
  );
}
