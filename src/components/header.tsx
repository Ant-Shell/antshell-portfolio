import { GiHamburgerMenu } from 'react-icons/gi'

import Link from 'next/link'
const Header = () => {
  return (
    <>
    <header className="md:hidden h-28 w-screen bg-[#293744] text-[#a89fa3] py-8 text-center snap-start">
      <div className='flex justify-start px-8'>
      {<GiHamburgerMenu className='w-10 h-10'/>}
      </div>
      <div className='p-5 flex justify-evenly'>
        <Link href="#about">About</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </header>

    <header className="hidden md:block h-28 w-screen bg-[#293744] text-[#a89fa3] py-8 text-center snap-start">
      <div className="flex justify-evenly">
        <Link href="#about">About</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </header>
    </>
  )
}

export default Header