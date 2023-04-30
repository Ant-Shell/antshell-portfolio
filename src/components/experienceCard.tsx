import React, { FC } from "react"
import { StaticImageData } from 'next/image'

type Props = {
  id: number
  name: string
  role: string
  location: string
  duration: string
  logo: StaticImageData
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
        <button onClick={(e) => showSingleExperience(e)}>X</button>
      </div>
      <div>
        <h3>{name}</h3>
        <p>{role}</p>
        <p>{location}</p>
        <p>{duration}</p>
        <ul>
          {overViewList}
        </ul>
      </div>
    </section>
  )
}

export default ExperienceCard