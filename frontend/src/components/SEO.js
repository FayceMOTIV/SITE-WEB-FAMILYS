import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, image, type = 'website' }) => {
  const location = useLocation();
  const siteUrl = window.location.origin;
  const currentUrl = siteUrl + location.pathname;

  const defaultTitle = "LE FAMILY'S - Restaurant Burgers & Tacos à Bourg-en-Bresse";
  const defaultDescription = "Restaurant fast food premium à Bourg-en-Bresse. Burgers artisanaux, tacos savoureux, desserts gourmands. Commandez en ligne ou sur Uber Eats. Note Google 4.3★";
  const defaultImage = "/images/logo-familys.png";

  const metaTitle = title || defaultTitle;
  const metaDescription = description || defaultDescription;
  const metaImage = image || defaultImage;

  useEffect(() => {
    // Mettre à jour le titre
    document.title = metaTitle;

    // Fonction pour mettre à jour ou créer une meta tag
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Meta tags standards
    updateMetaTag('description', metaDescription);
    updateMetaTag('keywords', 'restaurant Bourg-en-Bresse, burgers, tacos, fast food, livraison, Uber Eats, Family\'s, burgers artisanaux');

    // Open Graph tags
    updateMetaTag('og:title', metaTitle, true);
    updateMetaTag('og:description', metaDescription, true);
    updateMetaTag('og:image', metaImage, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', "LE FAMILY'S", true);
    updateMetaTag('og:locale', 'fr_FR', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', metaTitle);
    updateMetaTag('twitter:description', metaDescription);
    updateMetaTag('twitter:image', metaImage);

    // JSON-LD Schema pour Restaurant
    const schemaScript = document.getElementById('schema-restaurant');
    if (schemaScript) {
      schemaScript.remove();
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "LE FAMILY'S",
      "image": metaImage,
      "description": metaDescription,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "59 Rue du 14 Juillet 1789",
        "addressLocality": "Bourg-en-Bresse",
        "postalCode": "01000",
        "addressCountry": "FR"
      },
      "telephone": "04 74 52 60 82",
      "email": "lefamilys01@gmail.com",
      "url": siteUrl,
      "servesCuisine": "Fast Food, Burgers, Tacos",
      "priceRange": "€€",
      "acceptsReservations": false,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.3",
        "bestRating": "5",
        "ratingCount": "100"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "11:30",
          "closes": "00:00"
        }
      ],
      "menu": currentUrl + "/menu",
      "hasMenu": currentUrl + "/menu"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'schema-restaurant';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

  }, [metaTitle, metaDescription, metaImage, currentUrl, type]);

  return null;
};

export default SEO;
