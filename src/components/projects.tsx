import useSWR from 'swr'
import fetcher from '@utilities/apiCalls'
import ProjectsCard from './projectsCard'
import { StaticImageData } from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard } from "swiper";
import 'swiper/css'
import 'swiper/css/navigation'

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
        <SwiperSlide key={id}>
          <ProjectsCard
            id={id}
            name={name}
            description={description}
            image={image}
            deployLink={deployLink}
            githubRepo={githubRepo}
            key={id}
          />
        </SwiperSlide>
    )
  })

  return (
    <section id="projects" className="h-[30rem] md:h-[50rem] lg:h-[55rem] xl:h-[65rem] w-screen bg-[#293744] text-[#a89fa3] text-center">
      <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-8'>Projects</h2>
          <Swiper className='h-[25rem] w-[20rem] md:h-[40rem] md:w-[50rem] lg:h-[50rem] lg:w-[60rem] xl:h-[60rem] xl:w-[70rem]'
            modules={[Navigation, Keyboard]}
            navigation={true}
            keyboard={true}
          >
            { projectList }
          </Swiper>
    </section>
  )
}

export default Projects