import { FC } from "react"

type Props = {
  id: number
  name: string
  location: string
  duration: string
  overview: Array<string>
}

const ExperienceCard: FC<Props> = ({name, location, duration, overview}) => {
  const overViewList = overview.map((item, index) => {

    return (
      <li key={index}>
      {item}
      </li>
    )
  })

  return (
    <section>
      <h3>{name}</h3>
      <p>{location}</p>
      <p>{duration}</p>
      <p>Overview:</p>
      <ul>
        {overViewList}
      </ul>
    </section>
  )
}

export default ExperienceCard