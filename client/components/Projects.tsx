//house my project links
function Project() {
  const projectItems = [
    {
      title: 'flatbook',
      link: 'https://github.com/matai-2024/flatbook',
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
