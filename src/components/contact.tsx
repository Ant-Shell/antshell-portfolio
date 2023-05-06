import { SiGmail, SiLinkedin} from 'react-icons/si'
import { VscGithub } from "react-icons/vsc"

const Contact = () => {

  const logoStyles = "h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24"

  return (
    <section id="contact" className="h-96 w-screen bg-[#293744] text-[#a89fa3] text-center snap-center">
      <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-8'>Contact Me</h2>
      <div className='flex justify-around'>
        <SiLinkedin className={logoStyles} />
        <VscGithub className={logoStyles} />
        <SiGmail className={logoStyles} />
      </div>
    </section>
  )
}

export default Contact