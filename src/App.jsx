import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import SmoothScroll   from './components/SmoothScroll'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor   from './components/CustomCursor'
import Navbar  from './components/Navbar'
import Footer  from './components/Footer'
import Home    from './pages/Home'
import About   from './pages/About'
import Plant   from './pages/Plant'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

export default function App() {
  const location = useLocation()

  return (
    <SmoothScroll>
      <div className="no-cursor bg-bg min-h-screen flex flex-col">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/"        element={<Home />} />
              <Route path="/about"   element={<About />} />
              <Route path="/plant"   element={<Plant />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}
