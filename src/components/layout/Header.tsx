import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      <title>Avènement - Agence Communication Catholique</title>
      <meta name="description" content="Avènement, agence spécialisée communication catholique. Diffusion multi-stream, réseaux sociaux, événementiel religieux." />
      <meta name="keywords" content="agence communication catholique, événements catholiques, diffusion multi stream, réseaux sociaux catholiques, avènement agence" />
      <meta property="og:title" content="Avènement - Agence Communication Catholique" />
      <meta property="og:description" content="Spécialistes de la communication pour paroisses et institutions catholiques" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Avènement" />
      <meta property="og:url" content="https://avenement.com" />
      <link rel="canonical" href="https://avenement.com" />
      
      <header className="header">
        <nav className="nav">
          <div className="container">
            <div className="nav-content">
              {/* Logo */}
              <Link to="/" className="logo">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="logo-content"
                >
                  <span className="logo-text">Avènement</span>
                  <span className="logo-subtitle">Communication Catholique</span>
                </motion.div>
              </Link>

              {/* Navigation Desktop */}
              <div className="nav-desktop">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`nav-link ${isActive(item.href) ? 'nav-link-active' : ''}`}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                ))}
                <Link to="/contact" className="btn btn-primary nav-cta">
                  Devis Gratuit
                </Link>
              </div>

              {/* Menu Mobile Button */}
              <button
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Menu Mobile */}
        <motion.div
          className={`nav-mobile ${isMenuOpen ? 'nav-mobile-open' : ''}`}
          initial={false}
          animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="nav-mobile-content">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-mobile-link ${isActive(item.href) ? 'nav-mobile-link-active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn btn-primary nav-mobile-cta"
              onClick={() => setIsMenuOpen(false)}
            >
              Devis Gratuit
            </Link>
          </div>
        </motion.div>
      </header>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        }

        .nav {
          padding: var(--space-4) 0;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          text-decoration: none;
          color: inherit;
        }

        .logo-content {
          text-align: left;
        }

        .logo-text {
          font-family: var(--font-title);
          font-size: var(--text-2xl);
          font-weight: 900;
          color: var(--color-blue);
          display: block;
          line-height: 1;
        }

        .logo-subtitle {
          font-family: var(--font-text);
          font-size: var(--text-sm);
          color: var(--color-gold);
          font-weight: 300;
          display: block;
          margin-top: 2px;
        }

        .nav-desktop {
          display: flex;
          align-items: center;
          gap: var(--space-6);
        }

        .nav-link {
          font-family: var(--font-text);
          font-weight: 500;
          color: var(--color-blue-dark);
          text-decoration: none;
          position: relative;
          padding: var(--space-2) 0;
          transition: var(--transition-fast);
        }

        .nav-link:hover {
          text-decoration: none;
          color: var(--color-gold);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-gold);
          transition: width var(--transition-fast);
        }

        .nav-link:hover::after,
        .nav-link-active::after {
          width: 100%;
        }

        .nav-link-active {
          color: var(--color-gold);
        }

        .nav-cta {
          margin-left: var(--space-4);
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--color-blue);
          cursor: pointer;
          padding: var(--space-2);
        }

        .nav-mobile {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        }

        .nav-mobile-open {
          display: block;
        }

        .nav-mobile-content {
          padding: var(--space-6);
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .nav-mobile-link {
          font-family: var(--font-text);
          font-weight: 500;
          color: var(--color-blue-dark);
          text-decoration: none;
          padding: var(--space-3) 0;
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
          transition: var(--transition-fast);
        }

        .nav-mobile-link:hover,
        .nav-mobile-link-active {
          color: var(--color-gold);
        }

        .nav-mobile-cta {
          margin-top: var(--space-4);
          align-self: flex-start;
        }

        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }

          .menu-toggle {
            display: block;
          }

          .logo-text {
            font-size: var(--text-xl);
          }

          .logo-subtitle {
            font-size: var(--text-xs);
          }
        }
      `}</style>
    </>
  )
}

export default Header
