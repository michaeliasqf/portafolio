export type SkillGroup = {
  title: string;
  accent: string;
  items: string[];
};

export type Technology = {
  name: string;
  category: "frontend" | "backend" | "database" | "tools" | "data";
};

export type Project = {
  title: string;
  type: string;
  summary: string;
  stack: string[];
  signal: string;
  repository: string;
  previewImages: Array<{
    src: string;
    alt: string;
  }>;
  preview: {
    eyebrow: string;
    title: string;
    points: string[];
  };
};

export type Experience = {
  year: string;
  title: string;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type PortfolioProfile = {
  name: string;
  role: string;
  location: string;
  headline: string;
  pitch: string;
  availability: string;
  portrait: string;
  socials: SocialLink[];
  metrics: Array<{ label: string; value: string }>;
  skills: SkillGroup[];
  technologies: Technology[];
  projects: Project[];
  experience: Experience[];
};

export const portfolioProfile: PortfolioProfile = {
  name: "Michael Quintana",
  role: "Full Stack Developer",
  location: "Departamento Central, Asunción",
  headline: "Desarrollo software full stack y análisis de datos con visión de negocio",
  pitch:
    "Licenciado en Administración, estudiante de Ingeniería Informática y Desarrollador Web. Combino visión empresarial con competencias técnicas para transformar necesidades de negocio en soluciones digitales escalables",
  availability:
    "Actualmente busco mi primer empleo en el sector IT para aportar valor en un equipo técnico, consolidar habilidades y crecer profesionalmente.",
  portrait: "/githubprofile.jpg",
  socials: [
    { label: "GitHub", href: "https://github.com/michaeliasqf" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/michael-quintana-6b8b54207/" },
    { label: "Email", href: "mailto:michaeliasqf@gmail.com" }
  ],
  metrics: [
    { label: "Formación", value: "Lic. Administración" },
    { label: "Carrera actual", value: "Ing. Informática" },
    { label: "Objetivo", value: "Primer rol IT" }
  ],
  skills: [
    {
      title: "Frontend moderno",
      accent: "coral",
      items: ["HTML5", "CSS3", "JavaScript ES6+", "TypeScript", "React", "Next.js", "Tailwind CSS", "Vite", "JSX"]
    },
    {
      title: "Backend y APIs",
      accent: "teal",
      items: ["Node.js", "Express.js", "Python", "Django", "FastAPI", "APIs REST"]
    },
    {
      title: "Bases de datos y análisis",
      accent: "gold",
      items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Pandas", "Matplotlib", "PowerBI", "Docker", "n8n", "Figma"]
    }
  ],
  technologies: [
    { name: "HTML5", category: "frontend" },
    { name: "CSS3", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Vite", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Express.js", category: "backend" },
    { name: "Python", category: "backend" },
    { name: "Django", category: "backend" },
    { name: "FastAPI", category: "backend" },
    { name: "PostgreSQL", category: "database" },
    { name: "MySQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "Docker", category: "tools" },
    { name: "GitHub", category: "tools" },
    { name: "Figma", category: "tools" },
    { name: "Pandas", category: "data" },
    { name: "Matplotlib", category: "data" },
    { name: "PowerBI", category: "data" }
  ],
  projects: [
    {
      title: "ERP SaaS",
      type: "Gestión empresarial",
      summary:
        "Sistema de gestión empresarial en la nube que integra ventas, inventario, proveedores y un dashboard, accesible desde cualquier dispositivo.",
      stack: ["Next.js 14+", "React 19", "TypeScript", "PostgreSQL", "Docker"],
      signal: "Gestión en la nube",
      repository: "https://github.com/michaeliasqf/erp-saas.git",
      previewImages: [
        { src: "/projects/erp-1.jpg", alt: "Vista del dashboard del ERP SaaS" },
        { src: "/projects/erp-2.jpg", alt: "Panel operativo del ERP SaaS" },
        { src: "/projects/erp-3.jpg", alt: "Módulo de gestión del ERP SaaS" }
      ],
      preview: {
        eyebrow: "ERP SaaS",
        title: "Dashboard operativo",
        points: ["Ventas", "Inventario", "Proveedores", "Acceso responsive"]
      }
    },
    {
      title: "Landing & Cotizador 3D Interactivo",
      type: "Experiencia 3D",
      summary:
        "Landing-page con ventana interactiva para visualización, cálculo de presupuestos y personalización de celosías arquitectónicas en tiempo real.",
      stack: ["Next.js 14+", "Three.js .184", "React", "TypeScript"],
      signal: "Cotización visual en tiempo real",
      repository: "https://github.com/michaeliasqf/gaia-landing.git",
      previewImages: [
        { src: "/projects/gaia-1.png", alt: "Hero de GAIA Celosías Arquitectónicas" },
        { src: "/projects/gaia-2.jpg", alt: "Cotizador 3D interactivo de GAIA" },
        { src: "/projects/gaia-3.jpg", alt: "Galería de diseños de GAIA" }
      ],
      preview: {
        eyebrow: "Three.js",
        title: "Configurador visual",
        points: ["Modelo 3D", "Presupuesto", "Personalización", "Interiores/exteriores"]
      }
    },
    {
      title: "Local AI Gateway",
      type: "IA local",
      summary:
        "Gateway ligero en FastAPI para exponer modelos de IA locales en Ollama como una API tipo cloud dentro de la red.",
      stack: ["Python", "FastAPI", "APIs", "Gemma4:e4b", "Ollama"],
      signal: "Inferencia local como servicio",
      repository: "https://github.com/michaeliasqf/Local-AI-Gateway.git",
      previewImages: [
        { src: "/projects/gateia-1.jpg", alt: "Interfaz principal del Local AI Gateway" },
        { src: "/projects/gateia-2.png", alt: "Panel de configuración del Local AI Gateway" },
        { src: "/projects/gateia-3.png", alt: "Respuesta de inferencia local del gateway" }
      ],
      preview: {
        eyebrow: "FastAPI + Ollama",
        title: "API local de inferencia",
        points: ["Gateway ligero", "Red local", "Modelos Ollama", "Consumo tipo cloud"]
      }
    }
  ],
  experience: [
    {
      year: "Ene 2026",
      title: "Zoe Eventos - Administrador de contenido y pautas",
      description:
        "Gestión y administración de contenido digital para campañas publicitarias en Meta Ads, planificación, publicación, optimización, monitoreo de métricas y reportes."
    },
    {
      year: "Jun 2024 - Dic 2025",
      title: "Consejo Local de Salud de Limpio - Administrador",
      description:
        "Gestión financiera, SIRFE 2.0, control de ingresos y egresos, conciliaciones bancarias, informes, rendición de cuentas y coordinación institucional."
    },
    {
      year: "Ene 2021 - May 2024",
      title: "Freelance - Tutor Académico",
      description:
        "Clases particulares en estadística, economía, contabilidad y finanzas, junto con asesoramiento metodológico en proyectos académicos y tesis."
    }
  ]
};
