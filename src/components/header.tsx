import React, {useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'
import { animate } from "framer-motion"

import Link from 'next/link'
const Header = () => {
  const [menuOptionVisibility, setMenuOptionVisibility] = useState<boolean>(false)

  const bigLinkStyling = 'hover:bg-[#535561] md:text-base lg:text-lg xl:text-xl h-6 w-24 rounded'

  const smallLinkStyling ='hover:bg-[#535561] text-sm h-5 w-20 rounded'

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
        <div className='p-5 flex justify-evenly hover:cursor-pointer'>
          <Link href="#about" className={smallLinkStyling}>About</Link>
          <Link href="#experience" className={smallLinkStyling}>Experience</Link>
          <Link href="#skills" className={smallLinkStyling}>Skills</Link>
          <Link href="#projects" className={smallLinkStyling}>Projects</Link>
          <Link href="#contact" className={smallLinkStyling}>Contact</Link>
        </div>
        :
        null
      }
    </header>

    <header className="hidden md:block h-28 w-screen bg-[#293744] text-[#a89fa3] py-8 text-center snap-start">
      <div className="flex justify-evenly h-10 items-center">
        <Link href="#about" className={`${bigLinkStyling}`}>About</Link>
        <Link href="#experience" className={`${bigLinkStyling}`}>Experience</Link>
        <Link href="#skills" className={`${bigLinkStyling}`}>Skills</Link>
        <Link href="#projects" className={`${bigLinkStyling}`}>Projects</Link>
        <Link href="#contact" className={`${bigLinkStyling}`}>Contact</Link>
      </div>
    </header>
    </>
  )
}

export default Header