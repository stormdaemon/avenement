import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Users, CheckCircle, ArrowRight, Megaphone, Camera, Heart } from 'lucide-react'

const EventsService = () => {
  const features = [
    {
      icon: <Calendar size={24} />,
      title: 'Planification Complète',
      description: 'Organisation de A à Z de vos événements religieux, du concept à la réalisation.'
    },
    {
      icon: <Users size={24} />,
      title: 'Coordination d\'Équipes',
      description: 'Gestion des bénévoles, intervenants et prestataires pour un événement réussi.'
    },
    {
      icon: <Megaphone size={24} />,
      title: 'Communication Événementielle',
      description: 'Promotion efficace de vos événements sur tous les canaux de communication.'
    },
    {
      icon: <Camera size={24} />,
      title: 'Captation et Diffusion',
      description: 'Enregistrement et diffusion live de vos événements pour toucher plus de fidèles.'
    }
  ]

  const eventTypes = [
    {
      title: 'Célébrations Liturgiques',
      description: 'Messes solennelles, confirmations, ordinations',
      icon: <Heart size={32} />,
      examples: ['Messes de Noël et Pâques', 'Confirmations', 'Ordinations', 'Premières communions']
    },
    {
      title: 'Événements Communautaires',
      description: 'Fêtes paroissiales, pèlerinages, retraites',
      icon: <Users size={32} />,
      examples: ['Fêtes patronales', 'Pèlerinages', 'Retraites spirituelles', 'Journées spirituelles']
    },
    {
      title: 'Conférences et Séminaires',
      description: 'Colloques, séminaires, rencontres catéchétiques',
      icon: <Calendar size={32} />,
      examples: ['Conférences théologiques', 'Rencontres catéchistes', 'Séminaires diocésains', 'Journées d\'étude']
    }
  ]

  const services = [
    'Conception et planification événementielle',
    'Recherche et réservation de lieux',
    'Coordination des intervenants',
    'Gestion logistique complète',
    'Communication et promotion',
    'Accueil et gestion des participants',
    'Captation vidéo et photo',
    'Diffusion en direct',
    'Suivi post-événement',
    'Évaluation et bilan'
  ]

  const benefits = [
    'Événements professionnels et mémorables',
    'Gain de temps pour vos équipes',
    'Expertise en événementiel religieux',
    'Réseau de prestataires spécialisés',
    'Communication optimisée',
    'Gestion du stress et des imprévus'
  ]

  const process = [
    {
      step: '1',
      title: 'Définition du projet',
      description: 'Analyse de vos besoins, objectifs et contraintes pour définir le concept de votre événement.'
    },
    {
      step: '2',
      title: 'Planification détaillée',
      description: 'Élaboration du programme, réservations, coordination des intervenants et logistique.'
    },
    {
      step: '3',
      title: 'Communication',
      description: 'Création des supports de communication et promotion sur tous vos canaux.'
    },
    {
      step: '4',
      title: 'Réalisation',
      description: 'Coordination le jour J avec gestion de tous les aspects techniques et logistiques.'
    }
  ]

  return (
    <>
      <title>Organisation Événements - Avènement Agence Communication Catholique</title>
      <meta name="description" content="Organisation événements religieux professionnelle. Célébrations liturgiques, fêtes paroissiales, conférences, pèlerinages. Planification complète." />
      <meta name="keywords" content="organisation événements religieux, événementiel catholique, coordination événements paroisses, planification événements religieux, fêtes paroissiales, célébrations liturgiques, conférences religieuses, pèlerinages organisation, retraites spirituelles, événements diocésains" />
      <meta property="og:title" content="Organisation Événements - Événementiel Religieux Professionnel" />
      <meta property="og:description" content="Organisation complète de vos événements religieux : célébrations, fêtes paroissiales, conférences, pèlerinages" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://avenement.com/services/events" />
      <link rel="canonical" href="https://avenement.com/services/events" />

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
                <Calendar size={64} />
              </div>
              <h1>Organisation d'Événements</h1>
              <p className="hero-description">
                De la conception à la réalisation, nous orchestrons vos événements 
                religieux avec professionnalisme et respect de vos traditions. 
                Créez des moments mémorables qui renforcent votre communauté.
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
              <h2>Notre Expertise</h2>
              <p className="section-description">
                Une approche complète de l'événementiel religieux, 
                alliant tradition et modernité pour des événements réussis.
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

        {/* Event Types Section */}
        <section className="section section-alt">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Types d'Événements</h2>
              <p className="section-description">
                Nous organisons tous types d'événements religieux, 
                des célébrations liturgiques aux grands rassemblements.
              </p>
            </motion.div>

            <div className="event-types-grid">
              {eventTypes.map((eventType, index) => (
                <motion.div
                  key={eventType.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="event-type-card"
                >
                  <div className="event-type-icon">
                    {eventType.icon}
                  </div>
                  <h3 className="event-type-title">{eventType.title}</h3>
                  <p className="event-type-description">{eventType.description}</p>
                  <div className="event-examples">
                    {eventType.examples.map((example, idx) => (
                      <span key={idx} className="example-tag">
                        {example}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section section-gold">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Services Inclus</h2>
              <p className="section-description">
                Une prise en charge complète de votre événement, 
                de la conception à l'évaluation post-événement.
              </p>
            </motion.div>

            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
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
                <h2>Pourquoi Nous Confier Vos Événements ?</h2>
                <p className="benefits-description">
                  Organiser un événement religieux demande une expertise particulière 
                  qui allie respect des traditions, logistique professionnelle et 
                  compréhension des enjeux spirituels. Notre équipe vous accompagne 
                  pour créer des moments inoubliables.
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
                <div className="timeline-card">
                  <h3>Chronologie Type</h3>
                  <div className="timeline-item">
                    <div className="timeline-time">J-60</div>
                    <div className="timeline-desc">Conception et planification</div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-time">J-30</div>
                    <div className="timeline-desc">Communication et promotion</div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-time">J-7</div>
                    <div className="timeline-desc">Préparatifs finaux</div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-time">J</div>
                    <div className="timeline-desc">Réalisation de l'événement</div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-time">J+7</div>
                    <div className="timeline-desc">Bilan et suivi</div>
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
              <h2>Notre Processus</h2>
              <p className="section-description">
                Une méthode éprouvée pour garantir le succès de votre événement 
                et la satisfaction de tous les participants.
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
              <h2>Créons Ensemble Votre Événement</h2>
              <p className="cta-description">
                Confiez-nous l'organisation de votre prochain événement religieux 
                et concentrez-vous sur l'essentiel : votre mission pastorale.
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

        .event-types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-6);
        }

        .event-type-card {
          background: var(--color-white);
          padding: var(--space-8);
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.1);
          transition: var(--transition-normal);
        }

        .event-type-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .event-type-icon {
          color: var(--color-gold);
          margin-bottom: var(--space-4);
          display: flex;
          justify-content: center;
        }

        .event-type-title {
          font-size: var(--text-xl);
          margin-bottom: var(--space-3);
          color: var(--color-blue);
        }

        .event-type-description {
          color: var(--color-blue);
          margin-bottom: var(--space-6);
          line-height: 1.6;
        }

        .event-examples {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
          justify-content: center;
        }

        .example-tag {
          background: rgba(212, 175, 55, 0.1);
          color: var(--color-gold-dark);
          padding: var(--space-1) var(--space-3);
          border-radius: 20px;
          font-size: var(--text-sm);
          font-weight: 500;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-4);
        }

        .service-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-4);
          background: rgba(255, 255, 255, 0.9);
          border-radius: 12px;
          color: var(--color-blue-dark);
          font-weight: 500;
        }

        .service-item svg {
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

        .timeline-card {
          background: linear-gradient(135deg, var(--color-blue), var(--color-blue-light));
          color: var(--color-white);
          padding: var(--space-8);
          border-radius: 20px;
        }

        .timeline-card h3 {
          font-size: var(--text-2xl);
          margin-bottom: var(--space-6);
          color: var(--color-white);
          text-align: center;
        }

        .timeline-item {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          margin-bottom: var(--space-4);
          padding: var(--space-3);
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-time {
          font-family: var(--font-title);
          font-weight: 900;
          color: var(--color-gold-light);
          min-width: 50px;
          text-align: center;
        }

        .timeline-desc {
          flex: 1;
          color: rgba(255, 255, 255, 0.9);
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

          .services-grid {
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

export default EventsService
