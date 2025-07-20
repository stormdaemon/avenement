import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Diffusion Multi-Stream', href: '/services/multi-stream' },
    { name: 'Réseaux Sociaux', href: '/services/social-media' },
    { name: 'Organisation Événements', href: '/services/events' },
    { name: 'Films Institutionnels', href: '/services/films' },
    { name: 'Création Sites Web', href: '/services/website' }
  ]

  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Logo et description */}
            <div className="footer-section">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link to="/" className="footer-logo">
                  <span className="footer-logo-text">Avènement</span>
                  <span className="footer-logo-subtitle">Communication Catholique</span>
                </Link>
                <p className="footer-description">
                  Spécialistes de la communication pour paroisses et institutions catholiques. 
                  Nous mettons notre expertise au service de l'évangélisation et du rayonnement 
                  de la foi catholique.
                </p>
                <div className="footer-social">
                  <a href="#" className="social-link" aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="social-link" aria-label="YouTube">
                    <Youtube size={20} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div className="footer-section">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="footer-title">Nos Services</h4>
                <ul className="footer-links">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link to={service.href} className="footer-link">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Liens rapides */}
            <div className="footer-section">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="footer-title">Navigation</h4>
                <ul className="footer-links">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link to={link.href} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="footer-title">Contact</h4>
                <div className="footer-contact">
                  <div className="contact-item">
                    <Mail size={16} />
                    <a href="mailto:contact@avenement.com" className="contact-link">
                      contact@avenement.com
                    </a>
                  </div>
                  <div className="contact-item">
                    <Phone size={16} />
                    <a href="tel:+33123456789" className="contact-link">
                      01 23 45 67 89
                    </a>
                  </div>
                  <div className="contact-item">
                    <MapPin size={16} />
                    <span className="contact-text">
                      Paris, France
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Avènement. Tous droits réservés.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Mentions légales</a>
              <a href="#" className="footer-bottom-link">Politique de confidentialité</a>
              <a href="#" className="footer-bottom-link">CGV</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--color-blue-dark);
          color: var(--color-white);
          margin-top: auto;
        }

        .footer-main {
          padding: var(--space-20) 0 var(--space-16);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: var(--space-12);
        }

        .footer-section {
          min-width: 0;
        }

        .footer-logo {
          display: block;
          text-decoration: none;
          color: inherit;
          margin-bottom: var(--space-4);
        }

        .footer-logo-text {
          font-family: var(--font-title);
          font-size: var(--text-2xl);
          font-weight: 900;
          color: var(--color-white);
          display: block;
          line-height: 1;
        }

        .footer-logo-subtitle {
          font-family: var(--font-text);
          font-size: var(--text-sm);
          color: var(--color-gold);
          font-weight: 300;
          display: block;
          margin-top: 2px;
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: var(--space-6);
          font-size: var(--text-base);
        }

        .footer-social {
          display: flex;
          gap: var(--space-3);
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(212, 175, 55, 0.1);
          border-radius: 50%;
          color: var(--color-gold);
          text-decoration: none;
          transition: var(--transition-normal);
        }

        .social-link:hover {
          background: var(--color-gold);
          color: var(--color-blue-dark);
          transform: translateY(-2px);
        }

        .footer-title {
          font-family: var(--font-title);
          font-size: var(--text-lg);
          font-weight: 900;
          color: var(--color-white);
          margin-bottom: var(--space-6);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: var(--space-3);
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: var(--transition-fast);
          font-size: var(--text-base);
        }

        .footer-link:hover {
          color: var(--color-gold);
          text-decoration: none;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .contact-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .contact-link:hover {
          color: var(--color-gold);
        }

        .contact-text {
          color: rgba(255, 255, 255, 0.8);
        }

        .footer-bottom {
          background: rgba(0, 0, 0, 0.2);
          padding: var(--space-6) 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright {
          color: rgba(255, 255, 255, 0.6);
          font-size: var(--text-sm);
          margin: 0;
        }

        .footer-bottom-links {
          display: flex;
          gap: var(--space-6);
        }

        .footer-bottom-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: var(--text-sm);
          transition: var(--transition-fast);
        }

        .footer-bottom-link:hover {
          color: var(--color-gold);
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: var(--space-8);
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }

          .footer-main {
            padding: var(--space-16) 0 var(--space-12);
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: var(--space-4);
            text-align: center;
          }

          .footer-bottom-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
