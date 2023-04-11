import Link from 'next/link'
const Header = () => {
  return (
    <header className="h-24 w-screen bg-[#293744] text-[#a89fa3] py-8 text-center snap-start">
      <div className="flex justify-evenly">
        <Link href="#about">About</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </header>
  )
}

export default Header