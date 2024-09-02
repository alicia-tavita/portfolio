import Header from './components/Header'
import Nav from './components/Nav'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <Header />
      <section className="main">
        <Nav />
        <Layout />
      </section>
    </>
  )
}

export default App
