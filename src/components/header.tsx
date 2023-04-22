import { GiHamburgerMenu } from 'react-icons/gi'
import React, {useState} from 'react'

import Link from 'next/link'
const Header = () => {
  const [menuOptionVisibility, setMenuOptionVisibility] = useState<boolean>(false)

  const toggleMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    setMenuOptionVisibility(!menuOptionVisibility)
  }

  return (
    <>
    <header className="md:hidden h-28 w-screen bg-[#293744] text-[#a89fa3] py-8 text-center snap-start">
      <div className='flex justify-start px-8 hover:cursor-pointer' onClick={toggleMenu}>
      {<GiHamburgerMenu className='w-10 h-10'/>}
      </div>
      {menuOptionVisibility ? <div className='p-5 flex justify-evenly'>
        <Link href="#about" className='hover:bg-[#535561]'>About</Link>
        <Link href="#experience" className='hover:bg-[#535561]'>Experience</Link>
        <Link href="#skills" className='hover:bg-[#535561]'>Skills</Link>
        <Link href="#projects" className='hover:bg-[#535561]'>Projects</Link>
        <Link href="#contact" className='hover:bg-[#535561]'>Contact</Link>
      </div>
      :
      null}
    </header>

    <header className="hidden md:block h-28 w-screen bg-[#293744] text-[#a89fa3] py-8 text-center snap-start">
      <div className="flex justify-evenly">
        <Link href="#about" className='hover:bg-[#535561]'>About</Link>
        <Link href="#experience" className='hover:bg-[#535561]'>Experience</Link>
        <Link href="#skills" className='hover:bg-[#535561]'>Skills</Link>
        <Link href="#projects" className='hover:bg-[#535561]'>Projects</Link>
        <Link href="#contact" className='hover:bg-[#535561]'>Contact</Link>
      </div>
    </header>
    </>
  )
}

export default Header