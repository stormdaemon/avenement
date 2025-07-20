import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Users, Heart, Calendar, BarChart3, CheckCircle, ArrowRight, Facebook, Instagram, Youtube } from 'lucide-react'

const SocialMediaService = () => {
  const features = [
    {
      icon: <Heart size={24} />,
      title: 'Contenu Spirituel Authentique',
      description: 'Création de publications inspirantes respectueuses des valeurs catholiques et adaptées à votre communauté.'
    },
    {
      icon: <Calendar size={24} />,
      title: 'Planification Stratégique',
      description: 'Calendrier éditorial aligné sur le calendrier liturgique et les temps forts de votre paroisse.'
    },
    {
      icon: <Users size={24} />,
      title: 'Community Management',
      description: 'Gestion des interactions, réponses aux commentaires et animation de votre communauté en ligne.'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Analyse de Performance',
      description: 'Suivi des statistiques et optimisation continue pour maximiser votre portée et engagement.'
    }
  ]

  const platforms = [
    {
      name: 'Facebook',
      icon: <Facebook size={32} />,
      description: 'Page paroisse, événements, groupes communautaires',
      color: '#1877F2',
      services: ['Publications quotidiennes', 'Événements Facebook', 'Groupes privés', 'Live streaming']
    },
    {
      name: 'Instagram',
      icon: <Instagram size={32} />,
      description: 'Stories, posts inspirants, témoignages visuels',
      color: '#E4405F',
      services: ['Stories quotidiennes', 'Posts inspirants', 'Reels créatifs', 'IGTV témoignages']
    },
    {
      name: 'YouTube',
      icon: <Youtube size={32} />,
      description: 'Chaîne paroisse, homélies, témoignages',
      color: '#FF0000',
      services: ['Chaîne optimisée', 'Miniatures attractives', 'Playlists thématiques', 'Shorts spirituels']
    }
  ]

  const contentTypes = [
    'Citations bibliques et spirituelles',
    'Annonces et informations paroissiales',
    'Témoignages de fidèles',
    'Méditations et réflexions',
    'Photos d\'événements et célébrations',
    'Vidéos courtes inspirantes',
    'Prières et intentions',
    'Actualités diocésaines',
    'Catéchèse et spiritualité',
    'Appels à la solidarité'
  ]

  const benefits = [
    'Toucher les jeunes générations',
    'Renforcer le sentiment d\'appartenance',
    'Faciliter la communication paroissiale',
    'Attirer de nouveaux fidèles',
    'Créer une communauté en ligne active',
    'Valoriser les actions de la paroisse'
  ]

  const process = [
    {
      step: '1',
      title: 'Audit de votre présence',
      description: 'Analyse de vos comptes existants et définition de votre stratégie de communication.'
    },
    {
      step: '2',
      title: 'Création du calendrier',
      description: 'Élaboration d\'un planning éditorial adapté à votre calendrier liturgique.'
    },
    {
      step: '3',
      title: 'Production de contenu',
      description: 'Création régulière de publications engageantes et respectueuses de vos valeurs.'
    },
    {
      step: '4',
      title: 'Animation et suivi',
      description: 'Gestion quotidienne des interactions et analyse des performances.'
    }
  ]

  return (
    <>
      <title>Gestion Réseaux Sociaux - Avènement Agence Communication Catholique</title>
      <meta name="description" content="Gestion professionnelle réseaux sociaux pour paroisses. Facebook, Instagram, YouTube. Contenu spirituel, community management, calendrier liturgique." />
      <meta name="keywords" content="réseaux sociaux catholiques, gestion réseaux sociaux paroisses, marketing paroissial, communication digitale église, facebook paroisse, instagram catholique, youtube paroisse, community management religieux, contenu spirituel réseaux sociaux, calendrier liturgique réseaux sociaux" />
      <meta property="og:title" content="Gestion Réseaux Sociaux - Communication Digitale Catholique" />
      <meta property="og:description" content="Gestion professionnelle de vos réseaux sociaux pour toucher plus de fidèles et renforcer votre communauté" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://avenement.com/services/social-media" />
      <link rel="canonical" href="https://avenement.com/services/social-media" />

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
                <Users size={64} />
              </div>
              <h1>Gestion Réseaux Sociaux</h1>
              <p className="hero-description">
                Développez votre présence en ligne avec une stratégie de communication 
                digitale adaptée aux valeurs catholiques. Touchez plus de fidèles et 
                renforcez les liens de votre communauté paroissiale.
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
              <h2>Notre Approche</h2>
              <p className="section-description">
                Une gestion professionnelle de vos réseaux sociaux qui respecte 
                vos valeurs et s'adapte à votre communauté paroissiale.
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
              <h2>Plateformes Gérées</h2>
              <p className="section-description">
                Nous gérons votre présence sur les principales plateformes 
                sociales fréquentées par vos fidèles.
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
                  <div className="platform-header">
                    <div className="platform-icon">
                      {platform.icon}
                    </div>
                    <div className="platform-info">
                      <h3 className="platform-name">{platform.name}</h3>
                      <p className="platform-description">{platform.description}</p>
                    </div>
                  </div>
                  <div className="platform-services">
                    {platform.services.map((service, idx) => (
                      <div key={idx} className="service-item">
                        <CheckCircle size={16} />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="section section-gold">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Types de Contenu</h2>
              <p className="section-description">
                Nous créons du contenu varié et engageant pour maintenir 
                l'intérêt de votre communauté tout au long de l'année.
              </p>
            </motion.div>

            <div className="content-grid">
              {contentTypes.map((content, index) => (
                <motion.div
                  key={content}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="content-item"
                >
                  <CheckCircle size={20} />
                  <span>{content}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section">
          <div className="container">
            <div className="benefits-content">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="benefits-text"
              >
                <h2>Pourquoi les Réseaux Sociaux ?</h2>
                <p className="benefits-description">
                  Les réseaux sociaux sont devenus incontournables pour toucher 
                  les fidèles d'aujourd'hui, particulièrement les jeunes générations. 
                  Une présence bien gérée permet de créer du lien et de rayonner 
                  au-delà des murs de l'église.
                </p>
                <div className="benefits-list">
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
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="benefits-visual"
              >
                <div className="stats-card">
                  <h3>Impact des Réseaux Sociaux</h3>
                  <div className="stat-item">
                    <span className="stat-number">85%</span>
                    <span className="stat-label">des 18-35 ans utilisent les réseaux sociaux</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">3x</span>
                    <span className="stat-label">plus d'engagement qu'un site web classique</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">accessibilité pour votre communauté</span>
                  </div>
                </div>
              </motion.div>
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
              <h2>Notre Méthode</h2>
              <p className="section-description">
                Un processus structuré pour développer votre présence en ligne 
                de manière cohérente et efficace.
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
              <h2>Développez Votre Communauté</h2>
              <p className="cta-description">
                Confiez-nous la gestion de vos réseaux sociaux et concentrez-vous 
                sur votre mission pastorale. Nous nous occupons du reste.
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
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-6);
        }

        .platform-card {
          background: var(--color-white);
          padding: var(--space-6);
          border-radius: 16px;
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

        .platform-header {
          display: flex;
          gap: var(--space-4);
          margin-bottom: var(--space-6);
        }

        .platform-icon {
          color: var(--platform-color);
          flex-shrink: 0;
        }

        .platform-info {
          flex: 1;
        }

        .platform-name {
          font-size: var(--text-xl);
          margin-bottom: var(--space-2);
          color: var(--color-blue);
        }

        .platform-description {
          color: var(--color-blue);
          font-size: var(--text-sm);
        }

        .platform-services {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .service-item {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-sm);
          color: var(--color-blue-dark);
        }

        .service-item svg {
          color: var(--color-gold);
          flex-shrink: 0;
        }

        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-4);
        }

        .content-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-4);
          background: rgba(255, 255, 255, 0.9);
          border-radius: 12px;
          color: var(--color-blue-dark);
          font-weight: 500;
        }

        .content-item svg {
          color: var(--color-blue);
          flex-shrink: 0;
        }

        .benefits-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-12);
          align-items: center;
        }

        .benefits-description {
          font-size: var(--text-lg);
          color: var(--color-blue);
          margin-bottom: var(--space-6);
          line-height: 1.6;
        }

        .benefits-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          color: var(--color-blue-dark);
          font-weight: 500;
        }

        .benefit-item svg {
          color: var(--color-gold);
          flex-shrink: 0;
        }

        .stats-card {
          background: linear-gradient(135deg, var(--color-gold-light), var(--color-gold));
          padding: var(--space-8);
          border-radius: 20px;
          color: var(--color-blue-dark);
        }

        .stats-card h3 {
          font-size: var(--text-2xl);
          margin-bottom: var(--space-6);
          color: var(--color-blue-dark);
          text-align: center;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: var(--space-6);
          text-align: center;
        }

        .stat-item:last-child {
          margin-bottom: 0;
        }

        .stat-number {
          font-family: var(--font-title);
          font-size: var(--text-4xl);
          font-weight: 900;
          color: var(--color-blue);
          display: block;
          margin-bottom: var(--space-2);
        }

        .stat-label {
          font-size: var(--text-base);
          color: var(--color-blue-dark);
          font-weight: 500;
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

          .platform-header {
            flex-direction: column;
            text-align: center;
          }

          .benefits-content {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }

          .process-step {
            flex-direction: column;
            text-align: center;
          }

          .step-number {
            width: 60px;
            font-size: var(--text-2xl);
          }

          .content-grid {
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

export default SocialMediaService
