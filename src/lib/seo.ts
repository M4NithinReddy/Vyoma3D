import { siteConfig } from '../config/site.config';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export const generateSEO = ({
  title,
  description = siteConfig.description,
  image = '/og-image.jpg',
  url = '',
  type = 'website'
}: SEOProps = {}) => {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} - ${siteConfig.tagline}`;
  const fullUrl = `https://vyoma3d.com${url}`;

  return {
    title: fullTitle,
    description,
    meta: [
      { name: 'description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: fullUrl },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ]
  };
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  description: siteConfig.description,
  url: 'https://vyoma3d.com',
  logo: siteConfig.logo,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    contactType: 'Customer Service'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
    addressLocality: siteConfig.contact.address.city,
    addressRegion: siteConfig.contact.address.state,
    postalCode: siteConfig.contact.address.zip,
    addressCountry: siteConfig.contact.address.country
  },
  sameAs: Object.values(siteConfig.social)
};
