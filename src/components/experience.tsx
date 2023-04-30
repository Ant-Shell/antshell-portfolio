import { StaticImageData } from 'next/image'
import React, {useState} from 'react'
import useSWR from 'swr'
import fetcher from '@utilities/apiCalls'
import Image from 'next/image'
import ExperienceCard from './experienceCard'

type ExperienceData = {
  id: number
  name: string
  role: string
  location: string
  duration: string
  logo: StaticImageData
  overview: Array<string>
}[]

type SingleExperienceDetails = {
  id: number
  name: string
  role: string
  location: string
  duration: string
  logo: StaticImageData
  overview: Array<string>
}

const Experience = () => {
  const { data, error, isLoading } = useSWR<ExperienceData>('/api/experienceInfo', fetcher)
  const [description, setDescription] = useState<SingleExperienceDetails | undefined>(undefined)

  const showCompanyLogos = (e:React.MouseEvent<HTMLDivElement, MouseEvent>, id:number):void => {
    e.preventDefault()
    const expinfo = data?.find(element => element.id === id)
    setDescription(expinfo)
  }

  const showSingleExperience = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
    e.preventDefault()
    setDescription(undefined)
  }


  const logoList = data?.map(experience => {
    const { id, name, logo } = experience

    return (
      <div key={id} className='hover:cursor-pointer' onClick={(e)=> showCompanyLogos(e, id)}>
        <Image
        src={logo}
        alt={name + "logo"}
        className='h-20 w-20 md:h-40 md:w-40
          lg:h-60 lg:w-60 xl:h-80 xl:w-80'
        />
      </div>
    )
  })

  const singleExperience = (description: SingleExperienceDetails) => {
    const {id, name, role, location, duration, logo, overview} = description

    return (
      <ExperienceCard
        id={id}
        name={name}
        role={role}
        location={location}
        duration={duration}
        logo={logo}
        overview={overview}
        showSingleExperience={showSingleExperience}
        key={id}
      />
    )
  }

  return (
    <section id="experience" className="h-[35rem] w-screen bg-[#293744] text-[#a89fa3] text-center snap-center">
      <div className="py-8">
        <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-8'>Experience</h2>
        <div className="py-8 flex justify-around">
          {description === undefined ?
            logoList
            :
            singleExperience(description)
          }
        </div>
      </div>
    </section>
  )
}

export default Experience