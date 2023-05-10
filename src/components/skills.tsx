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
        <IoLogoReact className={logoStyles} />
        <SiJavascript className={logoStyles} />
        <SiTypescript className={logoStyles} />
        <IoLogoCss3 className={logoStyles} />
        <SiTailwindcss className={logoStyles} />
        <IoLogoNodejs className={logoStyles} />
        <SiMocha className={logoStyles} />
        <SiChai className={logoStyles} />
        <TbBrandCypress className={logoStyles} />
        <SiGithub className={logoStyles} />
        <SiGit className={logoStyles} />
        <SiPostgresql className={logoStyles} />
      </div>
    </section>
  )
}

export default Skills