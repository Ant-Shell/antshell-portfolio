import { FC } from "react"
import { StaticImageData } from 'next/image'
import Image from 'next/image'

type Props = {
  id: number
  name: string
  description: string
  image: StaticImageData | string
  deployLink: string
  githubRepo: string
}

const ProjectsCard:FC<Props> = ({id, name, description, image, deployLink, githubRepo}) => {

  return (
    <section key={id} className="h-fit w-fit">
      <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl p-1">{name}</h3>
      <p className="md:text-lg lg:text-xl xl:text-2xl p-1">{description}</p>
      <a href={deployLink} target="_blank" rel="noopener noreferrer" className="flex justify-center hover:opacity-95">
        <Image
        src={image}
        alt={name + "preview"}
        width={1120}
        height={615}
        className="rounded-lg"
        />
      </a>
      <p className="md:text-lg lg:text-xl xl:text-2xl p-1 hover:underline">
        <a href={deployLink} target="_blank" rel="noopener noreferrer">Click here to check it out!</a>
      </p>
      <p className="md:text-lg lg:text-xl xl:text-2xl p-1 hover:underline">
        <a href={githubRepo} target="_blank" rel="noopener noreferrer">Documentation can be found here</a>
      </p>
    </section>
  )
}

export default ProjectsCard