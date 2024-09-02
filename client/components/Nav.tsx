//house my fixed-home nav
import { NavLink } from 'react-router-dom'

function Nav() {
  const homeItems = [
    { title: 'Home', link: '/' },
    { title: 'Projects', link: './projects' },
    { title: 'Info', link: './info' },
    { title: 'Contact', link: './contact' },
  ]

  return (
    <>
      <nav className="nav">
        <NavLink to="/"></NavLink>
        <ul>
          {homeItems.map((item) => (
            <p key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </p>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Nav
