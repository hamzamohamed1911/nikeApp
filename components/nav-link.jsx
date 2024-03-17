'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function NavLink({ href, children ,className}) {
  const path = usePathname();
  const isActive = path.startsWith(href);

  return (
    <Link href={href}  className={isActive ? 'font-bold mr-4' : className="font-monts errat leading-normal text-lg text-slate-gray transition-all hover:-translate-y-1 hover:scale-110 duration-300 " }>
  {children}
    </Link>
  );
}
