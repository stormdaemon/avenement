import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, Users, Calendar, Video, Globe, ArrowRight } from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: <Play size={32} />,
      title: 'Diffusion Multi-Stream',
      description: 'Diffusez vos messes et événements en direct sur toutes les plateformes simultanément.',
      link: '/services/multi-stream',
      keywords: 'streaming messe, diffusion live église, multi stream événements catholiques'
    },
    {
      icon: <Users size={32} />,
      title: 'Réseaux Sociaux',
      description: 'Gestion professionnelle de vos réseaux sociaux pour toucher plus de fidèles.',
      link: '/services/social-media',
      keywords: 'réseaux sociaux catholiques, gestion réseaux sociaux paroisses, marketing paroissial'
    },
    {
      icon: <Calendar size={32} />,
      title: 'Organisation Événements',
      description: 'Planification et coordination complète de vos événements religieux.',
      link: '/services/events',
      keywords: 'organisation événements religieux, événementiel catholique, coordination événements paroisses'
    },
    {
      icon: <Video size={32} />,
      title: 'Films Institutionnels',
      description: 'Production de vidéos promotionnelles pour valoriser votre paroisse.',
      link: '/services/films',
      keywords: 'films institutionnels religieux, production vidéo religieuse, vidéos promotionnelles paroisses'
    },
    {
      icon: <Globe size={32} />,
      title: 'Création Sites Web',
      description: 'Sites internet modernes et optimisés pour paroisses et institutions.',
      link: '/services/website',
      keywords: 'création site paroisse, sites internet paroisses, site web catholique'
    }
  ]

  const stats = [
    { number: '50+', label: 'Paroisses accompagnées', keywords: 'paroisses clientes avènement' },
    { number: '200+', label: 'Événements diffusés', keywords: 'événements catholiques diffusés' },
    { number: '100K+', label: 'Fidèles touchés', keywords: 'audience événements religieux' },
    { number: '5', label: 'Ans d\'expérience', keywords: 'expérience communication catholique' }
  ]

  return (
    <>
      <title>Avènement - Agence Communication Catholique Spécialisée</title>
      <meta name="description" content="Avènement, agence spécialisée communication catholique. Diffusion multi-stream, réseaux sociaux, événementiel religieux pour paroisses." />
      <meta name="keywords" content="agence communication catholique, événements catholiques, diffusion multi stream, réseaux sociaux catholiques, avènement agence, communication paroissiale, streaming messe, organisation événements religieux, films institutionnels religieux, création site paroisse" />
      <meta property="og:title" content="Avènement - Agence Communication Catholique Spécialisée" />
      <meta property="og:description" content="Spécialistes de la communication pour paroisses et institutions catholiques. Diffusion multi-stream, réseaux sociaux, événementiel." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://avenement.com" />
      <link rel="canonical" href="https://avenement.com" />

      <div className="home">
        {/* Hero Section */}
        <section className="section-hero">
          <div className="container">
            <div className="hero-content">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-text"
              >
                <h1 className="hero-title">
                  <span className="text-gradient">Avènement</span>
                  <br />
                  Communication Catholique
                </h1>
                <p className="hero-description">
                  Nous mettons notre expertise au service de l'évangélisation et du rayonnement 
                  de la foi catholique. Spécialistes de la communication pour paroisses et 
                  institutions religieuses.
                </p>
                <div className="hero-actions">
                  <Link to="/services" className="btn btn-primary btn-large">
                    Découvrir nos services
                    <ArrowRight size={20} />
                  </Link>
                  <Link to="/contact" className="btn btn-secondary btn-large">
                    Devis gratuit
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hero-visual"
              >
                <div className="hero-card">
                  <div className="hero-card-content">
                    <h3>Communication Catholique d'Excellence</h3>
                    <p>Diffusion multi-stream, réseaux sociaux, événementiel, films institutionnels, sites web</p>
                    <div className="hero-features">
                      <span>✓ Expertise religieuse</span>
                      <span>✓ Technologies modernes</span>
                      <span>✓ Accompagnement personnalisé</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Nos Services Spécialisés</h2>
              <p className="section-description">
                Une gamme complète de services dédiés à la communication catholique, 
                adaptés aux besoins spécifiques des paroisses et institutions religieuses.
              </p>
            </motion.div>

            <div className="grid grid-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={service.link} className="card card-service hover-lift">
                    <div className="service-icon">
                      {service.icon}
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <div className="service-arrow">
                      <ArrowRight size={20} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section section-gold">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Notre Impact</h2>
              <p className="section-description">
                Des chiffres qui témoignent de notre engagement au service 
                de la communication catholique.
              </p>
            </motion.div>

            <div className="grid grid-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="stat-card"
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section section-blue">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="cta-content"
            >
              <h2>Prêt à rayonner ?</h2>
              <p className="cta-description">
                Contactez-nous pour un devis personnalisé et découvrez comment 
                nous pouvons vous accompagner dans votre mission d'évangélisation.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-large">
                  Demander un devis gratuit
                </Link>
                <Link to="/about" className="btn btn-secondary btn-large">
                  En savoir plus
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <style>{`
        .home {
          padding-top: 80px; /* Compensation header fixe */
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-12);
          align-items: center;
          min-height: 70vh;
        }

        .hero-title {
          font-size: var(--text-7xl);
          margin-bottom: var(--space-6);
          line-height: 1.1;
        }

        .hero-description {
          font-size: var(--text-xl);
          margin-bottom: var(--space-8);
          color: rgba(255, 255, 255, 0.9);
        }

        .hero-actions {
          display: flex;
          gap: var(--space-4);
          flex-wrap: wrap;
        }

        .btn-large {
          padding: var(--space-4) var(--space-8);
          font-size: var(--text-lg);
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .hero-visual {
          display: flex;
          justify-content: center;
        }

        .hero-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: var(--space-8);
          border: 1px solid rgba(255, 255, 255, 0.2);
          max-width: 400px;
        }

        .hero-card h3 {
          color: var(--color-white);
          margin-bottom: var(--space-4);
          font-size: var(--text-2xl);
        }

        .hero-card p {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: var(--space-6);
        }

        .hero-features {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .hero-features span {
          color: var(--color-gold-light);
          font-weight: 500;
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-12);
        }

        .section-header h2 {
          margin-bottom: var(--space-4);
        }

        .section-description {
          font-size: var(--text-lg);
          color: var(--color-blue);
          max-width: 600px;
          margin: 0 auto;
        }

        .service-icon {
          color: var(--color-gold);
          margin-bottom: var(--space-4);
          display: flex;
          justify-content: center;
        }

        .service-title {
          font-size: var(--text-xl);
          margin-bottom: var(--space-3);
          text-align: center;
        }

        .service-description {
          text-align: center;
          margin-bottom: var(--space-4);
          color: var(--color-blue);
        }

        .service-arrow {
          display: flex;
          justify-content: center;
          color: var(--color-gold);
          opacity: 0;
          transform: translateX(-10px);
          transition: var(--transition-normal);
        }

        .card-service:hover .service-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .stat-card {
          text-align: center;
          padding: var(--space-6);
        }

        .stat-number {
          font-family: var(--font-title);
          font-size: var(--text-5xl);
          font-weight: 900;
          color: var(--color-blue-dark);
          margin-bottom: var(--space-2);
        }

        .stat-label {
          font-size: var(--text-lg);
          color: var(--color-blue-dark);
          font-weight: 500;
        }

        .cta-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: var(--text-5xl);
          margin-bottom: var(--space-6);
        }

        .cta-description {
          font-size: var(--text-xl);
          margin-bottom: var(--space-8);
          color: rgba(255, 255, 255, 0.9);
        }

        .cta-actions {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: var(--space-8);
            text-align: center;
          }

          .hero-title {
            font-size: var(--text-5xl);
          }

          .hero-description {
            font-size: var(--text-lg);
          }

          .hero-actions {
            justify-content: center;
          }

          .btn-large {
            padding: var(--space-3) var(--space-6);
            font-size: var(--text-base);
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </>
  )
}

export default Home
