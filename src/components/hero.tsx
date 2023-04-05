import Image from 'next/image'
import headshot from '../assets/antshell_headshot.jpeg'

const Hero = () => {
  return (
    <section className='h-screen w-screen bg-[#293744] text-[#a89fa3] text-center flex flex-col
    items-center justify-evenly snap-start'>
      <div className='h-[33.2rem] w-[30rem] rounded-full'>
        <Image 
        src={headshot}
        alt="Ant-Shell headshot"
        className='rounded-full h-full'
        />
      </div>
      <div className='h-32 w-screen mb-[75px]'>
        <h2 className='text-6xl'>&lt; Anthony Shellman<br/>Front-End Developer &#47;&gt;</h2>
      </div>
    </section>
  )
}

export default Hero