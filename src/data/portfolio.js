import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiPostgresql, SiTailwindcss, SiNextdotjs, SiPrisma, SiVercel, SiHtml5, SiCss3, SiRust } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

/**
 * Projects data - Real projects built by Kaleb Martinez
 */
export const projects = [
  {
    id: 1,
    title: {
      en: 'Nisha Nutrition - Professional Nutrition Website',
      es: 'Nisha Nutrition - Sitio Web Profesional de Nutrición'
    },
    shortDescription: {
      en: 'Full-stack nutrition and wellness platform with CMS',
      es: 'Plataforma completa de nutrición y bienestar con CMS'
    },
    clientImpact: {
      en: 'Created a professional online presence for a licensed nutritionist, enabling 24/7 service information, streamlined WhatsApp appointment booking, and scalable content management for recipes, products, and testimonials.',
      es: 'Creó una presencia en línea profesional para una nutricionista licenciada, permitiendo información de servicios 24/7, reservas simplificadas por WhatsApp y gestión escalable de contenido para recetas, productos y testimonios.'
    },
    longDescription: {
      en: 'A modern, full-stack nutrition website for LCDA. Nisha L Rivera Negrón featuring a complete CMS, e-commerce functionality, recipe management with nutritional info, client testimonials, multi-location office management with Google Maps integration, and WhatsApp booking. Achieved 95+ Lighthouse performance score and WCAG AA accessibility compliance.',
      es: 'Un sitio web moderno y completo de nutrición para LCDA. Nisha L Rivera Negrón con CMS completo, funcionalidad de comercio electrónico, gestión de recetas con información nutricional, testimonios de clientes, gestión de múltiples oficinas con integración de Google Maps y reservas por WhatsApp. Logró puntuación de rendimiento Lighthouse 95+ y cumplimiento de accesibilidad WCAG AA.'
    },
    image: '/projects/nisha-nutrition.jpg',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    techIcons: [SiNextdotjs, SiTypescript, SiPrisma, SiPostgresql, SiTailwindcss, SiVercel],
    category: ['Web Apps', 'Full-Stack', 'CMS', 'E-commerce'],
    liveUrl: 'https://nishanutrition.com',
    githubUrl: null, // Private repository
    featured: true,
    highlights: {
      en: [
        'Full-stack development from database to deployment',
        'Custom CMS for recipes, products, and testimonials',
        'WhatsApp integration for appointment booking',
        'Multi-location management with Google Maps',
        'Performance: 95+ Lighthouse score',
        'SEO optimized for local search in Puerto Rico',
        'Accessibility compliant (WCAG AA)',
        'Secure authentication and admin panel'
      ],
      es: [
        'Desarrollo full-stack desde base de datos hasta despliegue',
        'CMS personalizado para recetas, productos y testimonios',
        'Integración de WhatsApp para reservas de citas',
        'Gestión de múltiples ubicaciones con Google Maps',
        'Rendimiento: puntuación Lighthouse 95+',
        'Optimizado SEO para búsqueda local en Puerto Rico',
        'Cumplimiento de accesibilidad (WCAG AA)',
        'Autenticación segura y panel de administración'
      ]
    },
    metrics: {
      en: {
        performance: 'Lighthouse 95+',
        timeline: '5 weeks',
        type: 'Freelance/Contract',
        location: 'Puerto Rico'
      },
      es: {
        performance: 'Lighthouse 95+',
        timeline: '5 semanas',
        type: 'Freelance/Contrato',
        location: 'Puerto Rico'
      }
    }
  },
];

/**
 * Skills organized by category - Based on UPR Ponce coursework and real experience
 */
export const skills = {
  languages: [
    { name: 'JavaScript', icon: SiJavascript, level: { en: 'Advanced', es: 'Avanzado' }, color: 'yellow' },
    { name: 'TypeScript', icon: SiTypescript, level: { en: 'Intermediate', es: 'Intermedio' }, color: 'blue' },
    { name: 'Rust', icon: SiRust, level: { en: 'Intermediate', es: 'Intermedio' }, color: 'orange' },
    { name: 'SQL', icon: FaDatabase, level: { en: 'Advanced', es: 'Avanzado' }, color: 'purple' },
    { name: 'HTML/CSS', icon: SiHtml5, level: { en: 'Advanced', es: 'Avanzado' }, color: 'warning' },
    { name: { en: 'Java (Coursework)', es: 'Java (Cursos)' }, icon: FaJava, level: { en: 'Beginner', es: 'Principiante' }, color: 'warning' },
  ],
  frontend: [
    { name: 'React', icon: FaReact, level: { en: 'Advanced', es: 'Avanzado' }, color: 'primary' },
    { name: 'Next.js', icon: SiNextdotjs, level: { en: 'Intermediate', es: 'Intermedio' }, color: 'default' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: { en: 'Advanced', es: 'Avanzado' }, color: 'primary' },
    { name: { en: 'Responsive Design', es: 'Diseño Responsivo' }, level: { en: 'Advanced', es: 'Avanzado' }, color: 'default' },
  ],
  backend: [
    { name: 'Node.js', icon: FaNodeJs, level: { en: 'Intermediate', es: 'Intermedio' }, color: 'success' },
    { name: 'Prisma ORM', icon: SiPrisma, level: { en: 'Intermediate', es: 'Intermedio' }, color: 'default' },
    { name: 'REST APIs', level: { en: 'Intermediate', es: 'Intermedio' }, color: 'primary' },
  ],
  databases: [
    { name: 'PostgreSQL', icon: SiPostgresql, level: { en: 'Advanced', es: 'Avanzado' }, color: 'blue' },
    { name: { en: 'Database Design', es: 'Diseño de Bases de Datos' }, icon: FaDatabase, level: { en: 'Advanced', es: 'Avanzado' }, color: 'purple' },
    { name: { en: 'ERD Modeling', es: 'Modelado ERD' }, level: { en: 'Advanced', es: 'Avanzado' }, color: 'blue' },
  ],
  tools: [
    { name: 'Git/GitHub', icon: FaGitAlt, level: { en: 'Advanced', es: 'Avanzado' }, color: 'warning' },
    { name: 'Vercel', icon: SiVercel, level: { en: 'Intermediate', es: 'Intermedio' }, color: 'default' },
    { name: 'Azure', icon: VscAzure, level: { en: 'Intermediate', es: 'Intermedio' }, color: 'blue' },

  ],
};

/**
 * Professional Experience
 */
export const experience = [
  {
    id: 1,
    company: 'CIRACET Corp.',
    position: {
      en: 'IT Infrastructure Intern',
      es: 'Interno de Infraestructura de TI'
    },
    location: {
      en: 'Healthcare Innovation Center (HIC), Puerto Rico',
      es: 'Healthcare Innovation Center (HIC), Puerto Rico'
    },
    duration: {
      en: '90 hours',
      es: '90 horas'
    },
    type: {
      en: 'Internship',
      es: 'Internado'
    },
    description: {
      en: 'Completed internship through strategic alliance between CIRACET Corp. and Universidad de Puerto Rico - Ponce. Utilized Power Apps and Microsoft Entra ID to manage SharePoint and the internal CIRACET system, while also supporting IT infrastructure and systems.',
      es: 'Completé internado a través de alianza estratégica entre CIRACET Corp. y Universidad de Puerto Rico - Ponce. Utilicé Power Apps y Microsoft Entra ID para administrar SharePoint y el sistema interno de CIRACET, además de apoyar en infraestructura de TI.'
    },
    responsibilities: {
      en: [
        'IT Infrastructure Management',
        'Systems Support & Troubleshooting',
        'Cybersecurity Implementation',
        'Technology Systems Support'
      ],
      es: [
        'Gestión de Infraestructura de TI',
        'Soporte y Resolución de Sistemas',
        'Implementación de Ciberseguridad',
        'Soporte de Sistemas Tecnológicos'
      ]
    },
    skills: ['IT Infrastructure', 'Systems Support', 'Cybersecurity', 'Technology Systems'],
    featured: true
  }
];

/**
 * Education information
 */
export const education = {
  institution: {
    en: 'Universidad de Puerto Rico - Ponce',
    es: 'Universidad de Puerto Rico - Ponce'
  },
  degree: {
    en: 'Bachelor of Science in Computer Information Systems',
    es: 'Bachillerato en Ciencias en Sistemas de Información Computacional'
  },
  abbreviation: 'B.S. SICI',
  graduation: {
    en: 'Expected May 2026',
    es: 'Graduación esperada Mayo 2026'
  },
  location: {
    en: 'Ponce, Puerto Rico',
    es: 'Ponce, Puerto Rico'
  },
  status: {
    en: 'Senior Year',
    es: 'Último Año'
  },
  coursework: {
    programming: {
      en: [
        'Algorithms & Program Development I & II',
        'Data Structures',
        'Web Applications Programming I',
        'Java Programming',
        'Mobile Device Programming'
      ],
      es: [
        'Algoritmos y Desarrollo de Programas I & II',
        'Estructuras de Datos',
        'Programación de Aplicaciones Web I',
        'Programación en Java',
        'Programación de Dispositivos Móviles'
      ]
    },
    systems: {
      en: [
        'Systems Analysis & Design (Basic & Advanced)',
        'Database Development',
        'Data Communications',
        'Fundamentals of Operating Systems',
        'Computer Statistics'
      ],
      es: [
        'Análisis y Diseño de Sistemas (Básico y Avanzado)',
        'Desarrollo de Bases de Datos',
        'Comunicaciones de Datos',
        'Fundamentos de Sistemas Operativos',
        'Estadística Computacional'
      ]
    },
    security: {
      en: [
        'Information Security',
        'Systems Audit & Control',
        'Computer Ethics',
        'Special Topics in Informatics'
      ],
      es: [
        'Seguridad de la Información',
        'Auditoría y Control de Sistemas',
        'Ética Computacional',
        'Temas Especiales en Informática'
      ]
    },
    business: {
      en: [
        'Administrative Theory',
        'Financial Management',
        'Marketing Principles',
        'Accounting I & II',
        'Commercial Statistics'
      ],
      es: [
        'Teoría Administrativa',
        'Gestión Financiera',
        'Principios de Mercadeo',
        'Contabilidad I & II',
        'Estadística Comercial'
      ]
    }
  }
};

/**
 * Professional Portfolio - Based on UPR Ponce SICI3016/SICI4998 Requirements
 */
export const professionalPortfolio = {
  generalInfo: {
    resume: {
      title: { en: 'Resume/CV', es: 'Resume' },
      description: {
        en: 'Comprehensive resume detailing education, technical skills, work experience, and professional accomplishments.',
        es: 'Documento profesional con educación, habilidades técnicas, experiencia laboral y logros académicos.'
      },
      file: '/resume.pdf',
      available: true
    },
    transcript: {
      title: { en: 'Credit Transcript', es: 'Transcripción de Créditos' },
      description: {
        en: 'Unofficial credit transcript detailing courses taken and grades obtained at UPR Ponce.',
        es: 'Transcripción de créditos no oficial detallando cursos tomados y notas obtenidas en UPR Ponce.'
      },
      file: '/transcript.pdf',
      available: true
    },
    biographicSketch: {
      title: { en: 'Biographic Sketch', es: 'Bosquejo Biográfico' },
      description: {
        en: 'Professional biography highlighting academic journey, key achievements, and career objectives in Computer Information Systems.',
        es: 'Biografía profesional destacando trayectoria académica, logros clave y objetivos profesionales en Sistemas de Información Computacional.'
      },
      content: {
        en: 'I was born in Ponce, Puerto Rico, and have lived in Santa Isabel my entire life. I am currently a senior Computer Information Systems student at the University of Puerto Rico in Ponce. Since beginning my university journey, I have built a strong foundation in programming and database design, excelling in modern web technologies like React and Next.js. I have successfully completed an internship at CIRACET Corp. and led web development projects. I envision myself working in the software development field, with a strong interest in specializing in Machine Learning.',
        es: 'Nací en Ponce, Puerto Rico, y he vivido toda mi vida en Santa Isabel. Actualmente soy estudiante de último año de Sistemas de Información Computacional en la Universidad de Puerto Rico en Ponce. Desde que comencé mi trayectoria universitaria, he logrado desarrollar una base sólida en programación y diseño de bases de datos, destacándome en tecnologías web modernas como React y Next.js. He completado exitosamente un internado en CIRACET Corp. y he liderado proyectos de desarrollo web. Me visualizo ejerciendo en el campo del desarrollo de software, con un marcado interés en especializarme en Machine Learning.'
      }
    }
  },
  studentLife: {
    title: { en: 'Student Life', es: 'Vida Estudiantil' },
    reflection: {
      title: { en: 'Reflection', es: 'Reflexión' },
      content: {
        en: 'When I started university, I felt a bit lost initially as I had enrolled in an engineering program that didn\'t resonate with me. I decided to switch to Information Systems, as I had always been skilled with computers from a young age. Throughout my university years, I faced moments of uncertainty until I realized that programming allowed me to create anything I envisioned. This discovery opened creative doors and drove me toward innovative solutions, providing the momentum I needed to persevere. Currently, I am expanding my knowledge in machine learning.',
        es: 'Desde que comencé la universidad al inicio estaba un poco perdido ya que había entrado por una ingeniería que no me gustaba y decidí cambiarme a sistemas de información ya que desde pequeño siempre fui diestro con las computadoras. Durante los años universitarios me encontré perdido muchas veces hasta que me di cuenta que programando podía crear lo que quisiera abriéndome puertas creativas e impulsándome a soluciones más creativas donde encontré un poco de impulso a seguir actualmente ando aprendiendo sobre machine learning.'
      }
    },
    activities: [
      {
        name: { en: 'Computer Information Systems Program', es: 'Programa de Sistemas de Información Computacional' },
        description: {
          en: 'Active participation in CIS coursework including advanced programming, database development, systems analysis, and information security.',
          es: 'Participación activa en cursos de SICI incluyendo programación avanzada, desarrollo de bases de datos, análisis de sistemas y seguridad de la información.'
        },
        category: 'academic'
      },
      {
        name: { en: 'Web Development Projects', es: 'Proyectos de Desarrollo Web' },
        description: {
          en: 'Leading real-world web development projects for clients, applying modern technologies learned in coursework to solve practical business problems.',
          es: 'Liderando proyectos de desarrollo web del mundo real para clientes, aplicando tecnologías modernas aprendidas en cursos para resolver problemas empresariales prácticos.'
        },
        category: 'technical'
      },
      {
        name: { en: 'Collaborative Learning', es: 'Aprendizaje Colaborativo' },
        description: {
          en: 'Engaging in peer collaboration and study groups to enhance understanding of complex technical concepts and programming challenges.',
          es: 'Participando en colaboración entre compañeros y grupos de estudio para mejorar la comprensión de conceptos técnicos complejos y desafíos de programación.'
        },
        category: 'academic'
      }
    ],
    specialProjects: {
      title: { en: 'Special Projects', es: 'Proyectos Especiales' },
      items: [
        {
          title: { en: 'Nisha Nutrition Platform', es: 'Plataforma Nisha Nutrition' },
          description: {
            en: 'Full-stack nutrition platform with CMS, e-commerce, and appointment booking. (Code is private)',
            es: 'Plataforma de nutrición full-stack con CMS, comercio electrónico y reserva de citas. (El código es privado)'
          },
          image: '/projects/nisha-nutrition.jpg',
          link: 'https://nishanutrition.com'
        }
      ]
    },
    competencies: {
      title: { en: 'Competencies', es: 'Competencias' },
      items: [
        {
          title: { en: 'Web Development', es: 'Desarrollo Web' },
          description: { en: 'Proficiency in modern web frameworks and tools.', es: 'Dominio de frameworks y herramientas web modernas.' }
        },
        {
          title: { en: 'Database Management', es: 'Gestión de Bases de Datos' },
          description: { en: 'Experience with SQL and NoSQL databases.', es: 'Experiencia con bases de datos SQL y NoSQL.' }
        }
      ]
    },
    acknowledgments: {
      title: { en: 'Acknowledgments', es: 'Agradecimientos' },
      intro: {
        en: 'I would like to express my deepest gratitude to all those who have been part of my academic formation and professional growth. Their support and guidance have been fundamental to achieving my goals.',
        es: 'Quisiera expresar mi más profundo agradecimiento a todos los que han formado parte de mi formación académica y crecimiento profesional. Su apoyo y guía han sido fundamentales para alcanzar mis metas.'
      },
      items: [
        {
          name: { en: 'Family', es: 'Familia' },
          relation: { en: 'Support System', es: 'Sistema de Apoyo' },
          message: {
            en: 'For their unconditional love, patience, and encouragement throughout this journey.',
            es: 'Por su amor incondicional, paciencia y aliento a lo largo de este camino.'
          }
        },
        {
          name: { en: 'Professors & Mentors', es: 'Profesores y Mentores' },
          relation: { en: 'Academic Guidance', es: 'Guía Académica' },
          message: {
            en: 'For sharing their knowledge and challenging me to become a better professional.',
            es: 'Por compartir su conocimiento y retarme a ser un mejor profesional.'
          }
        },
        {
          name: { en: 'Colleagues & Classmates', es: 'Colegas y Compañeros' },
          relation: { en: 'Collaboration', es: 'Colaboración' },
          message: {
            en: 'For the shared late nights, study sessions, and mutual support.',
            es: 'Por las noches de estudio compartidas y el apoyo mutuo.'
          }
        }
      ]
    }
  },
  professionalImprovement: {
    title: { en: 'Professional Improvement', es: 'Mejoramiento Profesional' },
    items: [
      {
        title: { en: 'IT Infrastructure Internship', es: 'Internado en Infraestructura de TI' },
        organization: 'CIRACET Corp. - Healthcare Innovation Center (HIC)',
        date: { en: '90 hours', es: '90 horas' },
        description: {
          en: 'Professional internship focused on IT infrastructure management, systems support, cybersecurity implementation, and technology systems support in a healthcare innovation environment.',
          es: 'Internado profesional enfocado en gestión de infraestructura de TI, soporte de sistemas, implementación de ciberseguridad y soporte de sistemas tecnológicos en un entorno de innovación en salud.'
        },
        type: 'internship',
        skills: ['IT Infrastructure', 'Systems Support', 'Cybersecurity', 'Healthcare Technology']
      },
      {
        title: { en: 'Full-Stack Web Development', es: 'Desarrollo Web Full-Stack' },
        organization: { en: 'Freelance Client Work', es: 'Trabajo Freelance para Clientes' },
        date: { en: '2024', es: '2024' },
        description: {
          en: 'Developed and deployed professional full-stack websites for real clients, gaining hands-on experience with modern web technologies, client communication, and project management.',
          es: 'Desarrollé e implementé sitios web full-stack profesionales para clientes reales, adquiriendo experiencia práctica con tecnologías web modernas, comunicación con clientes y gestión de proyectos.'
        },
        type: 'professional',
        skills: ['Next.js', 'TypeScript', 'PostgreSQL', 'Client Communication', 'Project Management']
      },
      {
        title: { en: 'Continuous Technology Learning', es: 'Aprendizaje Continuo de Tecnología' },
        organization: { en: 'Self-Directed Study', es: 'Estudio Autodirigido' },
        date: { en: 'Ongoing', es: 'Continuo' },
        description: {
          en: 'Actively learning emerging technologies and frameworks through online courses, documentation study, and practical project implementation to stay current with industry trends.',
          es: 'Aprendiendo activamente tecnologías y frameworks emergentes a través de cursos en línea, estudio de documentación e implementación práctica de proyectos para mantenerse actualizado con las tendencias de la industria.'
        },
        type: 'self-study',
        skills: ['Modern Web Frameworks', 'Cloud Platforms', 'Best Practices', 'Industry Trends']
      }
    ],
    books: {
      title: { en: 'Technical Books Read', es: 'Libros Técnicos Leídos' },
      items: [
        {
          title: 'The Rust Programming Language',
          author: 'Steve Klabnik & Carol Nichols',
          summary: {
            en: 'To understand system-level programming and memory safety without a garbage collector.',
            es: 'Para entender la programación a nivel de sistema y la seguridad de memoria sin un recolector de basura.'
          }
        },
        {
          title: 'Introduction to Java Programming and Data Structures',
          author: 'Y. Daniel Liang',
          summary: {
            en: 'To build a strong foundation in object-oriented programming and data structures.',
            es: 'Para construir una base sólida en programación orientada a objetos y estructuras de datos.'
          }
        },
        {
          title: 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow',
          author: 'Aurélien Géron',
          summary: {
            en: 'To master machine learning concepts and build intelligent systems using Python libraries.',
            es: 'Para dominar conceptos de aprendizaje automático y construir sistemas inteligentes usando librerías de Python.'
          }
        }
      ]
    }
  },
  diplomas: {
    title: { en: 'Diplomas', es: 'Diplomas' },
    items: [
      {
        title: { en: 'High School Diploma', es: 'Diploma de Escuela Superior' },
        institution: { en: 'Colegio Ntra. Sra. del Perpetuo Socorro', es: 'Colegio Ntra. Sra. del Perpetuo Socorro' },
        date: { en: 'May 28, 2021', es: '28 de mayo del 2021' },
        description: {
          en: 'High School graduation diploma.',
          es: 'Diploma de graduación de cuarto año de escuela superior.'
        },
        file: '/high-school-diploma.pdf',
        status: 'completed'
      },
      {
        title: { en: 'University Diploma', es: 'Diploma Universitario' },
        institution: { en: 'Universidad de Puerto Rico - Ponce', es: 'Universidad de Puerto Rico - Ponce' },
        date: { en: 'Expected May 2026', es: 'Esperado Mayo 2026' },
        description: {
          en: 'Bachelor of Science in Computer Information Systems (Pending Graduation).',
          es: 'Bachillerato en Ciencias en Sistemas de Información Computacional (Pendiente de Graduación).'
        },
        file: null,
        status: 'pending'
      }
    ]
  },
  professionalLife: {
    title: { en: 'Professional Life', es: 'Vida Profesional' },
    practice: {
      title: { en: 'Practice Data', es: 'Datos sobre la Práctica' },
      // Referencing the first experience item (CIRACET)
      experienceId: 1
    },
    documents: [
      {
        id: 'hours',
        title: { en: 'Hours Sheet', es: 'Hoja de Horas Trabajadas' },
        description: { en: 'Signed record of practice hours.', es: 'Registro firmado de horas de práctica.' },
        file: '/hours-report.pdf',
        status: 'completed'
      },
      {
        id: 'evaluation-initial',
        title: { en: 'Initial Evaluation', es: 'Evaluación Inicial' },
        description: { en: 'Supervisor initial evaluation.', es: 'Evaluación inicial del supervisor.' },
        file: '/evaluation-initial.pdf',
        status: 'completed'
      },
      {
        id: 'evaluation-final',
        title: { en: 'Final Evaluation', es: 'Evaluación Final' },
        description: { en: 'Supervisor final evaluation.', es: 'Evaluación final del supervisor.' },
        file: '/evaluation-final.pdf',
        status: 'completed'
      },
      {
        id: 'recommendations',
        title: { en: 'Recommendation Letter', es: 'Carta de Recomendación' },
        description: { en: 'Letter from Santiago Lazo.', es: 'Carta de Santiago Lazo.' },
        file: '/recommendation-santiago-lazo.pdf',
        status: 'completed'
      },
      {
        id: 'recommendation-diana',
        title: { en: 'Recommendation Letter', es: 'Carta de Recomendación' },
        description: { en: 'Letter from Diana Lopez.', es: 'Carta de Diana Lopez.' },
        file: '/recommendation-diana-lopez.pdf',
        status: 'completed'
      }
    ]
  }
};

/**
 * Social links and contact information
 */
export const contact = {
  email: 'kalebmartinez9@gmail.com',
  github: 'https://github.com/Kamavera',
  linkedin: 'https://linkedin.com/in/kaleb-martinez-b7b1b7364',
  resume: '/resume.pdf',
};

/**
 * About section content - Bilingual
 */
export const about = {
  intro: {
    en: "I'm a senior Computer Information Systems student at Universidad de Puerto Rico - Ponce with a strong foundation in software development and database design. I specialize in building modern, responsive websites and web applications using cutting-edge technologies.",
    es: "Soy estudiante de último año de Sistemas de Información Computacional en la Universidad de Puerto Rico - Ponce con una base sólida en desarrollo de software y diseño de bases de datos. Me especializo en construir sitios web y aplicaciones web modernas y responsivas usando tecnologías de vanguardia."
  },
  background: {
    en: "Through my studies at UPR Ponce, I've built a comprehensive skill set spanning full-stack web development and database design. I completed a 90-hour internship at CIRACET Corp.'s Healthcare Innovation Center (HIC), gaining hands-on experience in IT infrastructure, systems support, and cybersecurity. I've also delivered a production full-stack website for a real client, applying modern technologies like Next.js, TypeScript, and PostgreSQL to create professional web solutions.",
    es: "A través de mis estudios en UPR Ponce, he desarrollado un conjunto integral de habilidades que abarca desarrollo web full-stack y diseño de bases de datos. Completé un internado de 90 horas en CIRACET Corp. en el Healthcare Innovation Center (HIC), adquiriendo experiencia práctica en infraestructura de TI, soporte de sistemas y ciberseguridad. También he entregado un sitio web full-stack en producción para un cliente real, aplicando tecnologías modernas como Next.js, TypeScript y PostgreSQL para crear soluciones web profesionales."
  },
  learning: {
    en: "I'm currently deepening my expertise in modern web technologies, cloud platforms, and scalable architectures. I'm passionate about creating beautiful, functional websites and continuously learning the latest frameworks and best practices in web development.",
    es: "Actualmente estoy profundizando mi experiencia en tecnologías web modernas, plataformas en la nube y arquitecturas escalables. Me apasiona crear sitios web hermosos y funcionales y aprender continuamente los últimos frameworks y mejores prácticas en desarrollo web."
  },
  seeking: {
    en: "I'm actively seeking full-time software development positions and currently available for freelance web development projects. Whether you need a professional website, web application, or custom software solution, I'm ready to help bring your ideas to life. I bring strong technical skills, bilingual abilities (English/Spanish), and a commitment to delivering high-quality web solutions.",
    es: "Busco activamente posiciones de desarrollo de software a tiempo completo y actualmente disponible para proyectos freelance de desarrollo web. Ya sea que necesites un sitio web profesional, aplicación web o solución de software personalizada, estoy listo para ayudarte a dar vida a tus ideas. Aporto sólidas habilidades técnicas, capacidades bilingües (inglés/español) y un compromiso con la entrega de soluciones web de alta calidad."
  },
};

/**
 * Navigation labels - Bilingual
 */
export const navigation = {
  home: { en: 'Home', es: 'Inicio' },
  about: { en: 'About', es: 'Acerca de' },
  projects: { en: 'Projects', es: 'Proyectos' },
  skills: { en: 'Skills', es: 'Habilidades' },
  experience: { en: 'Experience', es: 'Experiencia' },
  portfolio: { en: 'Professional Portfolio', es: 'Portafolio Profesional' },
  contact: { en: 'Contact', es: 'Contacto' },
};

/**
 * Section titles and subtitles - Bilingual
 */
export const sections = {
  hero: {
    greeting: { en: 'Hi, my name is', es: 'Hola, mi nombre es' },
    typewriterText: { en: 'Hey Kaleb Here.', es: 'Hola, Kaleb Aquí.' },
    title: { en: 'Computer Information Systems Student & Software Developer', es: 'Estudiante de Sistemas de Información Computacional y Desarrollador de Software' },
    subtitle: { en: 'Universidad de Puerto Rico - Ponce | Class of 2026', es: 'Universidad de Puerto Rico - Ponce | Clase de 2026' },
    tagline: {
      en: 'Building software solutions that solve',
      es: 'Construyendo soluciones de software que resuelven'
    },
    taglineHighlight: {
      en: 'real business problems',
      es: 'problemas empresariales reales'
    },
    description: {
      en: "Combining academic training in systems analysis and database design with hands-on full-stack development experience to create impactful software solutions.",
      es: "Combinando formación académica en análisis de sistemas y diseño de bases de datos con experiencia práctica en desarrollo full-stack para crear soluciones de software impactantes."
    },
    cta: {
      projects: { en: 'View My Projects', es: 'Ver Mis Proyectos' },
      contact: { en: 'Get In Touch', es: 'Contáctame' }
    }
  },
  about: {
    title: { en: 'About Me', es: 'Acerca de Mí' },
    subtitle: {
      en: 'Full-stack web developer specializing in modern, responsive websites',
      es: 'Desarrollador web full-stack especializado en sitios web modernos y responsivos'
    },
    whoIAm: { en: 'Who I Am', es: 'Quién Soy' },
    myBackground: { en: 'My Background', es: 'Mi Trayectoria' },
    whatImLearning: { en: "What I'm Learning", es: 'Qué Estoy Aprendiendo' },
    whatImSeeking: { en: "What I'm Seeking", es: 'Qué Busco' },
    highlights: {
      education: {
        title: { en: 'Education', es: 'Educación' },
        description: {
          en: 'Senior at UPR Ponce studying Computer Information Systems with focus on full-stack web development and database design.',
          es: 'Estudiante de último año en UPR Ponce estudiando Sistemas de Información Computacional con enfoque en desarrollo web full-stack y diseño de bases de datos.'
        }
      },
      technical: {
        title: { en: 'Technical Skills', es: 'Habilidades Técnicas' },
        description: {
          en: 'Expert in JavaScript, TypeScript, React, Next.js, and database design. Building modern, responsive websites with cutting-edge technologies.',
          es: 'Experto en JavaScript, TypeScript, React, Next.js y diseño de bases de datos. Construyendo sitios web modernos y responsivos con tecnologías de vanguardia.'
        }
      },
      experience: {
        title: { en: 'Real Experience', es: 'Experiencia Real' },
        description: {
          en: 'Completed 90-hour IT internship at CIRACET Corp. Delivered production website for real client. Available to build custom websites.',
          es: 'Completé internado de TI de 90 horas en CIRACET Corp. Entregué sitio web en producción para cliente real. Disponible para construir sitios web personalizados.'
        }
      },
      career: {
        title: { en: 'Availability', es: 'Disponibilidad' },
        description: {
          en: 'Available now for full-time development roles and freelance web development projects. Ready to help businesses and individuals build their online presence.',
          es: 'Disponible ahora para roles de desarrollo a tiempo completo y proyectos freelance de desarrollo web. Listo para ayudar a empresas e individuos a construir su presencia en línea.'
        }
      }
    },
    competencies: {
      title: { en: 'Competencies', es: 'Competencias' },
      items: [
        {
          title: { en: 'Web Development', es: 'Desarrollo Web' },
          description: { en: 'Proficiency in modern web frameworks and tools.', es: 'Dominio de frameworks y herramientas web modernas.' }
        },
        {
          title: { en: 'Database Management', es: 'Gestión de Bases de Datos' },
          description: { en: 'Experience with SQL and NoSQL databases.', es: 'Experiencia con bases de datos SQL y NoSQL.' }
        }
      ]
    }
  },
  projects: {
    title: { en: 'Featured Projects', es: 'Proyectos Destacados' },
    subtitle: {
      en: 'Real-world applications built for clients',
      es: 'Aplicaciones del mundo real construidas para clientes'
    },
    clientImpact: { en: 'Client Impact:', es: 'Impacto para el Cliente:' },
    techStack: { en: 'Tech Stack', es: 'Tecnologías' },
    liveDemo: { en: 'Live Demo', es: 'Demo en Vivo' },
    viewCode: { en: 'Code', es: 'Código' },
    privateRepo: { en: 'Private Repository', es: 'Repositorio Privado' },
    filters: {
      all: { en: 'All', es: 'Todos' },
      webApps: { en: 'Web Apps', es: 'Aplicaciones Web' },
      fullStack: { en: 'Full-Stack', es: 'Full-Stack' },
      cms: { en: 'CMS', es: 'CMS' },
      ecommerce: { en: 'E-commerce', es: 'Comercio Electrónico' }
    }
  },
  skills: {
    title: { en: 'Skills & Technologies', es: 'Habilidades y Tecnologías' },
    subtitle: {
      en: 'Technical expertise from UPR Ponce coursework and hands-on projects',
      es: 'Experiencia técnica del currículo de UPR Ponce y proyectos prácticos'
    },
    categories: {
      languages: { en: 'Languages', es: 'Lenguajes' },
      frontend: { en: 'Frontend', es: 'Frontend' },
      backend: { en: 'Backend', es: 'Backend' },
      databases: { en: 'Databases', es: 'Bases de Datos' },
      tools: { en: 'Tools & Platforms', es: 'Herramientas y Plataformas' }
    },
    footer: {
      en: "Building on a solid academic foundation at UPR Ponce while continuously learning modern technologies and best practices in software development.",
      es: "Construyendo sobre una base académica sólida en UPR Ponce mientras aprendo continuamente tecnologías modernas y mejores prácticas en desarrollo de software."
    }
  },
  experience: {
    title: { en: 'Experience & Education', es: 'Experiencia y Educación' },
    subtitle: {
      en: 'My professional journey and academic background',
      es: 'Mi trayectoria profesional y formación académica'
    }
  },
  contact: {
    title: { en: 'Get In Touch', es: 'Contáctame' },
    subtitle: {
      en: "Let's discuss job opportunities or your next web project",
      es: 'Hablemos sobre oportunidades de trabajo o tu próximo proyecto web'
    },
    letsConnect: { en: "Let's Connect", es: 'Conectemos' },
    intro: {
      en: "I'm actively seeking full-time software development positions and currently available for freelance web development projects. Need a professional website or web application? Let's discuss how I can help bring your vision to life!",
      es: "Busco activamente posiciones de desarrollo de software a tiempo completo y actualmente disponible para proyectos freelance de desarrollo web. ¿Necesitas un sitio web profesional o aplicación web? ¡Hablemos sobre cómo puedo ayudarte a hacer realidad tu visión!"
    },
    email: { en: 'Email', es: 'Correo' },
    downloadResume: { en: 'Download Resume', es: 'Descargar CV' },
    sendMessage: { en: 'Send a Message', es: 'Enviar Mensaje' },
    yourName: { en: 'Your Name', es: 'Tu Nombre' },
    yourEmail: { en: 'Your Email', es: 'Tu Correo' },
    message: { en: 'Message', es: 'Mensaje' },
    messagePlaceholder: { en: 'Your message here...', es: 'Tu mensaje aquí...' },
    send: { en: 'Send Message', es: 'Enviar Mensaje' },
    successMessage: {
      en: 'Thank you! Your message has been sent successfully.',
      es: '¡Gracias! Tu mensaje ha sido enviado exitosamente.'
    },
    availability: {
      en: 'Available Now: Full-Time Positions & Freelance Projects',
      es: 'Disponible Ahora: Posiciones a Tiempo Completo y Proyectos Freelance'
    },
    freelanceServices: {
      en: 'Freelance Web Development Services',
      es: 'Servicios Freelance de Desarrollo Web'
    },
    freelanceDescription: {
      en: 'I build custom websites and web applications for businesses and individuals. From landing pages to full-stack applications, I deliver professional, modern solutions tailored to your needs.',
      es: 'Construyo sitios web y aplicaciones web personalizadas para empresas e individuos. Desde páginas de aterrizaje hasta aplicaciones full-stack, entrego soluciones profesionales y modernas adaptadas a tus necesidades.'
    }
  },
  portfolio: {
    title: { en: 'Professional Portfolio', es: 'Portafolio Profesional' },
    subtitle: {
      en: 'Academic and professional development documentation',
      es: 'Documentación de desarrollo académico y profesional'
    },
    generalInfo: { en: 'General Information', es: 'Información General' },
    studentLife: { en: 'Student Life', es: 'Vida Estudiantil' },
    professionalImprovement: { en: 'Professional Improvement', es: 'Mejoramiento Profesional' },
    diplomas: { en: 'Diplomas', es: 'Diplomas' },
    viewDocument: { en: 'View Document', es: 'Ver Documento' },
    goToWebsite: { en: 'Go to Website', es: 'Ir a Página Web' },
    downloadResume: { en: 'Download Resume', es: 'Descargar CV' },
    category: { en: 'Category', es: 'Categoría' },
    organization: { en: 'Organization', es: 'Organización' },
    date: { en: 'Date', es: 'Fecha' },
    skills: { en: 'Skills', es: 'Habilidades' },
    type: {
      academic: { en: 'Academic', es: 'Académico' },
      technical: { en: 'Technical', es: 'Técnico' },
      internship: { en: 'Internship', es: 'Internado' },
      professional: { en: 'Professional', es: 'Profesional' },
      selfStudy: { en: 'Self-Study', es: 'Autoestudio' }
    }
  },
  footer: {
    builtWith: { en: 'Built with', es: 'Construido con' },
    and: { en: 'using', es: 'usando' },
    student: { en: 'UPR Ponce | B.S. Computer Information Systems | Graduating May 2026', es: 'UPR Ponce | B.S. Sistemas de Información Computacional | Graduación Mayo 2026' }
  }
};
