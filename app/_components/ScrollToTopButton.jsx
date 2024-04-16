"use client"
import { useEffect, useState } from "react"
import { scrollUpIcon} from '@/app/assets/icons'; 
import Image from "next/image";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {

    const toggleVisibility = () => {
      window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false)
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
    
  }, [])

 
  const scrollToTop = () => {
    isVisible &&
        window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
  }

  return (

    

    <Image  id='search' className={` cursor-pointer fixed bottom-4 right-4 p-2  transition-opacity duration-200 animate-bounce  ${
        isVisible ? "opacity-100" : "opacity-0"
      }`} alt='searchIcon' src={scrollUpIcon} width={70} height={70} onClick={scrollToTop}/>
   
  
  )
}

export default ScrollToTopButton;