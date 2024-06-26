import React from 'react'
import NavLink from './nav-link';
import Image from 'next/image';
import { footerLogo } from '@/app/assets/images';
import { footerLinks,  socialMedia } from '@/constants'; 
import { copyrightSign } from '@/app/assets/icons';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className='bg-black'>
      <div  className='max-container '>
    <div className='flex justify-between items-start gap-20 max-lg:flex-col '>
      <div className='flex flex-col items-start'>
        <NavLink href="/"  >

          <Image alt='footerLogo' src={footerLogo} width={150} height={64} className='m-0  ' style={{ width: 'auto', height: 'auto' }}/>
        </NavLink>
        <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex items-center gap-5 mt-8 '>
            {socialMedia.map((icon,index)=>(
              <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full  transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300  '
              key={index}
              >
              <Image className='cursor-pointer' src={icon.src} alt={icon.alt} width={24} height={24}/>
              </div>
            ))}
            
          </div>
       </div>

       <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                    key={link.name}
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      

       
    </div>
    <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <Image
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
      </div>
   </footer>
    )
}

export default Footer;
