import Image from 'next/image'
import image from '../assets/felicia-buitenwerf-_z1fydm6azE-unsplash.jpg'

const About = () => {
  return (
    <section id='about' className="h-[55rem] xl:h-[40rem] w-screen bg-[#293744] text-[#a89fa3] text-center snap-center overflow-scroll">
      <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-8'>About Me</h2>
      <div className='flex justify-center flex-col xl:flex-row xl:text-left'>
        <div className='xl:px-8 basis-1/2 flex justify-center'>
        <Image 
        src={image}
        alt='Felicia Buitenwerf You Are Enough'
        className='xl:h-full'
        />
        </div>
        <div className='p-8 xl:p-0 basis-1/2 flex-1 text-left'>
          <p>
          “Take a chance on yourself”.<br/>
          <br/>
          These were the words that went through my mind, 
          while making the career decision to pivot into Frontend Engineering.
          </p>
          <br/>
          <p>
          This is not the first time I have taken a new path in life. 
          After working in retail and customer service, I went back to school as an adult
          and obtained my degree in Computer Information systems. 
          I then went on to be a Systems Administrator for nearly a decade.
          However, once again listening to my inner voice and attending the 
          Turing School of Software & Design
          led me on my current journey - in which I am grateful.
          </p>
          <br/>
          <p>
          As a Software Developer, I enjoy collaborating to take a project from idea to reality,
          and the process of building new applications has helped me gain a new perspective on life itself.
          Success happens through research, planning, execution, failure and iteration.
          Every challenge is an opportunity to learn from ourselves and others.
          </p>
          <br/>
          <p>
          We are all capable of doing great things - sometimes we just need to take a chance.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About