import { Outlet } from 'react-router-dom'
import Home from './Home'

export default function Layout() {
  return (
    <section className="home-nav">
      <Home></Home>
      <main className="main-page">
        <Outlet />
      </main>
    </section>
  )
}
