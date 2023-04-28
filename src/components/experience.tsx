import useSWR from 'swr'
import fetcher from '@utilities/apiCalls'
import ExperienceCard from './experienceCard'

type ExperienceData = {
  id: number
  name: string
  role: string
  location: string
  duration: string
  overview: Array<string>
}[]

const Experience = () => {
  const { data, error, isLoading } = useSWR<ExperienceData>('/api/experienceInfo', fetcher)

  const experienceList = data?.map(experience => {
    const {id, name, role, location, duration, overview} = experience

    return (
      <ExperienceCard
      id={id}
      name={name}
      role={role}
      location={location}
      duration={duration}
      overview={overview}
      key={id}
      />
    )
  })

  return (
    <section id="experience" className="h-[35rem] w-screen bg-[#293744] text-[#a89fa3] text-center snap-center">
      <div className="py-8">
        <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-8'>Experience</h2>
        <div className="py-8 flex justify-around">
          {experienceList}
        </div>
      </div>
    </section>
  )
}

export default Experience