export const siteConfig = {
  name: "VYOMA3D",
  tagline: "Engineering Innovation Through Advanced 3D Technology",
  description: "Leading provider of CAD/CAE services, 3D printing solutions, and engineering training.",

  contact: {
    email: "info@vyoma3d.com",
    phone: "+1 (555) 123-4567",
    whatsapp: "+15551234567",
    address: {
      line1: "123 Innovation Drive",
      line2: "Tech Park, Suite 400",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
      country: "USA"
    }
  },

  social: {
    linkedin: "https://linkedin.com/company/vyoma3d",
    twitter: "https://twitter.com/vyoma3d",
    youtube: "https://youtube.com/@vyoma3d",
    instagram: "https://instagram.com/vyoma3d"
  },

  nav: {
    main: [
      {
        label: "Services",
        href: "/services",
        megaMenu: [
          { label: "CAD Services", href: "/services/cad", desc: "3D design & reverse engineering" },
          { label: "CAE Services", href: "/services/cae", desc: "FEA, CFD & simulation" },
          { label: "3D Printing", href: "/services/3d-printing", desc: "SLA, FDM, DLP printing" },
          { label: "Consulting", href: "/services/specialized", desc: "Digital twin & Industry 4.0" }
        ]
      },
      {
        label: "Industries",
        href: "/industries",
        megaMenu: [
          { label: "Aerospace & Defense", href: "/industries/aerospace-defense" },
          { label: "Automotive", href: "/industries/automotive" },
          { label: "Healthcare", href: "/industries/healthcare" },
          { label: "Industrial Manufacturing", href: "/industries/industrial-manufacturing" },
          { label: "Research & Development", href: "/industries/research-development" }
        ]
      },
      { label: "Products", href: "/products" },
      {
        label: "Training",
        href: "/training",
        megaMenu: [
          { label: "Training Programs", href: "/training" },
          { label: "Workshops", href: "/workshops" }
        ]
      },
      {
        label: "Resources",
        href: "/blog",
        megaMenu: [
          { label: "Blog", href: "/blog" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Gallery", href: "/gallery" }
        ]
      }
    ]
  }
};
