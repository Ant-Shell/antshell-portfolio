import { FC } from "react"

type Props = {
  id: number
  name: string
  description: string
  image: string
  deployLink: string
  githubRepo: string
}

const ProjectsCard:FC<Props> = ({name, description, image, deployLink, githubRepo}) => {

  return (
    <section>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{image}</p>
      <p>{deployLink}</p>
      <p>{githubRepo}</p>
    </section>
  )
}

export default ProjectsCard