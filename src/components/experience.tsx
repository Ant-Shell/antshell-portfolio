import useSWR from 'swr'
import fetcher from '@utilities/apiCalls'
import ExperienceCard from './experienceCard'

type ExperienceData = {
  id: number
  name: string
  location: string
  duration: string
  overview: Array<string>
}[]

const Experience = () => {
  const { data, error, isLoading } = useSWR<ExperienceData>('/api/experienceInfo', fetcher)

  const experienceList = data?.map(experience => {
    const {id, name, location, duration, overview} = experience

    return (
      <ExperienceCard
      id={id}
      name={name}
      location={location}
      duration={duration}
      overview={overview}
      key={id}
      />
    )
  })

  return (
    <section id="experience" className="h-[55rem] w-screen bg-[#293744] text-[#a89fa3] text-center snap-center">
      <div className="py-8">
        <h2 className='text-4xl py-8'>Experience</h2>
        <div className="py-8">
          {experienceList}
        </div>
      </div>
    </section>
  )
}

export default Experience