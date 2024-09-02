import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <section className="home-nav">
      <main className="main-page">
        <Outlet />
      </main>
    </section>
  )
}
