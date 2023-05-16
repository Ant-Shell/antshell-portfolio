import { IoLogoCss3, IoLogoNodejs } from "react-icons/io"
import { IoLogoReact } from 'react-icons/io5'
import { SiChai, SiGit, SiGithub, SiJavascript, SiMocha,
        SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandCypress } from "react-icons/tb";

const Skills = () => {

  const logoStyles = "h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36"

  return (
    <section id="skills" className="h-[40rem] md:h-[45rem] lg:h-[50rem] xl:h-[55rem]">
      <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-8'>Skills</h2>
      <div className="p-8 grid grid-rows-4 grid-cols-3 gap-4 justify-items-center">
        <IoLogoReact className={`${logoStyles} text-[#479dc6]`} />
        <SiJavascript className={`${logoStyles} text-[#e1d063]`} />
        <SiTypescript className={`${logoStyles} text-[#4278c0]`} />
        <IoLogoCss3 className={`${logoStyles} text-[#2b53dc]`} />
        <SiTailwindcss className={`${logoStyles} text-[#60Bcf2]`} />
        <IoLogoNodejs className={`${logoStyles} text-[#5c8256]`} />
        <SiMocha className={`${logoStyles} text-[#83654b]`} />
        <SiChai className={`${logoStyles} text-[#931f14]`} />
        <TbBrandCypress className={`${logoStyles} text-[#83CFaa]`} />
        <SiGithub className={`${logoStyles} text-[#000]`} />
        <SiGit className={`${logoStyles} text-[#e35938]`} />
        <SiPostgresql className={`${logoStyles} text-[#3f678d]`} />
      </div>
    </section>
  )
}

export default Skills