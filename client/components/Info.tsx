//house my info links
function Info() {
  const infoItems = [
    { title: 'GitHub', link: 'https://github.com/alicia-tavita' },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/alicia-tavita-01b9102b8/',
    },
  ]

  return (
    <>
      <section id="info">
        {infoItems.map((item, index) => (
          <div key={index}>
            <li key={index}>
              <a
                href={item.link}
                className="text-white hover:text-spamYellow"
                target="_blank"
                rel="noreferrer"
              >
                {item.title}
              </a>
            </li>
          </div>
        ))}
      </section>
    </>
  )
}

export default Info
