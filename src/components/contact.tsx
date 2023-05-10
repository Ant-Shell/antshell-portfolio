import { SiGmail, SiLinkedin} from 'react-icons/si'
import { VscGithub } from "react-icons/vsc"

const Contact = () => {

  const logoStyles = "h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24"

  return (
    <section id="contact" className="h-72 md:h-80">
      <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-8'>Contact Me</h2>
      <div className='flex justify-around'>
      <a href='https://www.linkedin.com/in/anthonyshellman/' target="_blank" rel="noopener noreferrer">
        <SiLinkedin className={logoStyles} />
      </a>
      <a href='https://github.com/Ant-Shell' target="_blank" rel="noopener noreferrer">
        <VscGithub className={logoStyles} />
      </a>
      <a href="mailto:atshellman@gmail.com">
        <SiGmail className={logoStyles} />
      </a>
      </div>
    </section>
  )
}

export default Contact