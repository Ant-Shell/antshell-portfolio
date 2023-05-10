import Head from 'next/head'
import Header from '@components/header'
import Hero from '@components/hero'
import About from '@components/about'
import Experience from '@components/experience'
import Skills from '@components/skills'
import Projects from '@components/projects'
import Contact from '@components/contact'
import Link from 'next/link'

const Home = () => {
  const HomeLink = () => {
    return (
      <div className='text-center flex justify-end p-8'>
        <Link className='' href='/'>Back to Top</Link>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Ant-Shell Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='snap-y snap-mandatory bg-[#293744] text-[#a89fa3] text-center w-screen
      overflow-auto'>
        <div className='snap-always snap-start'>
          <Header />
        </div>
        <div className='snap-always snap-start'>
          <Hero />
        </div>
        <div className='snap-always snap-start'>
          <About />
          <HomeLink/>
        </div>
        <div className='snap-always snap-start'>
          <Experience />
          <HomeLink/>
        </div>
        <div className='snap-always snap-start'>
          <Skills />
          <HomeLink/>
        </div>
        <div className='snap-always snap-start'>
          <Projects />
          <HomeLink/>
        </div>
        <div className='snap-always snap-start'>
          <Contact />
          <HomeLink/>
        </div>
      </main>
    </>
  )
}

export default Home
