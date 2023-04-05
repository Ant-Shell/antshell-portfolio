import Image from 'next/image'
import image from '../assets/felicia-buitenwerf-_z1fydm6azE-unsplash.jpg'

const About = () => {
  return (
    <section className="h-screen w-screen bg-[#293744] text-[#a89fa3] text-center snap-center">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>
        </p>
        <br/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>
        </p>
        <br/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>
        </p>
      </div>
    </section>
  )
}

export default About