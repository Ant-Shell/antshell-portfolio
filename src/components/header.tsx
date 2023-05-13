import React, {useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'
import Link from 'next/link'
// import { animate } from "framer-motion"

const Header = () => {
  const [menuOptionVisibility, setMenuOptionVisibility] = useState<boolean>(false)

  const bigLinkStyling = 'hover:underline md:text-base lg:text-lg xl:text-xl h-6 w-24'

  const smallLinkStyling ='hover:underline text-sm h-5 w-20'

  const toggleMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    setMenuOptionVisibility(!menuOptionVisibility)
  }

  return (
    <>
    <header id='#/top' className="md:hidden h-28 py-8">
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

    <header className="hidden md:block h-28 w-screen py-8 text-center snap-start">
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