import useSWR from 'swr'
import fetcher from '@utilities/apiCalls'
import ProjectsCard from './projectsCard'
import { StaticImageData } from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard, Autoplay } from "swiper";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

type ProjectData = {
  id: number
  name: string
  description: string
  image: StaticImageData | string
  deployLink: string
  githubRepo: string
}[]

const Projects = () => {
  const { data } = useSWR<ProjectData>('/api/projectInfo', fetcher)

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
    <section id="projects" className="h-[30rem] md:h-[50rem] lg:h-[55rem] xl:h-[65rem]">
      <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-4'>Projects</h2>
          <Swiper className='h-[25rem] w-[20rem] md:h-[40rem] md:w-[50rem] lg:h-[50rem] lg:w-[60rem] 
            xl:h-[60rem] xl:w-[70rem]'
              modules={[Navigation, Keyboard, Autoplay]}
              navigation={true}
              keyboard={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
          >
            { projectList }
          </Swiper>
    </section>
  )
}

export default Projects