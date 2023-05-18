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
        <a href='https://react.dev/' target="_blank" rel="noopener noreferrer"
        aria-label="Link to react.dev">
          <IoLogoReact className={`${logoStyles} text-[#479dc6]`} />
        </a>
        <a href='https://www.javascript.com/' target="_blank" rel="noopener noreferrer"
        aria-label="Link to javascript.com">
          <SiJavascript className={`${logoStyles} text-[#e1d063]`} />
        </a>
        <a href='https://www.typescriptlang.org/' target="_blank" rel="noopener noreferrer"
        aria-label="Link to typescriptlang.org">
          <SiTypescript className={`${logoStyles} text-[#4278c0]`} />
        </a>
        <a href='https://www.css3.com/' target="_blank" rel="noopener noreferrer"
        aria-label="Link to css3.com">
          <IoLogoCss3 className={`${logoStyles} text-[#2b53dc]`} />
        </a>
        <a href='https://tailwindcss.com/' target="_blank" rel="noopener noreferrer"
        aria-label="Link to tailwindcss.com">
          <SiTailwindcss className={`${logoStyles} text-[#60Bcf2]`} />
        </a>
        <a href='https://nodejs.org/' target="_blank" rel="noopener noreferrer"
        aria-label="Link to nodejs.org">
          <IoLogoNodejs className={`${logoStyles} text-[#5c8256]`} />
        </a>
        <a href='https://mochajs.org/' target="_blank" rel="noopener noreferrer"
        aria-label="Link to mochajs.org">
          <SiMocha className={`${logoStyles} text-[#83654b]`} />
        </a>
        <a href='https://www.chaijs.com/' target="_blank" rel="noopener noreferrer"
        aria-label="Link to chaijs.com">
          <SiChai className={`${logoStyles} text-[#931f14]`} />
        </a>
        <a href='https://www.cypress.io/' target="_blank" rel="noopener noreferrer"
        aria-label="Link to cypress.io">
          <TbBrandCypress className={`${logoStyles} text-[#83CFaa]`} />
        </a>
        <a href='https://github.com/' target="_blank" rel="noopener noreferrer"
        aria-label="Link to github.com">
          <SiGithub className={`${logoStyles} text-[#000]`} />
        </a>
        <a href='https://git-scm.com/' target="_blank" rel="noopener noreferrer"
        aria-label="Link to git-scm.com">
          <SiGit className={`${logoStyles} text-[#e35938]`} />
        </a>
        <a href='https://www.postgresql.org/' target="_blank" rel="noopener noreferrer"
        aria-label="Link to postgresql.org">
          <SiPostgresql className={`${logoStyles} text-[#3f678d]`} />
        </a>  
      </div>
    </section>
  )
}

export default Skills