
const Experience = () => {
  return (
    <section id="experience" className="h-[55rem] w-screen bg-[#293744] text-[#a89fa3] text-center snap-center">
      <div className="py-8">
        <h2 className='text-4xl py-8'>Experience</h2>
        <div className="py-8">
          <section> {/* Turn these into cards and map from array of objects - make swipe-able on x axis*/}
            <h4>First Workplace Job Title</h4>
            <p>First Workplace Name</p>
            <p>Location</p>
            <p>Duration</p>
            <p>Overview:</p>
            <ul>
              <li>I did this</li>
              <li>I did this</li>
              <li>I did this</li>
            </ul>
          </section>
          <section>
            <h4>Second Workplace Job Title</h4>
            <p>Second Workplace Name</p>
            <p>Location</p>
            <p>Duration</p>
            <p>Overview:</p>
            <ul>
              <li>I did this</li>
              <li>I did this</li>
              <li>I did this</li>
            </ul>
          </section>
          <section>
            <h4>Third Workplace Job Title</h4>
            <p>Third Workplace Name</p>
            <p>Location</p>
            <p>Duration</p>
            <p>Overview:</p>
            <ul>
              <li>I did this</li>
              <li>I did this</li>
              <li>I did this</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Experience