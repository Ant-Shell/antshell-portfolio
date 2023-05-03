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

const ProjectsCard:FC<Props> = ({name, description, image, deployLink, githubRepo}) => {

  return (
    <section className="h-[35rem] w-[40rem] mr-5 flex-none">
      <h3>{name}</h3>
      <a href={deployLink} target="_blank" rel="noopener noreferrer">
        <Image src={image} alt={name + "preview"}
        className="h-[30rem] w-[40rem]" />
      </a>
      <p>{description}</p>
      <p><a href={deployLink} target="_blank" rel="noopener noreferrer">Check it out!</a></p>
      <p><a href={githubRepo} target="_blank" rel="noopener noreferrer">GitHub repo</a></p>
    </section>
  )
}

export default ProjectsCard