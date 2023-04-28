import { FC } from "react"

type Props = {
  id: number
  name: string
  role: string
  location: string
  duration: string
  overview: Array<string>
}

const ExperienceCard: FC<Props> = ({name, role, location, duration, overview}) => {
  const overViewList = overview.map((item, index) => {

    return (
      <li key={index}>
      {item}
      </li>
    )
  })

  return (
    <section className="text-left">
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{location}</p>
      <p>{duration}</p>
      <ul>
        {overViewList}
      </ul>
    </section>
  )
}

export default ExperienceCard