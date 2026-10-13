
import { useLayoutEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Projects from './pages/Projects'
import Sustainability from './pages/Sustainability'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function NotFound() {
  return (
    <section className="not-found container">
      <span className="eyebrow">404 — PAGE NOT FOUND</span>

      <h1>This page is under construction.</h1>

      <p>
        The page you are looking for may have moved or may not exist.
      </p>

      <Link className="button button-primary" to="/">
        Return to homepage <span aria-hidden="true">↗</span>
      </Link>
    </section>
  )
}

function SiteLayout() {
  const { pathname } = useLocation()

  return (
    <>
      <ScrollToTop />

      <div id="top">
        <Navbar />

        <main>
          <div className="route-view" key={pathname}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/projects" element={<Projects />} />
              <Route
                path="/sustainability"
                element={<Sustainability />}
              />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout />
    </BrowserRouter>
  )
}
