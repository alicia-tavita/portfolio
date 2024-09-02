//house my project links
function Project() {
  const projectItems = [
    {
      title: 'todos',
      link: 'https://anahera-matai24-todo-fullstack.devacademy.nz/',
    },
    {
      title: 'film-stuff',
      link: 'https://alicia-tavita.github.io/blog/film-portfolio.html',
    },
    { title: 'polaroids', link: '' },
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
