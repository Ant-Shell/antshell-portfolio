import { IoLogoCss3, IoLogoNodejs } from "react-icons/io"
import { IoLogoReact } from 'react-icons/io5'
import { SiChai, SiGit, SiGithub, SiJavascript, SiMocha,
        SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandCypress } from "react-icons/tb";

const Skills = () => {
  return (
    <section id="skills" className="h-[55rem] w-screen bg-[#293744] text-[#a89fa3] text-center snap-center">
      <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-8'>Skills</h2>
      <div className="p-8 grid grid-rows-4 grid-cols-3 gap-4 justify-items-center">
        <IoLogoReact className="h-24 w-24 md:h-28 md:w-28
          lg:h-32 lg:w-32 xl:h-36 xl:w-36" />
        <SiJavascript className="h-24 w-24 md:h-28 md:w-28
        lg:h-32 lg:w-32 xl:h-36 xl:w-36"/>
        <SiTypescript className="h-24 w-24 md:h-28 md:w-28
          lg:h-32 lg:w-32 xl:h-36 xl:w-36"/>
        <IoLogoCss3 className="h-24 w-24 md:h-28 md:w-28
          lg:h-32 lg:w-32 xl:h-36 xl:w-36" />
        <SiTailwindcss className="h-24 w-24 md:h-28 md:w-28
        lg:h-32 lg:w-32 xl:h-36 xl:w-36"/>
        <IoLogoNodejs className="h-24 w-24 md:h-28 md:w-28
          lg:h-32 lg:w-32 xl:h-36 xl:w-36"/>
        <SiMocha className="h-24 w-24 md:h-28 md:w-28
          lg:h-32 lg:w-32 xl:h-36 xl:w-36" />
        <SiChai className="h-24 w-24 md:h-28 md:w-28
          lg:h-32 lg:w-32 xl:h-36 xl:w-36"/>
        <TbBrandCypress className="h-24 w-24 md:h-28 md:w-28
          lg:h-32 lg:w-32 xl:h-36 xl:w-36" />
        <SiGithub className="h-24 w-24 md:h-28 md:w-28
          lg:h-32 lg:w-32 xl:h-36 xl:w-36"/>
        <SiGit className="h-24 w-24 md:h-28 md:w-28
          lg:h-32 lg:w-32 xl:h-36 xl:w-36"/>
        <SiPostgresql className="h-24 w-24 md:h-28 md:w-28
          lg:h-32 lg:w-32 xl:h-36 xl:w-36"/>
      </div>
    </section>
  )
}

export default Skills