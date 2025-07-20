# Guide SEO React 19 - Bonnes Pratiques 2024

## API Native React 19 pour le SEO

React 19 introduit une API native pour la gestion des métadonnées sans bibliothèques externes comme Helmet.

### 1. Métadonnées de Base

```jsx
function PageComponent() {
  return (
    <>
      <title>Titre de la page (max 50 caractères)</title>
      <meta name="description" content="Description de 140 caractères maximum pour le référencement optimal" />
      <meta name="keywords" content="mot-clé1, mot-clé2, mot-clé3" />
      <meta name="author" content="Avènement" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://avenement.com/page" />
    </>
  );
}
```

### 2. Open Graph (Réseaux Sociaux)

```jsx
<meta property="og:title" content="Titre pour réseaux sociaux" />
<meta property="og:description" content="Description pour partage social" />
<meta property="og:image" content="https://avenement.com/og-image.jpg" />
<meta property="og:url" content="https://avenement.com/page" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Avènement" />
```

### 3. Twitter Cards

```jsx
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Titre Twitter" />
<meta name="twitter:description" content="Description Twitter" />
<meta name="twitter:image" content="https://avenement.com/twitter-image.jpg" />
```

### 4. Métadonnées Techniques

```jsx
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="theme-color" content="#1e40af" />
<link rel="icon" href="/favicon.ico" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

## Règles SEO Spécifiques

### Titres et Descriptions
- **Meta title**: 50 caractères maximum
- **Meta description**: 140 caractères maximum
- **H1**: Un seul par page, contenant le mot-clé principal
- **H2-H6**: Structure hiérarchique logique

### Mots-clés
- **Minimum 10 mots-clés par page**
- **Répétition minimum 5 fois** par mot-clé principal
- **Densité**: 2-3% du contenu total
- **Placement**: Titre, H1, premiers paragraphes, alt text

### Structure URL
- URLs courtes et descriptives
- Utilisation de tirets (-)
- Pas de caractères spéciaux
- Structure logique (/services/diffusion-evenements)

### Images et Médias
- Alt text descriptif avec mots-clés
- Formats optimisés (WebP, AVIF)
- Tailles adaptatives (responsive)
- Lazy loading pour les performances

### Performance SEO
- Core Web Vitals optimisés
- Temps de chargement < 3 secondes
- Mobile-first design
- HTTPS obligatoire

## Implémentation React 19

### Composant SEO Réutilisable

```jsx
interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

function SEOHead({ title, description, keywords, ogImage, canonical }: SEOProps) {
  const fullTitle = `${title} | Avènement - Agence Communication Catholique`;
  const currentUrl = canonical || window.location.href;
  
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={currentUrl} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage || '/og-default.jpg'} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Avènement" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || '/twitter-default.jpg'} />
    </>
  );
}
```

### Métadonnées Dynamiques

```jsx
function DynamicSEO({ pageData }: { pageData: PageData }) {
  useEffect(() => {
    // Mise à jour dynamique si nécessaire
    document.title = pageData.title;
  }, [pageData]);

  return <SEOHead {...pageData.seo} />;
}
```

## Checklist SEO par Page

- [ ] Meta title unique (≤ 50 caractères)
- [ ] Meta description unique (≤ 140 caractères)
- [ ] 10+ mots-clés intégrés naturellement
- [ ] H1 unique avec mot-clé principal
- [ ] Structure H2-H6 logique
- [ ] Images avec alt text optimisé
- [ ] URL canonique définie
- [ ] Open Graph complet
- [ ] Schema.org markup (si applicable)
- [ ] Temps de chargement optimisé
