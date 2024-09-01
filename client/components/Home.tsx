//house my fixed-home nav
import { NavLink } from 'react-router-dom'

function Home() {
  const homeItems = [
    { title: 'Home', link: './home' },
    { title: 'Projects', link: './projects' },
    { title: 'Info', link: './info' },
    { title: 'Contact', link: './contact' },
  ]

  return (
    <>
      <nav className="home-nav">
        <NavLink to="/"></NavLink>
        <ul className="home-nav">
          {homeItems.map((item) => (
            <li key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Home
