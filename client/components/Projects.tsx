//house my project links
function Project() {
  const projectItems = [
    { title: '', link: '' },
    { title: '', link: '' },
    { title: '', link: '' },
    { title: '', link: '' },
  ]

  return (
    <>
      <section className="project-nav">
        {projectItems.map((item, index) => (
          <div key={index}>
            <li key={index}>
              <a href={item.link}>{item.title}</a>
            </li>
          </div>
        ))}
      </section>
    </>
  )
}

export default Project
