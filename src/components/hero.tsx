import Image from 'next/image'
import headshot from 'public/antshell_headshot.jpeg'

const Hero = () => {
  return (
    <section id="home" className='h-[40rem] md:h-[45rem] lg:h-[50rem] xl:h-[55rem] flex flex-col
    items-center justify-evenly'>
      <div className='h-[18rem] w-[16rem] md:h-[25rem] md:w-[22rem]
      lg:h-[31rem] lg:w-[28rem] xl:h-[37rem] xl:w-[34rem]'>
        <Image 
        src={headshot}
        alt="Ant-Shell headshot"
        className='rounded-full'
        priority={true}
        />
      </div>
      <div className='h-20 xl:h-32 w-screen xl:mb-10'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
          &lt; Anthony Shellman<br/>Front-End Developer &#47;&gt;
        </h2>
      </div>
    </section>
  )
}

export default Hero