import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, Monitor, Wifi, Users, CheckCircle, ArrowRight, Youtube, Facebook, Globe } from 'lucide-react'

const MultiStreamService = () => {
  const features = [
    {
      icon: <Monitor size={24} />,
      title: 'Qualité HD Professionnelle',
      description: 'Diffusion en haute définition avec une qualité d\'image et de son optimale pour vos fidèles.'
    },
    {
      icon: <Wifi size={24} />,
      title: 'Streaming Simultané',
      description: 'Diffusion en direct sur Facebook, YouTube, votre site web et autres plateformes simultanément.'
    },
    {
      icon: <Users size={24} />,
      title: 'Gestion Technique Complète',
      description: 'Notre équipe s\'occupe de tous les aspects techniques pendant vos événements.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Archivage Automatique',
      description: 'Toutes vos diffusions sont automatiquement sauvegardées et accessibles en replay.'
    }
  ]

  const platforms = [
    {
      name: 'YouTube',
      icon: <Youtube size={32} />,
      description: 'Diffusion sur votre chaîne YouTube paroissiale',
      color: '#FF0000'
    },
    {
      name: 'Facebook',
      icon: <Facebook size={32} />,
      description: 'Live sur votre page Facebook paroisse',
      color: '#1877F2'
    },
    {
      name: 'Site Web',
      icon: <Globe size={32} />,
      description: 'Intégration directe sur votre site internet',
      color: '#059669'
    }
  ]

  const benefits = [
    'Toucher les fidèles empêchés de se déplacer',
    'Étendre votre rayonnement au-delà des murs de l\'église',
    'Créer une archive de vos célébrations',
    'Faciliter la participation des jeunes générations',
    'Maintenir le lien communautaire en toutes circonstances',
    'Permettre aux familles éloignées de participer'
  ]

  const process = [
    {
      step: '1',
      title: 'Analyse de votre église',
      description: 'Nous étudions l\'acoustique, l\'éclairage et la disposition de votre lieu de culte.'
    },
    {
      step: '2',
      title: 'Installation du matériel',
      description: 'Mise en place discrète des caméras et équipements audio professionnels.'
    },
    {
      step: '3',
      title: 'Configuration des plateformes',
      description: 'Paramétrage de vos comptes sur les différentes plateformes de diffusion.'
    },
    {
      step: '4',
      title: 'Accompagnement de vos équipes',
      description: 'Nous accompagnons vos bénévoles pour une utilisation autonome du système.'
    }
  ]

  return (
    <>
      <title>Diffusion Multi-Stream - Avènement Agence Communication Catholique</title>
      <meta name="description" content="Service de diffusion multi-stream pour paroisses. Streaming simultané messes et événements sur YouTube, Facebook, site web. Qualité HD professionnelle." />
      <meta name="keywords" content="diffusion multi stream, streaming messe, diffusion live église, streaming événements catholiques, diffusion événements religieux, streaming simultané, diffusion messe youtube facebook, live streaming paroisse, diffusion HD messe, streaming professionnel église" />
      <meta property="og:title" content="Diffusion Multi-Stream - Service Streaming Professionnel" />
      <meta property="og:description" content="Diffusez vos messes et événements en direct sur toutes les plateformes simultanément avec une qualité professionnelle" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://avenement.com/services/multi-stream" />
      <link rel="canonical" href="https://avenement.com/services/multi-stream" />

      <div className="service-page">
        {/* Hero Section */}
        <section className="section-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <div className="hero-icon">
                <Play size={64} />
              </div>
              <h1>Diffusion Multi-Stream</h1>
              <p className="hero-description">
                Diffusez vos messes et événements en direct sur toutes les plateformes 
                simultanément avec une qualité professionnelle. Touchez plus de fidèles 
                et étendez votre rayonnement au-delà des murs de votre église.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary btn-large">
                  Demander un devis
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Fonctionnalités Avancées</h2>
              <p className="section-description">
                Une solution complète pour diffuser vos célébrations avec 
                la qualité et la fiabilité que méritent vos fidèles.
              </p>
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
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="section section-alt">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Plateformes de Diffusion</h2>
              <p className="section-description">
                Diffusion simultanée sur toutes les plateformes populaires 
                pour maximiser votre audience.
              </p>
            </motion.div>

            <div className="platforms-grid">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="platform-card"
                  style={{ '--platform-color': platform.color } as React.CSSProperties}
                >
                  <div className="platform-icon">
                    {platform.icon}
                  </div>
                  <h3 className="platform-name">{platform.name}</h3>
                  <p className="platform-description">{platform.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section section-gold">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Pourquoi Choisir le Multi-Stream ?</h2>
              <p className="section-description">
                Les avantages concrets de la diffusion en direct pour votre paroisse 
                et votre communauté de fidèles.
              </p>
            </motion.div>

            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="benefit-item"
                >
                  <CheckCircle size={20} />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Notre Processus d'Installation</h2>
              <p className="section-description">
                Une approche méthodique pour une installation réussie 
                et une utilisation optimale de votre système de diffusion.
              </p>
            </motion.div>

            <div className="process-steps">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
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
              <h2>Prêt à Diffuser ?</h2>
              <p className="cta-description">
                Contactez-nous pour une étude personnalisée de votre projet 
                de diffusion multi-stream et recevez un devis gratuit.
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
        .service-page {
          padding-top: 80px;
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-icon {
          color: var(--color-gold);
          margin-bottom: var(--space-6);
          display: flex;
          justify-content: center;
        }

        .hero-description {
          font-size: var(--text-xl);
          color: rgba(255, 255, 255, 0.9);
          margin: var(--space-6) 0 var(--space-8);
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          justify-content: center;
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

        .feature-card {
          display: flex;
          gap: var(--space-4);
          padding: var(--space-6);
          background: var(--color-white);
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.1);
          transition: var(--transition-normal);
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .feature-icon {
          color: var(--color-gold);
          flex-shrink: 0;
          margin-top: var(--space-1);
        }

        .feature-content {
          flex: 1;
        }

        .feature-title {
          font-size: var(--text-lg);
          margin-bottom: var(--space-3);
          color: var(--color-blue);
        }

        .feature-description {
          color: var(--color-blue);
          line-height: 1.6;
        }

        .platforms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-6);
        }

        .platform-card {
          background: var(--color-white);
          padding: var(--space-8);
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.1);
          transition: var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

        .platform-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--platform-color);
        }

        .platform-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .platform-icon {
          color: var(--platform-color);
          margin-bottom: var(--space-4);
          display: flex;
          justify-content: center;
        }

        .platform-name {
          font-size: var(--text-xl);
          margin-bottom: var(--space-3);
          color: var(--color-blue);
        }

        .platform-description {
          color: var(--color-blue);
          line-height: 1.6;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-4);
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-4);
          background: rgba(255, 255, 255, 0.9);
          border-radius: 12px;
          color: var(--color-blue-dark);
          font-weight: 500;
        }

        .benefit-item svg {
          color: var(--color-blue);
          flex-shrink: 0;
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
          background: rgba(212, 175, 55, 0.1);
          border-radius: 50%;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
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
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        @media (max-width: 768px) {
          .feature-card {
            flex-direction: column;
            text-align: center;
          }

          .process-step {
            flex-direction: column;
            text-align: center;
          }

          .step-number {
            width: 60px;
            font-size: var(--text-2xl);
          }

          .benefits-grid {
            grid-template-columns: 1fr;
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

export default MultiStreamService
