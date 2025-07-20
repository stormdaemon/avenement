import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import MultiStreamService from './pages/services/MultiStreamService'
import SocialMediaService from './pages/services/SocialMediaService'
import EventsService from './pages/services/EventsService'
import FilmsService from './pages/services/FilmsService'
import WebsiteService from './pages/services/WebsiteService'
import CatholicQuotes from './components/ui/CatholicQuotes'
import './App.css'

function App() {
  const location = useLocation()

  // Scroll automatique en haut lors du changement de page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="app">
      <title>Avènement - Agence Communication Catholique</title>
      <meta name="description" content="Avènement, agence spécialisée en communication catholique. Diffusion multi-stream, réseaux sociaux, événementiel religieux." />
      <meta name="keywords" content="agence communication catholique, événements catholiques, diffusion multi stream, réseaux sociaux catholiques, avènement" />
      <meta property="og:title" content="Avènement - Agence Communication Catholique" />
      <meta property="og:description" content="Spécialistes de la communication pour paroisses et institutions catholiques" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Avènement" />
      
      <Header />
      <CatholicQuotes />
      
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Home />
              </motion.div>
            } />
            <Route path="/services" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Services />
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            } />
            <Route path="/services/multi-stream" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <MultiStreamService />
              </motion.div>
            } />
            <Route path="/services/social-media" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <SocialMediaService />
              </motion.div>
            } />
            <Route path="/services/events" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <EventsService />
              </motion.div>
            } />
            <Route path="/services/films" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <FilmsService />
              </motion.div>
            } />
            <Route path="/services/website" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <WebsiteService />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
