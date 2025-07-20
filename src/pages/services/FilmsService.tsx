import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Video, Camera, Edit, Share2, CheckCircle, ArrowRight, Play, Film, Award } from 'lucide-react'

const FilmsService = () => {
  const features = [
    {
      icon: <Camera size={24} />,
      title: 'Réalisation Professionnelle',
      description: 'Équipe de tournage expérimentée avec matériel haute définition pour un rendu professionnel.'
    },
    {
      icon: <Edit size={24} />,
      title: 'Montage et Post-Production',
      description: 'Montage créatif, étalonnage, mixage audio et effets visuels pour sublimer vos images.'
    },
    {
      icon: <Film size={24} />,
      title: 'Scénarisation Adaptée',
      description: 'Écriture de scripts respectueux des valeurs catholiques et adaptés à votre message.'
    },
    {
      icon: <Share2 size={24} />,
      title: 'Diffusion Multi-Canal',
      description: 'Optimisation pour tous les supports : web, réseaux sociaux, télévision, projection.'
    }
  ]

  const videoTypes = [
    {
      title: 'Films Institutionnels',
      description: 'Présentation de votre paroisse, diocèse ou institution',
      icon: <Award size={32} />,
      examples: ['Présentation paroissiale', 'Histoire du diocèse', 'Témoignages de fidèles', 'Projets pastoraux'],
      duration: '3-8 minutes'
    },
    {
      title: 'Documentaires Religieux',
      description: 'Reportages sur la vie spirituelle et les traditions',
      icon: <Film size={32} />,
      examples: ['Pèlerinages', 'Traditions locales', 'Portraits de saints', 'Histoire religieuse'],
      duration: '15-30 minutes'
    },
    {
      title: 'Vidéos Promotionnelles',
      description: 'Communication pour événements et campagnes',
      icon: <Play size={32} />,
      examples: ['Annonces d\'événements', 'Campagnes de dons', 'Appels aux vocations', 'Témoignages'],
      duration: '1-3 minutes'
    }
  ]

  const services = [
    'Conception et écriture du scénario',
    'Repérage et préparation du tournage',
    'Réalisation avec équipe professionnelle',
    'Captation audio haute qualité',
    'Montage et post-production',
    'Étalonnage et correction colorimétrique',
    'Mixage et design sonore',
    'Création de génériques et animations',
    'Livraison en plusieurs formats',
    'Accompagnement pour la diffusion'
  ]

  const equipment = [
    {
      category: 'Caméras',
      items: ['Caméras 4K professionnelles', 'Stabilisateurs et trépieds', 'Objectifs haute qualité', 'Drones pour prises aériennes']
    },
    {
      category: 'Audio',
      items: ['Micros-cravates sans fil', 'Perches directionnelles', 'Enregistreurs multipistes', 'Mixage en temps réel']
    },
    {
      category: 'Éclairage',
      items: ['Panneaux LED professionnels', 'Projecteurs tungstène', 'Réflecteurs et diffuseurs', 'Éclairage d\'ambiance']
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Briefing et conception',
      description: 'Définition de vos objectifs, public cible et message à transmettre. Écriture du concept créatif.'
    },
    {
      step: '2',
      title: 'Pré-production',
      description: 'Écriture du scénario, repérages, casting, planification du tournage et préparation technique.'
    },
    {
      step: '3',
      title: 'Tournage',
      description: 'Réalisation avec notre équipe professionnelle, respect des lieux sacrés et des traditions.'
    },
    {
      step: '4',
      title: 'Post-production',
      description: 'Montage, étalonnage, mixage audio et livraison dans les formats souhaités.'
    }
  ]

  return (
    <>
      <title>Films Institutionnels - Avènement Agence Communication Catholique</title>
      <meta name="description" content="Production films institutionnels religieux professionnels. Documentaires, vidéos promotionnelles, témoignages pour paroisses et diocèses." />
      <meta name="keywords" content="films institutionnels religieux, production vidéo religieuse, vidéos promotionnelles paroisses, réalisation vidéo catholique, documentaires religieux, témoignages vidéo paroisses, films diocésains, production audiovisuelle église, vidéos événements religieux, communication audiovisuelle catholique" />
      <meta property="og:title" content="Films Institutionnels - Production Vidéo Religieuse Professionnelle" />
      <meta property="og:description" content="Production de films institutionnels et documentaires religieux avec une équipe professionnelle spécialisée" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://avenement.com/services/films" />
      <link rel="canonical" href="https://avenement.com/services/films" />

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
                <Video size={64} />
              </div>
              <h1>Films Institutionnels</h1>
              <p className="hero-description">
                Racontez votre histoire avec des films institutionnels et documentaires 
                qui touchent les cœurs et transmettent vos valeurs. Production professionnelle 
                respectueuse de vos traditions et de vos lieux sacrés.
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
              <h2>Notre Savoir-Faire</h2>
              <p className="section-description">
                Une approche professionnelle de la production audiovisuelle 
                adaptée au monde religieux et à ses spécificités.
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

        {/* Video Types Section */}
        <section className="section section-alt">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Types de Productions</h2>
              <p className="section-description">
                Nous réalisons tous types de contenus audiovisuels 
                adaptés à vos besoins de communication.
              </p>
            </motion.div>

            <div className="video-types-grid">
              {videoTypes.map((videoType, index) => (
                <motion.div
                  key={videoType.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="video-type-card"
                >
                  <div className="video-type-header">
                    <div className="video-type-icon">
                      {videoType.icon}
                    </div>
                    <div className="video-type-info">
                      <h3 className="video-type-title">{videoType.title}</h3>
                      <p className="video-type-description">{videoType.description}</p>
                      <span className="video-duration">Durée : {videoType.duration}</span>
                    </div>
                  </div>
                  <div className="video-examples">
                    <h4>Exemples de réalisations :</h4>
                    <div className="examples-list">
                      {videoType.examples.map((example, idx) => (
                        <span key={idx} className="example-tag">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="section section-gold">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Matériel Professionnel</h2>
              <p className="section-description">
                Nous utilisons du matériel de pointe pour garantir 
                une qualité d'image et de son exceptionnelle.
              </p>
            </motion.div>

            <div className="equipment-grid">
              {equipment.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="equipment-card"
                >
                  <h3 className="equipment-title">{category.category}</h3>
                  <div className="equipment-items">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="equipment-item">
                        <CheckCircle size={16} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
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
              <h2>Services Inclus</h2>
              <p className="section-description">
                Une prestation complète de la conception à la livraison 
                de votre film institutionnel.
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
              <h2>Processus de Production</h2>
              <p className="section-description">
                Une méthode éprouvée pour créer des films qui marquent 
                et transmettent efficacement votre message.
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

        {/* Showcase Section */}
        <section className="section section-blue">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="showcase-content"
            >
              <div className="showcase-text">
                <h2>Pourquoi Choisir la Vidéo ?</h2>
                <div className="showcase-stats">
                  <div className="stat-item">
                    <span className="stat-number">90%</span>
                    <span className="stat-label">de rétention d'information avec la vidéo</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">5x</span>
                    <span className="stat-label">plus d'engagement qu'un contenu textuel</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">80%</span>
                    <span className="stat-label">des utilisateurs regardent des vidéos en ligne</span>
                  </div>
                </div>
                <p className="showcase-description">
                  La vidéo est le média le plus puissant pour transmettre des émotions 
                  et créer du lien. Elle permet de faire découvrir votre paroisse, 
                  de témoigner de la foi et d'inspirer votre communauté.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="cta-content"
            >
              <h2>Racontez Votre Histoire</h2>
              <p className="cta-description">
                Chaque paroisse a une histoire unique à raconter. 
                Confiez-nous la réalisation de votre film institutionnel 
                et touchez les cœurs de votre communauté.
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

        .video-types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--space-6);
        }

        .video-type-card {
          background: var(--color-white);
          padding: var(--space-6);
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.1);
          transition: var(--transition-normal);
        }

        .video-type-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .video-type-header {
          display: flex;
          gap: var(--space-4);
          margin-bottom: var(--space-6);
        }

        .video-type-icon {
          color: var(--color-gold);
          flex-shrink: 0;
        }

        .video-type-info {
          flex: 1;
        }

        .video-type-title {
          font-size: var(--text-xl);
          margin-bottom: var(--space-2);
          color: var(--color-blue);
        }

        .video-type-description {
          color: var(--color-blue);
          margin-bottom: var(--space-3);
          line-height: 1.6;
        }

        .video-duration {
          background: rgba(212, 175, 55, 0.1);
          color: var(--color-gold-dark);
          padding: var(--space-1) var(--space-3);
          border-radius: 20px;
          font-size: var(--text-sm);
          font-weight: 500;
        }

        .video-examples h4 {
          font-size: var(--text-base);
          margin-bottom: var(--space-3);
          color: var(--color-blue);
        }

        .examples-list {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
        }

        .example-tag {
          background: rgba(30, 64, 175, 0.1);
          color: var(--color-blue);
          padding: var(--space-1) var(--space-3);
          border-radius: 20px;
          font-size: var(--text-sm);
          font-weight: 500;
        }

        .equipment-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-6);
        }

        .equipment-card {
          background: rgba(255, 255, 255, 0.9);
          padding: var(--space-6);
          border-radius: 16px;
          backdrop-filter: blur(10px);
        }

        .equipment-title {
          font-size: var(--text-xl);
          margin-bottom: var(--space-4);
          color: var(--color-blue-dark);
          text-align: center;
        }

        .equipment-items {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .equipment-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          color: var(--color-blue-dark);
          font-weight: 500;
        }

        .equipment-item svg {
          color: var(--color-blue);
          flex-shrink: 0;
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
          background: var(--color-white);
          border-radius: 12px;
          color: var(--color-blue-dark);
          font-weight: 500;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .service-item svg {
          color: var(--color-gold);
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

        .showcase-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .showcase-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-6);
          margin: var(--space-8) 0;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-family: var(--font-title);
          font-size: var(--text-4xl);
          font-weight: 900;
          color: var(--color-gold-light);
          display: block;
          margin-bottom: var(--space-2);
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.9);
          text-align: center;
          font-weight: 500;
        }

        .showcase-description {
          font-size: var(--text-lg);
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }

        .cta-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-description {
          font-size: var(--text-lg);
          color: var(--color-blue);
          margin: var(--space-6) 0 var(--space-8);
          line-height: 1.6;
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

          .video-type-header {
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

          .services-grid {
            grid-template-columns: 1fr;
          }

          .showcase-stats {
            grid-template-columns: 1fr;
            gap: var(--space-4);
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

export default FilmsService
