export const content = {
  es: {
    meta: {
      title: 'Martin Henderson | CV React',
    },
    nav: {
      label: 'Ir a la sección',
      items: [
        { href: '#perfil', text: 'Perfil' },
        { href: '#proyectos', text: 'Proyectos' },
        { href: '#skills', text: 'Skills' },
        { href: '#experiencia', text: 'Experiencia' },
        { href: '#contacto', text: 'Contacto' },
      ],
    },
    languageSelector: {
      label: 'Idioma',
      spanish: 'ES',
      english: 'EN',
    },
    hero: {
      eyebrow: 'CV bilingüe · React frontend',
      name: 'Martin Henderson',
      role: 'Traductor jurídico-financiero en transición hacia Desarrollo Web, Data Engineering e IA',
      summary:
        'Traductor jurídico-financiero con una base sólida en comunicación especializada, análisis de documentos y control de calidad, ahora orientado al desarrollo web, automatización con Python, bases de datos y herramientas de IA aplicadas a flujos documentales.',
      location: 'Madrid, España · Remoto / híbrido',
      ctaPrimary: 'Contactar',
      ctaSecondary: 'Ver proyectos',
      tags: ['React', 'JavaScript', 'Python', 'SQL', 'Node.js', 'IA aplicada', 'LegalTech'],
    },
    profile: {
      id: 'perfil',
      title: 'Perfil de transición',
      paragraphs: [
        'Mi trayectoria combina más de una década de trabajo autónomo de alta responsabilidad en traducción jurídica y financiera con una formación reciente y práctica en desarrollo web, Python, SQL, Node.js, React y tecnologías de datos.',
        'Estoy especialmente interesado en productos donde se cruzan lenguaje, automatización, documentos complejos, datos y modelos de IA: herramientas internas, sistemas de QA, plataformas LegalTech, flujos de traducción asistida y aplicaciones web orientadas a datos.',
      ],
      highlights: [
        {
          title: 'Dominio documental',
          text: 'Experiencia con contratos, litigios, sociedades, M&A, informes financieros, comunicaciones regulatorias y documentación institucional.',
        },
        {
          title: 'Mentalidad de producto',
          text: 'Capacidad para convertir procesos manuales repetitivos en flujos más claros, comprobables y automatizables.',
        },
        {
          title: 'Perfil híbrido',
          text: 'Puente entre usuarios de negocio, especialistas jurídicos/financieros y equipos técnicos que necesitan entender el contenido real de los documentos.',
        },
      ],
    },
    projects: {
      id: 'proyectos',
      title: 'Proyectos y líneas de aprendizaje',
      intro:
        'Selección orientada a mostrar la transición desde servicios lingüísticos hacia desarrollo web, datos e IA.',
      items: [
        {
          title: 'JASPA · Editor documental con segmentos',
          status: 'Concepto / proyecto personal',
          text: 'Idea de aplicación full-stack para traducir documentos completos con contexto de LLM y después revisarlos por segmentos, al estilo de herramientas CAT como Trados o memoQ.',
          tech: ['React', 'Node.js', 'APIs LLM', 'QA lingüístico'],
        },
        {
          title: 'Automatización para traducción y QA',
          status: 'Flujos propios',
          text: 'Scripts y utilidades para limpieza de datos, preparación JSONL, revisión terminológica, búsqueda por patrones y reducción de tareas manuales en documentos bilingües.',
          tech: ['Python', 'Regex', 'JSONL', 'Excel', 'QA'],
        },
        {
          title: 'Prácticas web full-stack',
          status: 'Formación técnica',
          text: 'Ejercicios con interfaces React, rutas Express, APIs REST, persistencia en JSON, consultas SQL y bases de datos orientadas a proyectos de aprendizaje.',
          tech: ['React', 'Express', 'MySQL', 'MongoDB', 'Vite'],
        },
      ],
    },
    skills: {
      id: 'skills',
      title: 'Competencias técnicas y de dominio',
      groups: [
        {
          title: 'Frontend',
          items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Bootstrap'],
        },
        {
          title: 'Backend y datos',
          items: ['Node.js', 'Express.js', 'SQL', 'MySQL', 'MongoDB', 'APIs REST'],
        },
        {
          title: 'Python e IA',
          items: ['Python scripting', 'Automatización', 'Regex', 'JSONL', 'Prompt engineering', 'Flujos con LLMs'],
        },
        {
          title: 'Dominio profesional',
          items: ['Legal-financiero', 'Contratos', 'M&A', 'Regulación', 'QA lingüístico', 'Documentación compleja'],
        },
      ],
      barsTitle: 'Foco actual',
      bars: [
        { label: 'Desarrollo frontend con React', value: 78 },
        { label: 'APIs, Node.js y Express', value: 68 },
        { label: 'SQL y modelado básico de datos', value: 65 },
        { label: 'Python para automatización', value: 72 },
        { label: 'Experiencia jurídico-financiera', value: 95 },
      ],
    },
    experience: {
      id: 'experiencia',
      title: 'Experiencia profesional',
      items: [
        {
          role: 'Traductor jurídico-financiero autónomo',
          company: 'LegFin Translations / Martin Henderson',
          period: 'Diciembre 2010 - actualidad',
          text: 'Servicios especializados de traducción español-inglés para documentos jurídicos, financieros, empresariales e institucionales. Trabajo con guías de estilo, terminología sensible, plazos exigentes y documentación de alto valor.',
        },
        {
          role: 'Traductor sénior y responsable del departamento de traducción',
          company: 'Linklaters S.L.P., Madrid',
          period: 'Julio 2006 - diciembre 2010',
          text: 'Traducción para áreas como Mercantil, Litigios, M&A, IP, Protección de Datos, Competencia, Laboral e Inmobiliario. Coordinación de flujos de traducción en un entorno jurídico internacional.',
        },
        {
          role: 'Traductor y analista de prensa financiera',
          company: 'Grupo Albion, Madrid',
          period: 'Diciembre 2005 - julio 2006',
          text: 'Traducción de comunicaciones corporativas y elaboración de resúmenes en inglés de prensa financiera española para clientes internacionales.',
        },
        {
          role: 'Traductor y diseñador de presentaciones',
          company: 'EuroPraxis Consulting, Madrid',
          period: 'Diciembre 2004 - diciembre 2005',
          text: 'Traducción y maquetación de presentaciones profesionales para consultores y clientes corporativos.',
        },
      ],
    },
    education: {
      id: 'formacion',
      title: 'Formación y certificaciones',
      items: [
        'Desarrollo de Aplicaciones con Tecnologías Web (IFCD0210), Certificado de Profesionalidad Nivel 3 · Mars Digital, Madrid · 2026',
        'Meta Full Stack Developer Professional Certificate · Coursera · 2026',
        'Python 3 Programming Specialization · University of Michigan · 2026',
        'Crash Course on Python · Google · 2025',
        'Prompt Engineering for ChatGPT · Vanderbilt University · 2024',
        'Diploma en Traducción (DipTrans), Español a Inglés, Nivel 7 UK EQF · CIOL · 2023',
        'CELTA · International House Madrid · 2025',
        'Licenciatura en Lingüística y Lenguas Modernas, Español e Italiano · University of Essex · 1999-2003',
      ],
    },
    languages: {
      title: 'Idiomas',
      items: ['Inglés nativo', 'Español C2', 'Italiano básico', 'Ruso básico'],
    },
    contact: {
      id: 'contacto',
      title: 'Contacto',
      intro:
        'Disponible para oportunidades junior/trainee en desarrollo web, data engineering, automatización documental, LegalTech y herramientas de IA aplicada.',
      links: [
        { label: 'Email', value: 'martinhenderson@legfintranslations.com', href: 'mailto:martinhenderson@legfintranslations.com' },
        { label: 'Web', value: 'www.martin-henderson.com', href: 'https://www.martin-henderson.com' },
        { label: 'LinkedIn', value: 'linkedin.com/in/martin-henderson-diptrans-mcil-cl-b65a4216', href: 'https://www.linkedin.com/in/martin-henderson-diptrans-mcil-cl-b65a4216' },
        { label: 'CIOL', value: 'Perfil de miembro', href: 'https://www.ciol.org.uk/member-check/profile/70082/23394' },
      ],
    },
    footer: {
      text: 'Diseñado por Martin Henderson - Todos los derechos reservados.',
    },
  },
  en: {
    meta: {
      title: 'Martin Henderson | React CV',
    },
    nav: {
      label: 'Jump to section',
      items: [
        { href: '#profile', text: 'Profile' },
        { href: '#projects', text: 'Projects' },
        { href: '#skills', text: 'Skills' },
        { href: '#experience', text: 'Experience' },
        { href: '#contact', text: 'Contact' },
      ],
    },
    languageSelector: {
      label: 'Language',
      spanish: 'ES',
      english: 'EN',
    },
    hero: {
      eyebrow: 'Bilingual CV · React frontend',
      name: 'Martin Henderson',
      role: 'Legal-financial translator transitioning into Web Development, Data Engineering and AI',
      summary:
        'Legal-financial translator with strong experience in specialist communication, document analysis and quality control, now focused on web development, Python automation, databases and AI tools for document-heavy workflows.',
      location: 'Madrid, Spain · Remote / hybrid',
      ctaPrimary: 'Contact me',
      ctaSecondary: 'View projects',
      tags: ['React', 'JavaScript', 'Python', 'SQL', 'Node.js', 'Applied AI', 'LegalTech'],
    },
    profile: {
      id: 'profile',
      title: 'Transition profile',
      paragraphs: [
        'My background combines over a decade of high-responsibility freelance legal and financial translation with recent hands-on training in web development, Python, SQL, Node.js, React and data-oriented technologies.',
        'I am especially interested in products where language, automation, complex documents, data and AI models intersect: internal tools, QA systems, LegalTech platforms, translation workflows and data-driven web applications.',
      ],
      highlights: [
        {
          title: 'Document expertise',
          text: 'Experience with contracts, litigation, corporate law, M&A, financial reports, regulatory communications and institutional documentation.',
        },
        {
          title: 'Product mindset',
          text: 'Ability to turn repetitive manual processes into clearer, testable and more automatable workflows.',
        },
        {
          title: 'Hybrid profile',
          text: 'A bridge between business users, legal/financial specialists and technical teams that need to understand what the documents actually say.',
        },
      ],
    },
    projects: {
      id: 'projects',
      title: 'Projects and learning tracks',
      intro:
        'A selection designed to show the transition from language services into web development, data and AI.',
      items: [
        {
          title: 'JASPA · Segment-based document editor',
          status: 'Concept / personal project',
          text: 'A full-stack app idea for translating whole documents with LLM context and then reviewing them segment by segment, similar to CAT tools such as Trados or memoQ.',
          tech: ['React', 'Node.js', 'LLM APIs', 'Linguistic QA'],
        },
        {
          title: 'Translation and QA automation',
          status: 'Personal workflows',
          text: 'Scripts and utilities for data cleaning, JSONL preparation, terminology checks, pattern searching and reducing manual work in bilingual documents.',
          tech: ['Python', 'Regex', 'JSONL', 'Excel', 'QA'],
        },
        {
          title: 'Full-stack web practice',
          status: 'Technical training',
          text: 'Exercises with React interfaces, Express routes, REST APIs, JSON persistence, SQL queries and databases built around learning projects.',
          tech: ['React', 'Express', 'MySQL', 'MongoDB', 'Vite'],
        },
      ],
    },
    skills: {
      id: 'skills',
      title: 'Technical and domain skills',
      groups: [
        {
          title: 'Frontend',
          items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Bootstrap'],
        },
        {
          title: 'Backend and data',
          items: ['Node.js', 'Express.js', 'SQL', 'MySQL', 'MongoDB', 'REST APIs'],
        },
        {
          title: 'Python and AI',
          items: ['Python scripting', 'Automation', 'Regex', 'JSONL', 'Prompt engineering', 'LLM workflows'],
        },
        {
          title: 'Professional domain',
          items: ['Legal-financial', 'Contracts', 'M&A', 'Regulation', 'Linguistic QA', 'Complex documentation'],
        },
      ],
      barsTitle: 'Current focus',
      bars: [
        { label: 'Frontend development with React', value: 78 },
        { label: 'APIs, Node.js and Express', value: 68 },
        { label: 'SQL and basic data modelling', value: 65 },
        { label: 'Python for automation', value: 72 },
        { label: 'Legal-financial expertise', value: 95 },
      ],
    },
    experience: {
      id: 'experience',
      title: 'Professional experience',
      items: [
        {
          role: 'Freelance legal-financial translator',
          company: 'LegFin Translations / Martin Henderson',
          period: 'December 2010 - present',
          text: 'Specialist Spanish-to-English translation for legal, financial, business and institutional documents. Work with style guides, sensitive terminology, demanding deadlines and high-value documentation.',
        },
        {
          role: 'Senior translator and Head of Translation Department',
          company: 'Linklaters S.L.P., Madrid',
          period: 'July 2006 - December 2010',
          text: 'Translation for Corporate, Litigation, M&A, IP, Data Protection, Competition, Employment and Real Estate teams. Coordination of translation workflows in an international legal environment.',
        },
        {
          role: 'Translator and financial press analyst',
          company: 'Grupo Albion, Madrid',
          period: 'December 2005 - July 2006',
          text: 'Translation of corporate communications and preparation of English summaries of Spanish financial press for international clients.',
        },
        {
          role: 'Translator and presentation designer',
          company: 'EuroPraxis Consulting, Madrid',
          period: 'December 2004 - December 2005',
          text: 'Translation and layout of professional PowerPoint presentations for consultants and corporate clients.',
        },
      ],
    },
    education: {
      id: 'education',
      title: 'Education and certifications',
      items: [
        'Web Application Development Technologies (IFCD0210), Level 3 Professional Certificate · Mars Digital, Madrid · 2026',
        'Meta Full Stack Developer Professional Certificate · Coursera · 2026',
        'Python 3 Programming Specialization · University of Michigan · 2026',
        'Crash Course on Python · Google · 2025',
        'Prompt Engineering for ChatGPT · Vanderbilt University · 2024',
        'Diploma in Translation (DipTrans), Spanish to English, UK EQF Level 7 · CIOL · 2023',
        'CELTA · International House Madrid · 2025',
        'BA in Linguistics and Modern Languages, Spanish and Italian · University of Essex · 1999-2003',
      ],
    },
    languages: {
      title: 'Languages',
      items: ['English native', 'Spanish C2', 'Basic Italian', 'Basic Russian'],
    },
    contact: {
      id: 'contact',
      title: 'Contact',
      intro:
        'Available for junior/trainee opportunities in web development, data engineering, document automation, LegalTech and applied AI tools.',
      links: [
        { label: 'Email', value: 'martinhenderson@legfintranslations.com', href: 'mailto:martinhenderson@legfintranslations.com' },
        { label: 'Website', value: 'www.martin-henderson.com', href: 'https://www.martin-henderson.com' },
        { label: 'LinkedIn', value: 'linkedin.com/in/martin-henderson-diptrans-mcil-cl-b65a4216', href: 'https://www.linkedin.com/in/martin-henderson-diptrans-mcil-cl-b65a4216' },
        { label: 'CIOL', value: 'Member profile', href: 'https://www.ciol.org.uk/member-check/profile/70082/23394' },
      ],
    },
    footer: {
      text: 'Designed by Martin Henderson - All rights reserved.',
    },
  },
};
