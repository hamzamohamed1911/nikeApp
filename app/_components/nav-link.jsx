'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function NavLink({ href , children }) {
  const path = usePathname();


  return (
    <Link href={href} className={` ${path  === href ?"font-bold mr-4 text-lg text-black" : `font-monts  text-slate-gray errat text-lg leading-normal transition-all hover:-translate-y-1 hover:scale-110 duration-300`} ` }>
    {children}
      </Link>
  
  );
}
 