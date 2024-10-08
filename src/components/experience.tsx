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
  logo: StaticImageData | string
  overview: Array<string>
}[]

type SingleExperienceDetails = {
  id: number
  name: string
  role: string
  location: string
  duration: string
  logo: StaticImageData | string
  overview: Array<string>
}

const Experience = () => {
  const { data } = useSWR<ExperienceData>('/api/experienceInfo', fetcher)
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
        className='h-28 w-28 md:h-36 md:w-36
          lg:h-48 lg:w-48 xl:h-60 xl:w-60 mt-2 rounded-lg'
        width={500}
        height={500}
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
    <section id="experience" className="h-[30rem] lg:h-[35rem] xl:h-[40rem] 2xl:h-[45rem]">
        <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-4'>Experience</h2>
        <div className='flex justify-center'>
          <div className="flex justify-evenly flex-wrap 2xl:w-[70%]">
            {description === undefined ?
              logoList :
              singleExperience(description)
            }
          </div>
        </div>
    </section>
  )
}

export default Experience