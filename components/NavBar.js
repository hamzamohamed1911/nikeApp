import Image from 'next/image';
import { navLinks } from '@/constants';
import React from 'react';
import { headerLogo } from '@/app/assets/images';
import NavLink from './nav-link';
import { hamburger ,searchIcon} from '@/app/assets/icons'; 


const NavBar = () => {
  
  return (
    <header className='padding-x py-8 fixed z-10 w-full    '>
      <nav className='flex justify-between items-center max-container sm:w-screen	 sm:px-0 '>
        <NavLink href="/">
        <Image src={headerLogo} alt='Nike LOGO'  />
        </NavLink>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
        
          {navLinks.map((item)=>(  
            
              <NavLink key={item.label} href={item.href} className="font-monts errat leading-normal text-lg text-slate-gray hover:underline" >
              {item.label}
              </NavLink>
            
          ))}


        </ul>
     <div className='flex gap-6'>
      <NavLink href="#contact-us">     
         <Image id='Contact-us' className='cursor-pointer' alt='searchIcon' src={searchIcon} width={25} height={25}/>
      </NavLink>
    <div className='hidden max-lg:block'>
          
          <Image className='cursor-pointer'
          src={hamburger}
          alt='hamburger'
          width={25}
          height={25}
          />
      </div>
</div>
  <div>
  </div>        
      </nav>
    </header>
  )
}

export default NavBar;