import { useEffect } from 'react';
import { siteConfig } from '../config/site.config';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  jsonLd?: object;
}

export const SEO = ({ title, description, image, url, jsonLd }: SEOProps) => {
  useEffect(() => {
    const constantTitle = siteConfig.name;
    document.title = constantTitle;

    const metaTags = [
      { name: 'description', content: description },
      { property: 'og:title', content: constantTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { name: 'twitter:title', content: constantTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ];

    metaTags.forEach(({ name, property, content }) => {
      if (!content) return;

      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement('meta');
        if (name) meta.name = name;
        if (property) meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }

      meta.content = content;
    });

    if (jsonLd) {
      let script = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
      if (!(script instanceof HTMLScriptElement)) {
        const s = document.createElement('script');
        s.setAttribute('type', 'application/ld+json');
        document.head.appendChild(s);
        script = s as HTMLScriptElement;
      }
      if (script) {
        script.textContent = JSON.stringify(jsonLd);
      }
    }
  }, [title, description, image, url, jsonLd]);

  return null;
};
