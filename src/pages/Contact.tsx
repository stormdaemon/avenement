import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    parish: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    'Diffusion Multi-Stream',
    'Gestion Réseaux Sociaux',
    'Organisation Événements',
    'Films Institutionnels',
    'Création Sites Web',
    'Conseil en Communication',
    'Autre'
  ]

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'contact@avenement.com',
      link: 'mailto:contact@avenement.com',
      keywords: 'email contact avènement'
    },
    {
      icon: <Phone size={24} />,
      title: 'Téléphone',
      value: '01 23 45 67 89',
      link: 'tel:+33123456789',
      keywords: 'téléphone contact avènement'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Adresse',
      value: 'Paris, France',
      link: null,
      keywords: 'adresse avènement paris'
    },
    {
      icon: <Clock size={24} />,
      title: 'Horaires',
      value: 'Lun-Ven 9h-18h',
      link: null,
      keywords: 'horaires contact avènement'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, on simule l'envoi du formulaire
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        parish: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <>
      <title>Contact - Avènement Agence Communication Catholique</title>
      <meta name="description" content="Contactez Avènement pour votre projet de communication catholique. Devis gratuit, conseil personnalisé pour paroisses et institutions." />
      <meta name="keywords" content="contact avènement, devis gratuit communication catholique, conseil paroisse, contact agence communication religieuse, demande devis streaming messe, contact réseaux sociaux paroisses, conseil événementiel catholique, contact création site paroisse, téléphone avènement, email contact" />
      <meta property="og:title" content="Contact - Avènement Agence Communication Catholique" />
      <meta property="og:description" content="Contactez-nous pour un devis gratuit et un conseil personnalisé pour votre projet de communication" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://avenement.com/contact" />
      <link rel="canonical" href="https://avenement.com/contact" />

      <div className="contact-page">
        {/* Hero Section */}
        <section className="section-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <h1>Contactez-nous</h1>
              <p className="hero-description">
                Prêt à donner une nouvelle dimension à votre communication ? 
                Contactez notre équipe pour un devis personnalisé et gratuit.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section">
          <div className="container">
            <div className="contact-content">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="contact-form-section"
              >
                <h2>Demande de Devis</h2>
                <p className="form-description">
                  Parlez-nous de votre projet et recevez un devis personnalisé 
                  adapté à vos besoins et votre budget.
                </p>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Nom complet *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">Téléphone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="parish">Paroisse / Institution</label>
                        <input
                          type="text"
                          id="parish"
                          name="parish"
                          value={formData.parish}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="service">Service souhaité</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map(service => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Décrivez votre projet *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="form-textarea"
                        placeholder="Décrivez-nous votre projet, vos besoins, vos objectifs..."
                      />
                    </div>

                    <button type="submit" className="btn btn-primary btn-large form-submit">
                      <Send size={20} />
                      Envoyer ma demande
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="form-success"
                  >
                    <CheckCircle size={48} />
                    <h3>Message envoyé !</h3>
                    <p>
                      Merci pour votre demande. Notre équipe vous contactera 
                      dans les plus brefs délais pour discuter de votre projet.
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="contact-info-section"
              >
                <h2>Nos Coordonnées</h2>
                <p className="info-description">
                  N'hésitez pas à nous contacter directement pour toute question 
                  ou pour prendre rendez-vous.
                </p>

                <div className="contact-info-list">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="contact-info-item"
                    >
                      <div className="info-icon">
                        {info.icon}
                      </div>
                      <div className="info-content">
                        <h4 className="info-title">{info.title}</h4>
                        {info.link ? (
                          <a href={info.link} className="info-value info-link">
                            {info.value}
                          </a>
                        ) : (
                          <p className="info-value">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="contact-card">
                  <h3>Pourquoi nous choisir ?</h3>
                  <ul className="contact-benefits">
                    <li>✓ Devis gratuit et sans engagement</li>
                    <li>✓ Expertise spécialisée en communication catholique</li>
                    <li>✓ Accompagnement personnalisé</li>
                    <li>✓ Technologies modernes et performantes</li>
                    <li>✓ Équipe passionnée et engagée</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section section-alt">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Questions Fréquentes</h2>
              <p className="section-description">
                Les réponses aux questions les plus courantes sur nos services.
              </p>
            </motion.div>

            <div className="faq-grid">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="faq-item"
              >
                <h4>Combien coûtent vos services ?</h4>
                <p>
                  Tous nos tarifs sont établis sur devis personnalisé selon vos besoins 
                  spécifiques. Contactez-nous pour une estimation gratuite.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="faq-item"
              >
                <h4>Travaillez-vous avec toutes les paroisses ?</h4>
                <p>
                  Oui, nous accompagnons toutes les paroisses et institutions catholiques, 
                  quelle que soit leur taille ou leur localisation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="faq-item"
              >
                <h4>Proposez-vous un accompagnement ?</h4>
                <p>
                  Absolument ! Nous formons vos équipes pour qu'elles puissent 
                  utiliser nos outils en autonomie.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="faq-item"
              >
                <h4>Quel est votre délai d'intervention ?</h4>
                <p>
                  Nous nous engageons à vous répondre sous 24h et à démarrer 
                  votre projet dans les meilleurs délais.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .contact-page {
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

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-12);
        }

        .contact-form-section h2,
        .contact-info-section h2 {
          margin-bottom: var(--space-4);
          color: var(--color-blue);
        }

        .form-description,
        .info-description {
          color: var(--color-blue);
          margin-bottom: var(--space-8);
          line-height: 1.6;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-4);
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-weight: 600;
          color: var(--color-blue-dark);
          margin-bottom: var(--space-2);
          font-size: var(--text-sm);
        }

        .form-input,
        .form-select,
        .form-textarea {
          padding: var(--space-3);
          border: 2px solid rgba(212, 175, 55, 0.2);
          border-radius: 8px;
          font-family: var(--font-text);
          font-size: var(--text-base);
          transition: var(--transition-fast);
          background: var(--color-white);
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--color-gold);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit {
          align-self: flex-start;
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .form-success {
          text-align: center;
          padding: var(--space-12);
          background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
          border-radius: 16px;
          border: 2px solid var(--color-gold-light);
        }

        .form-success svg {
          color: var(--color-gold);
          margin-bottom: var(--space-4);
        }

        .form-success h3 {
          color: var(--color-blue);
          margin-bottom: var(--space-4);
        }

        .form-success p {
          color: var(--color-blue);
          line-height: 1.6;
        }

        .contact-info-list {
          margin-bottom: var(--space-8);
        }

        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: var(--space-4);
          padding: var(--space-4);
          border-radius: 12px;
          margin-bottom: var(--space-4);
          transition: var(--transition-fast);
        }

        .contact-info-item:hover {
          background: rgba(212, 175, 55, 0.05);
        }

        .info-icon {
          color: var(--color-gold);
          flex-shrink: 0;
          margin-top: var(--space-1);
        }

        .info-title {
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--color-blue);
          margin-bottom: var(--space-1);
        }

        .info-value {
          color: var(--color-blue-dark);
          margin: 0;
        }

        .info-link {
          color: var(--color-gold);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .info-link:hover {
          color: var(--color-gold-dark);
          text-decoration: underline;
        }

        .contact-card {
          background: linear-gradient(135deg, var(--color-blue), var(--color-blue-light));
          color: var(--color-white);
          padding: var(--space-6);
          border-radius: 16px;
        }

        .contact-card h3 {
          color: var(--color-white);
          margin-bottom: var(--space-4);
        }

        .contact-benefits {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .contact-benefits li {
          margin-bottom: var(--space-3);
          color: rgba(255, 255, 255, 0.9);
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

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-6);
        }

        .faq-item {
          background: var(--color-white);
          padding: var(--space-6);
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.1);
        }

        .faq-item h4 {
          color: var(--color-blue);
          margin-bottom: var(--space-3);
          font-size: var(--text-lg);
        }

        .faq-item p {
          color: var(--color-blue);
          line-height: 1.6;
        }

        .btn-large {
          padding: var(--space-4) var(--space-8);
          font-size: var(--text-lg);
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

export default Contact
