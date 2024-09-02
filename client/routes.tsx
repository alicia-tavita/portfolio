import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './App.tsx'
import Project from './components/Projects.tsx'
import Info from './components/Info.tsx'
import ContactForm from './components/Contact.tsx'
import Home from './components/Home.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="projects" element={<Project />} />
    <Route path="info" element={<Info />} />
    <Route path="contact" element={<ContactForm />} />
  </Route>,
)

export const router = createBrowserRouter(routes)
