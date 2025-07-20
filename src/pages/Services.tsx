import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, Users, Calendar, Video, Globe, ArrowRight, CheckCircle } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Play size={48} />,
      title: 'Diffusion Multi-Stream',
      description: 'Diffusez vos messes et événements en direct sur toutes les plateformes simultanément.',
      features: [
        'Streaming simultané sur Facebook, YouTube, site web',
        'Qualité HD professionnelle',
        'Gestion technique complète',
        'Archivage automatique des diffusions'
      ],
      link: '/services/multi-stream',
      keywords: 'streaming messe, diffusion live église, multi stream événements catholiques, diffusion événements religieux'
    },
    {
      icon: <Users size={48} />,
      title: 'Gestion Réseaux Sociaux',
      description: 'Gestion professionnelle de vos réseaux sociaux pour toucher plus de fidèles.',
      features: [
        'Création de contenu spirituel',
        'Planification des publications',
        'Community management',
        'Analyse de performance'
      ],
      link: '/services/social-media',
      keywords: 'réseaux sociaux catholiques, gestion réseaux sociaux paroisses, marketing paroissial, communication digitale église'
    },
    {
      icon: <Calendar size={48} />,
      title: 'Organisation Événements',
      description: 'Planification et coordination complète de vos événements religieux.',
      features: [
        'Planification événementielle',
        'Coordination logistique',
        'Communication événementielle',
        'Suivi post-événement'
      ],
      link: '/services/events',
      keywords: 'organisation événements religieux, événementiel catholique, coordination événements paroisses, planification événements religieux'
    },
    {
      icon: <Video size={48} />,
      title: 'Films Institutionnels',
      description: 'Production de vidéos promotionnelles pour valoriser votre paroisse.',
      features: [
        'Réalisation vidéo professionnelle',
        'Montage et post-production',
        'Témoignages et interviews',
        'Diffusion multi-canal'
      ],
      link: '/services/films',
      keywords: 'films institutionnels religieux, production vidéo religieuse, vidéos promotionnelles paroisses, réalisation vidéo catholique'
    },
    {
      icon: <Globe size={48} />,
      title: 'Création Sites Web',
      description: 'Sites internet modernes et optimisés pour paroisses et institutions.',
      features: [
        'Design moderne et responsive',
        'Optimisation SEO',
        'Gestion de contenu facile',
        'Intégration réseaux sociaux'
      ],
      link: '/services/website',
      keywords: 'création site paroisse, sites internet paroisses, site web catholique, développement web religieux'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Analyse de vos besoins',
      description: 'Nous étudions votre paroisse, vos objectifs et votre communauté pour définir la stratégie optimale.'
    },
    {
      step: '02',
      title: 'Proposition personnalisée',
      description: 'Élaboration d\'un devis détaillé adapté à vos besoins spécifiques et votre budget.'
    },
    {
      step: '03',
      title: 'Mise en œuvre',
      description: 'Réalisation des services avec un suivi régulier et une communication transparente.'
    },
    {
      step: '04',
      title: 'Accompagnement continu',
      description: 'Support technique et accompagnement personnalisé pour une autonomie progressive.'
    }
  ]

  return (
    <>
      <title>Services - Avènement Agence Communication Catholique</title>
      <meta name="description" content="Découvrez nos services spécialisés : diffusion multi-stream, réseaux sociaux, événementiel, films institutionnels, sites web pour paroisses." />
      <meta name="keywords" content="services communication catholique, diffusion multi stream, réseaux sociaux catholiques, organisation événements religieux, films institutionnels religieux, création site paroisse, gestion réseaux sociaux paroisses, streaming messe, événementiel catholique, production vidéo religieuse" />
      <meta property="og:title" content="Services - Avènement Agence Communication Catholique" />
      <meta property="og:description" content="Services spécialisés en communication catholique : streaming, réseaux sociaux, événementiel, vidéo, web" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://avenement.com/services" />
      <link rel="canonical" href="https://avenement.com/services" />

      <div className="services-page">
        {/* Hero Section */}
        <section className="section-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <h1>Nos Services Spécialisés</h1>
              <p className="hero-description">
                Une gamme complète de services dédiés à la communication catholique, 
                conçus pour amplifier votre message et toucher plus de fidèles.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section">
          <div className="container">
            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="service-card"
                >
                  <div className="service-header">
                    <div className="service-icon">
                      {service.icon}
                    </div>
                    <div className="service-info">
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="service-features">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={service.link} className="service-cta">
                    En savoir plus
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section section-alt">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Notre Processus</h2>
              <p className="section-description">
                Une approche méthodique pour garantir le succès de votre projet 
                de communication catholique.
              </p>
            </motion.div>

            <div className="process-steps">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="process-step"
                >
                  <div className="step-number">{step.step}</div>
                  <div className="step-content">
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-description">{step.description}</p>
                  </div>
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
              <h2>Prêt à commencer ?</h2>
              <p className="cta-description">
                Contactez-nous pour discuter de vos besoins et recevoir 
                un devis personnalisé gratuit.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-large">
                  Demander un devis
                </Link>
                <Link to="/about" className="btn btn-secondary btn-large">
                  À propos de nous
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <style>{`
        .services-page {
          padding-top: 80px;
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-description {
          font-size: var(--text-xl);
          color: rgba(255, 255, 255, 0.9);
          margin-top: var(--space-6);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--space-8);
        }

        .service-card {
          background: var(--color-white);
          border-radius: 16px;
          padding: var(--space-8);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.1);
          transition: var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
          border-color: var(--color-gold-light);
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--color-gold), var(--color-blue));
        }

        .service-header {
          display: flex;
          gap: var(--space-4);
          margin-bottom: var(--space-6);
        }

        .service-icon {
          color: var(--color-gold);
          flex-shrink: 0;
        }

        .service-info {
          flex: 1;
        }

        .service-title {
          font-size: var(--text-2xl);
          margin-bottom: var(--space-3);
          color: var(--color-blue);
        }

        .service-description {
          color: var(--color-blue);
          line-height: 1.6;
        }

        .service-features {
          margin-bottom: var(--space-6);
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          margin-bottom: var(--space-3);
          color: var(--color-blue-dark);
        }

        .feature-item svg {
          color: var(--color-gold);
          flex-shrink: 0;
        }

        .service-cta {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          color: var(--color-gold);
          text-decoration: none;
          font-weight: 600;
          transition: var(--transition-fast);
        }

        .service-cta:hover {
          color: var(--color-gold-dark);
          gap: var(--space-3);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-12);
        }

        .section-description {
          font-size: var(--text-lg);
          color: var(--color-blue);
          max-width: 600px;
          margin: var(--space-4) auto 0;
        }

        .process-steps {
          display: grid;
          gap: var(--space-8);
          max-width: 800px;
          margin: 0 auto;
        }

        .process-step {
          display: flex;
          gap: var(--space-6);
          align-items: flex-start;
        }

        .step-number {
          font-family: var(--font-title);
          font-size: var(--text-4xl);
          font-weight: 900;
          color: var(--color-gold);
          flex-shrink: 0;
          width: 80px;
          text-align: center;
        }

        .step-content {
          flex: 1;
        }

        .step-title {
          font-size: var(--text-xl);
          margin-bottom: var(--space-3);
          color: var(--color-blue);
        }

        .step-description {
          color: var(--color-blue);
          line-height: 1.6;
        }

        .cta-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-description {
          font-size: var(--text-lg);
          color: rgba(255, 255, 255, 0.9);
          margin: var(--space-6) 0 var(--space-8);
        }

        .cta-actions {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-large {
          padding: var(--space-4) var(--space-8);
          font-size: var(--text-lg);
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-card {
            padding: var(--space-6);
          }

          .service-header {
            flex-direction: column;
            text-align: center;
          }

          .process-step {
            flex-direction: column;
            text-align: center;
          }

          .step-number {
            width: auto;
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

export default Services
