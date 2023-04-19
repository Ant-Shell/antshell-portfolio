
const Projects = () => {
  return (
    <section id="projects" className="h-[55rem] w-screen bg-[#293744] text-[#a89fa3] text-center snap-center">
      <h2 className='text-4xl py-8'>Projects</h2> {/* Array of mapped objects, swipeable */}
      <div className="flex justify-evenly">
        <div>
          <h4>Project 1 Title</h4>
          <p>Description</p>
          <p>Image</p>
          <p>Deploy Link</p>
          <p>GitHub Repo</p>
        </div>
        <div>
          <h4>Project 2 Title</h4>
          <p>Description</p>
          <p>Image</p>
          <p>Deploy Link</p>
          <p>GitHub Repo</p>
        </div>
        <div>
          <h4>Project 3 Title</h4>
          <p>Description</p>
          <p>Image</p>
          <p>Deploy Link</p>
          <p>GitHub Repo</p>
        </div>
        <div>
          <h4>Project 4 Title</h4>
          <p>Description</p>
          <p>Image</p>
          <p>Deploy Link</p>
          <p>GitHub Repo</p>
        </div>
      </div>
    </section>
  )
}

export default Projects