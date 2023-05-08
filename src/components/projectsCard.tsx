import { FC } from "react"
import { StaticImageData } from 'next/image'
import Image from 'next/image'

type Props = {
  id: number
  name: string
  description: string
  image: StaticImageData
  deployLink: string
  githubRepo: string
}

const ProjectsCard:FC<Props> = ({id, name, description, image, deployLink, githubRepo}) => {

  return (
    <section key={id} className="h-fit w-fit">
      <h3>{name}</h3>
      <a href={deployLink} target="_blank" rel="noopener noreferrer">
        <Image src={image} alt={name + "preview"}/>
      </a>
      <p>{description}</p>
      <p><a href={deployLink} target="_blank" rel="noopener noreferrer">Check it out!</a></p>
      <p><a href={githubRepo} target="_blank" rel="noopener noreferrer">GitHub repo</a></p>
    </section>
  )
}

export default ProjectsCard