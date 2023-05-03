import useSWR from 'swr'
import fetcher from '@utilities/apiCalls'
import ProjectsCard from './projectsCard'
import { StaticImageData } from 'next/image'

type ProjectData = {
  id: number
  name: string
  description: string
  image: StaticImageData
  deployLink: string
  githubRepo: string
}[]

const Projects = () => {
  const { data, error, isLoading } = useSWR<ProjectData>('/api/projectInfo', fetcher)

  const projectList = data?.map(project => {
    const {id, name, description, image, deployLink, githubRepo} = project

    return (
      <ProjectsCard
      id={id}
      name={name}
      description={description}
      image={image}
      deployLink={deployLink}
      githubRepo={githubRepo}
      key={id}
      />
    )
  })

  return (
    <section id="projects" className="h-[55rem] w-screen bg-[#293744] text-[#a89fa3] text-center snap-center">
      <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-8'>Projects</h2> {/* Array of mapped objects, swipeable */}
      <div className="grid grid-rows-1 grid-flow-col py-10 w-screen overflow-scroll snap-start">
        {projectList}
      </div>
    </section>
  )
}

export default Projects