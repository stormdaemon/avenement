import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Target, Users, Award, ArrowRight } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Heart size={32} />,
      title: 'Passion pour la Foi',
      description: 'Notre équipe partage une profonde conviction chrétienne et comprend les enjeux de la communication religieuse.',
      keywords: 'équipe catholique, conviction chrétienne, communication religieuse'
    },
    {
      icon: <Target size={32} />,
      title: 'Excellence Technique',
      description: 'Nous maîtrisons les dernières technologies pour offrir des solutions modernes et performantes.',
      keywords: 'expertise technique, technologies modernes, solutions performantes'
    },
    {
      icon: <Users size={32} />,
      title: 'Accompagnement Personnalisé',
      description: 'Chaque paroisse est unique. Nous adaptons nos services à vos besoins spécifiques et votre communauté.',
      keywords: 'accompagnement personnalisé, services adaptés, besoins spécifiques paroisses'
    },
    {
      icon: <Award size={32} />,
      title: 'Engagement Qualité',
      description: 'Notre réputation se construit sur la qualité de nos réalisations et la satisfaction de nos clients.',
      keywords: 'engagement qualité, satisfaction clients, réalisations qualité'
    }
  ]

  const team = [
    {
      name: 'Samuel Armnius',
      role: 'Directeur & Fondateur',
      description: 'Spécialiste en communication religieuse avec 10 ans d\'expérience dans l\'accompagnement des paroisses. Également créateur de la radio catholique 100% Louange et Adoration Heaven Radio.',
      keywords: 'directeur fondateur avènement, fondateur agence communication catholique'
    },
    {
      name: 'Théo Lafont',
      role: 'Responsable Technique',
      description: 'Expert web et technique, fondateur de l\'agence Théo Multimédia',
      keywords: 'responsable technique streaming, expert audiovisuel religieux'
    }
  ]

  const milestones = [
    {
      year: '2024',
      title: 'Création d\'Heaven Radio',
      description: 'Lancement de notre radio catholique 100% Louange et Adoration Heaven Radio.'
    },
    {
      year: '2025',
      title: 'Création d\'Avènement',
      description: 'Fondation de l\'agence avec la mission d\'accompagner les paroisses dans leur communication.'
    }
  ]

  return (
    <>
      <title>À Propos - Avènement Agence Communication Catholique</title>
      <meta name="description" content="Découvrez Avènement, agence spécialisée communication catholique. Notre équipe, nos valeurs, notre mission d'accompagner les paroisses." />
      <meta name="keywords" content="à propos avènement, agence communication catholique, équipe spécialisée, mission évangélisation, accompagnement paroisses, expertise communication religieuse, fondatrice avènement, équipe catholique, valeurs chrétiennes, histoire agence" />
      <meta property="og:title" content="À Propos - Avènement Agence Communication Catholique" />
      <meta property="og:description" content="Découvrez notre équipe passionnée et notre mission d'accompagner les paroisses dans leur communication" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://avenement.com/about" />
      <link rel="canonical" href="https://avenement.com/about" />

      <div className="about-page">
        {/* Hero Section */}
        <section className="section-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <h1>À Propos d'Avènement</h1>
              <p className="hero-description">
                Nous sommes une équipe passionnée, dédiée à l'accompagnement des paroisses 
                et institutions catholiques dans leur mission d'évangélisation à travers 
                une communication moderne et efficace.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section">
          <div className="container">
            <div className="mission-content">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mission-text"
              >
                <h2>Notre Mission</h2>
                <p className="mission-description">
                  Mettre notre expertise technique et notre compréhension de la foi catholique 
                  au service de l'Église. Nous croyons que la technologie moderne peut être 
                  un formidable outil d'évangélisation quand elle est utilisée avec sagesse 
                  et respect des valeurs chrétiennes.
                </p>
                <p>
                  Chaque projet que nous réalisons vise à rapprocher les fidèles de leur 
                  communauté paroissiale et à faciliter la transmission du message évangélique 
                  dans notre monde numérique.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mission-visual"
              >
                <div className="mission-card">
                  <h3>Notre Vision</h3>
                  <p>
                    "Être le pont entre la tradition millénaire de l'Église 
                    et les outils de communication du XXIe siècle."
                  </p>
                  <div className="mission-quote">
                    <em>"Allez donc, enseignez toutes les nations"</em>
                    <span>— Matthieu 28:19</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section section-alt">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Nos Valeurs</h2>
              <p className="section-description">
                Les principes qui guident notre travail quotidien et nos relations 
                avec les paroisses que nous accompagnons.
              </p>
            </motion.div>

            <div className="grid grid-2">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="value-card"
                >
                  <div className="value-icon">
                    {value.icon}
                  </div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Notre Équipe</h2>
              <p className="section-description">
                Des professionnels expérimentés, unis par la même passion 
                pour la communication au service de la foi.
              </p>
            </motion.div>

            <div className="grid grid-2">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="team-card"
                >
                  <div className="team-info">
                    <h4 className="team-name">{member.name}</h4>
                    <p className="team-role">{member.role}</p>
                    <p className="team-description">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section section-gold">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Notre Histoire</h2>
              <p className="section-description">
                Les étapes clés de notre développement et de notre engagement 
                au service de la communication catholique.
              </p>
            </motion.div>

            <div className="timeline">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="timeline-item"
                >
                  <div className="timeline-year">{milestone.year}</div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{milestone.title}</h4>
                    <p className="timeline-description">{milestone.description}</p>
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
              <h2>Rejoignez l'Aventure</h2>
              <p className="cta-description">
                Découvrez comment nous pouvons accompagner votre paroisse 
                dans sa mission d'évangélisation grâce à une communication moderne.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-large">
                  Nous contacter
                  <ArrowRight size={20} />
                </Link>
                <Link to="/services" className="btn btn-secondary btn-large">
                  Nos services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <style>{`
        .about-page {
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
          line-height: 1.6;
        }

        .mission-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-12);
          align-items: center;
        }

        .mission-description {
          font-size: var(--text-lg);
          margin-bottom: var(--space-6);
          color: var(--color-blue);
          line-height: 1.7;
        }

        .mission-text p {
          color: var(--color-blue);
          line-height: 1.6;
        }

        .mission-card {
          background: linear-gradient(135deg, var(--color-gold-light), var(--color-gold));
          padding: var(--space-8);
          border-radius: 20px;
          color: var(--color-blue-dark);
          text-align: center;
        }

        .mission-card h3 {
          font-size: var(--text-2xl);
          margin-bottom: var(--space-4);
          color: var(--color-blue-dark);
        }

        .mission-card p {
          font-size: var(--text-lg);
          margin-bottom: var(--space-6);
          line-height: 1.6;
        }

        .mission-quote {
          border-top: 2px solid rgba(30, 64, 175, 0.2);
          padding-top: var(--space-4);
        }

        .mission-quote em {
          display: block;
          font-size: var(--text-lg);
          margin-bottom: var(--space-2);
          font-style: italic;
        }

        .mission-quote span {
          font-size: var(--text-sm);
          opacity: 0.8;
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

        .value-card {
          background: var(--color-white);
          padding: var(--space-8);
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.1);
          transition: var(--transition-normal);
        }

        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .value-icon {
          color: var(--color-gold);
          margin-bottom: var(--space-4);
          display: flex;
          justify-content: center;
        }

        .value-title {
          font-size: var(--text-xl);
          margin-bottom: var(--space-3);
          color: var(--color-blue);
        }

        .value-description {
          color: var(--color-blue);
          line-height: 1.6;
        }

        .team-card {
          background: var(--color-white);
          padding: var(--space-8);
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.1);
          transition: var(--transition-normal);
        }

        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .team-name {
          font-size: var(--text-xl);
          margin-bottom: var(--space-2);
          color: var(--color-blue);
        }

        .team-role {
          font-size: var(--text-base);
          color: var(--color-gold);
          font-weight: 600;
          margin-bottom: var(--space-4);
        }

        .team-description {
          color: var(--color-blue);
          line-height: 1.6;
        }

        .timeline {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(30, 64, 175, 0.2);
          transform: translateX(-50%);
        }

        .timeline-item {
          display: flex;
          margin-bottom: var(--space-8);
          position: relative;
        }

        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-year {
          font-family: var(--font-title);
          font-size: var(--text-2xl);
          font-weight: 900;
          color: var(--color-blue-dark);
          width: 100px;
          text-align: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }



        .timeline-content {
          flex: 1;
          background: rgba(255, 255, 255, 0.8);
          padding: var(--space-6);
          border-radius: 12px;
          margin: 0 var(--space-6);
          backdrop-filter: blur(10px);
        }

        .timeline-title {
          font-size: var(--text-lg);
          margin-bottom: var(--space-3);
          color: var(--color-blue-dark);
        }

        .timeline-description {
          color: var(--color-blue-dark);
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
          .mission-content {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }

          .timeline::before {
            left: 30px;
          }

          .timeline-item,
          .timeline-item:nth-child(even) {
            flex-direction: row;
          }

          .timeline-year {
            width: 60px;
            font-size: var(--text-lg);
          }

          .timeline-year::after {
            left: 30px;
            transform: translateX(-50%);
          }

          .timeline-content {
            margin-left: var(--space-4);
            margin-right: 0;
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

export default About
