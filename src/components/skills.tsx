import { IoLogoCss3 } from "react-icons/io"
import { IoLogoReact } from 'react-icons/io5'
import { SiChai, SiGit, SiGithub, SiJavascript, SiMocha,
        SiPostgresql, SiTailwindcss } from "react-icons/si";
import { TbBrandCypress } from "react-icons/tb";

const Skills = () => {
  return (
    <section id="skills" className="h-[55rem] w-screen bg-[#293744] text-[#a89fa3] text-center snap-center">
      <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-8'>Skills</h2>
      <div className="py-8 grid grid-flow-col grid-rows-5 gap-4 justify-evenly">
        <IoLogoReact />
        <IoLogoCss3 />
        <SiMocha />
        <TbBrandCypress />
        <SiGithub />
        <SiJavascript />
        <SiTailwindcss />
        <SiChai />
        <SiGit />
        <SiPostgresql />
      </div>
    </section>
  )
}

export default Skills