import React, { FC } from "react"
import { StaticImageData } from 'next/image'
import { RxCross1 } from 'react-icons/rx'
import Image from "next/image"

type Props = {
  id: number
  name: string
  role: string
  location: string
  duration: string
  logo: StaticImageData | string
  overview: Array<string>
  showSingleExperience: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const ExperienceCard: FC<Props> = ({name, role, location, duration, logo, overview, showSingleExperience}) => {
  const overViewList = overview.map((item, index) => {

    return (
      <li key={index}>
      {item}
      </li>
    )
  })

  return (
    <section className="text-left">
      <div className="flex justify-end">
        <button className="mr-5" onClick={(e) => showSingleExperience(e)}>
          <RxCross1 className='w-7 h-7'/>
        </button>
      </div>
      <div className="px-5 text-base md:text-lg lg:text-xl xl:text-2xl flex">
        <Image
          className="h-10 w-10 p-1"
          src={logo}
          alt={`${name} + logo`}
          width={500}
          height={500}
        />
        <div>
        <h3 className="font-bold">{name}</h3>
        <p className="font-medium">{role}</p>
        <p>{location}</p>
        <p className="font-light">{duration}</p>
        <ul>
          {overViewList}
        </ul>
        </div>
      </div>
    </section>
  )
}

export default ExperienceCard