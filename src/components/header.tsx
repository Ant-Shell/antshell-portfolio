import React, {useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'
import { animate } from "framer-motion"

import Link from 'next/link'
const Header = () => {
  const [menuOptionVisibility, setMenuOptionVisibility] = useState<boolean>(false)

  const bigTextStyling = 'hover:bg-[#535561] md:text-base lg:text-lg xl:text-xl'

  const smallTextStyling ='hover:bg-[#535561] text-sm'

  const toggleMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    setMenuOptionVisibility(!menuOptionVisibility)
  }

  return (
    <>
    <header className="md:hidden h-28 w-screen bg-[#293744] text-[#a89fa3] py-8 text-center snap-start">
      <div className='flex justify-start px-8 hover:cursor-pointer' onClick={toggleMenu}>
        {
          menuOptionVisibility ?
          <RxCross1 className='w-9 h-9'/>
          :
          <GiHamburgerMenu className='w-9 h-9'/>
        }
      </div>
      {
        menuOptionVisibility ?
        <div className='p-5 flex justify-evenly'>
          <Link href="#about" className={smallTextStyling}>About</Link>
          <Link href="#experience" className={smallTextStyling}>Experience</Link>
          <Link href="#skills" className={smallTextStyling}>Skills</Link>
          <Link href="#projects" className={smallTextStyling}>Projects</Link>
          <Link href="#contact" className={smallTextStyling}>Contact</Link>
        </div>
        :
        null
      }
    </header>

    <header className="hidden md:block h-28 w-screen bg-[#293744] text-[#a89fa3] py-8 text-center snap-start">
      <div className="flex justify-evenly h-10">
        <Link href="#about" className={`${bigTextStyling}`}>About</Link>
        <Link href="#experience" className={`${bigTextStyling}`}>Experience</Link>
        <Link href="#skills" className={`${bigTextStyling}`}>Skills</Link>
        <Link href="#projects" className={`${bigTextStyling}`}>Projects</Link>
        <Link href="#contact" className={`${bigTextStyling}`}>Contact</Link>
      </div>
    </header>
    </>
  )
}

export default Header