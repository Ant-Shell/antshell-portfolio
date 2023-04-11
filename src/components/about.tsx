import Image from 'next/image'
import image from '../assets/felicia-buitenwerf-_z1fydm6azE-unsplash.jpg'

const About = () => {
  return (
    <section id='about' className="h-screen w-screen bg-[#293744] text-[#a89fa3] text-center snap-center">
      <h2 className='text-4xl py-8'>About Me</h2>
      <div className='flex justify-center'>
        <Image 
        src={image}
        alt='Felicia Buitenwerf_You Are Enough'
        width={640}
        height={427}
        />
      </div>
      <div className='py-8'>
        <p>
        “Take a chance on yourself”.<br/>
        <br/>
        These were the words that went through my mind, 
        while making the career decision to pivot into Frontend Engineering.
        </p>
        <br/>
        <p>
        This is not the first time I have taken a new path in life. 
        After working in retail and customer service, I went back to school as an adult<br/> 
        and obtained my degree in Computer Information systems. 
        I then went on to be a systems administrator for nearly a decade.<br/> 
        However, once again listening to my inner voice and attending the 
        Turing School of Software and Design <br/> 
        led me on my current journey - in which I am grateful.
        </p>
        <br/>
        <p>
        As a software developer, I enjoy collaborating to take a project from idea to reality,<br/> 
        and the process of building new applications has helped me gain a new perspective on life itself.<br/> 
        Success happens through research, planning, execution, failure and iteration.<br/> 
        Every challenge is an opportunity to learn from ourselves and others.
        </p>
        <br/>
        <p>
        We are all capable of doing great things - sometimes we just need to take a chance.
        </p>
      </div>
    </section>
  )
}

export default About