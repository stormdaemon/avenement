import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Globe, Smartphone, Search, Shield, CheckCircle, ArrowRight } from 'lucide-react'

const WebsiteService = () => {
  const features = [
    {
      icon: <Globe size={24} />,
      title: 'Design Moderne',
      description: 'Interfaces élégantes respectueuses de l\'identité catholique.'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Responsive',
      description: 'Sites optimisés pour tous les appareils et écrans.'
    },
    {
      icon: <Search size={24} />,
      title: 'SEO Optimisé',
      description: 'Référencement naturel pour être trouvé facilement.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Sécurisé',
      description: 'Sites sécurisés avec maintenance et sauvegarde incluses.'
    }
  ]

  const services = [
    'Conception UX/UI personnalisée',
    'Développement responsive',
    'CMS facile à utiliser',
    'Optimisation SEO complète',
    'Accompagnement personnalisé',
    'Maintenance et support'
  ]

  return (
    <>
      <title>Création Sites Web - Avènement Agence Communication Catholique</title>
      <meta name="description" content="Création sites internet pour paroisses. Sites web modernes, responsive, optimisés SEO. CMS facile, maintenance incluse." />
      <meta name="keywords" content="création site paroisse, sites internet paroisses, site web catholique, développement web religieux, CMS paroisse, référencement site religieux" />
      <meta property="og:title" content="Création Sites Web - Sites Internet pour Paroisses" />
      <meta property="og:description" content="Création de sites web modernes pour paroisses et institutions catholiques" />
      <meta property="og:url" content="https://avenement.com/services/website" />
      <link rel="canonical" href="https://avenement.com/services/website" />

      <div className="service-page">
        <section className="section-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <div className="hero-icon">
                <Globe size={64} />
              </div>
              <h1>Création de Sites Web</h1>
              <p className="hero-description">
                Sites web modernes et élégants parfaitement adaptés aux paroisses. 
                Design responsive, SEO optimisé et gestion facile.
              </p>
              <Link to="/contact" className="btn btn-primary btn-large">
                Demander un devis <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Nos Atouts</h2>
              <p>Sites web conçus avec les dernières technologies pour une expérience optimale.</p>
            </motion.div>

            <div className="grid grid-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="feature-card"
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Services Inclus</h2>
            </motion.div>

            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="service-item"
                >
                  <CheckCircle size={20} />
                  <span>{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-blue">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="cta-content"
            >
              <h2>Créons Votre Site Web</h2>
              <p>
                Donnez une nouvelle dimension à votre présence en ligne avec un site web 
                professionnel qui reflète vos valeurs.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-large">
                  Demander un devis gratuit
                </Link>
                <Link to="/services" className="btn btn-secondary btn-large">
                  Voir tous nos services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <style>{`
        .service-page { padding-top: 80px; }
        .hero-content { text-align: center; max-width: 800px; margin: 0 auto; }
        .hero-icon { color: var(--color-gold); margin-bottom: var(--space-6); display: flex; justify-content: center; }
        .hero-description { font-size: var(--text-xl); color: rgba(255, 255, 255, 0.9); margin: var(--space-6) 0 var(--space-8); }
        .section-header { text-align: center; margin-bottom: var(--space-12); }
        .feature-card { display: flex; gap: var(--space-4); padding: var(--space-6); background: var(--color-white); border-radius: 16px; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1); transition: var(--transition-normal); }
        .feature-card:hover { transform: translateY(-5px); }
        .feature-icon { color: var(--color-gold); flex-shrink: 0; }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-4); }
        .service-item { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-4); background: var(--color-white); border-radius: 12px; }
        .service-item svg { color: var(--color-gold); }
        .cta-content { text-align: center; max-width: 600px; margin: 0 auto; }
        .cta-actions { display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap; margin-top: var(--space-8); }
        .btn-large { padding: var(--space-4) var(--space-8); font-size: var(--text-lg); display: flex; align-items: center; gap: var(--space-2); }
        @media (max-width: 768px) { .feature-card { flex-direction: column; text-align: center; } .cta-actions { flex-direction: column; align-items: center; } }
      `}</style>
    </>
  )
}

export default WebsiteService
