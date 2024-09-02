//house my project links
function Project() {
  const projectItems = [
    {
      title: 'todos',
      link: 'http://alicia-matai24-todo-full-stack.devacademy.nz/',
    },
    { title: 'Nothing yet', link: '' },
    { title: 'Nothing yet', link: '' },
    { title: 'Nothing yet', link: '' },
    { title: 'Nothing yet', link: '' },
    { title: 'Nothing yet', link: '' },
    { title: 'Nothing yet', link: '' },
    { title: 'Nothing yet', link: '' },
    { title: 'Nothing yet', link: '' },
    { title: 'Nothing yet', link: '' },
    { title: 'Nothing yet', link: '' },
    { title: 'Nothing yet', link: '' },
    { title: 'Nothing yet', link: '' },
    { title: 'Nothing yet', link: '' },
    { title: 'Nothing yet', link: '' },
    { title: 'Nothing yet', link: '' },
    { title: 'Nothing yet', link: '' },
    { title: 'Nothing yet', link: '' },
    { title: 'Nothing yet', link: '' },
  ]

  return (
    <>
      <section id="project">
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
