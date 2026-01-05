// SCL Consultores - Site Data
// All editable content for the website

export const siteData = {
    // Contact Information
    contact: {
        email: "contacto@sclconsultores.com",
        phone1: "+56 2 2345 6789",
        phone2: "+56 9 8765 4321",
        address: "Av. Providencia 1234, Santiago, Chile",
    },

    // Navigation
    navigation: [
        { label: "Inicio", href: "/" },
        { label: "Nosotros", href: "/nosotros" },
        { label: "Servicios", href: "/servicios" },
        { label: "Productos", href: "/productos" },
        { label: "Blog", href: "/blog" },
        { label: "Contacto", href: "/contacto" },
    ],

    // Hero Section
    hero: {
        title: "Transformamos tu negocio con",
        highlightedWords: ["soluciones innovadoras", "estrategias efectivas"],
        subtitle: "Consultoría empresarial de clase mundial para impulsar tu crecimiento",
        ctaText: "Conoce más",
        ctaLink: "#nosotros",
        backgroundImage: "/images/hero-bg.jpg",
    },

    // Purpose, Mission, Vision
    purposeMissionVision: [
        {
            id: "proposito",
            title: "Propósito",
            description: "Ser el socio estratégico que impulsa la transformación y el crecimiento sostenible de las organizaciones a través de soluciones innovadoras y personalizadas.",
            image: "/images/purpose.jpg",
        },
        {
            id: "mision",
            title: "Misión",
            description: "Proporcionar servicios de consultoría de excelencia que generen valor real y medible para nuestros clientes, combinando experiencia, metodologías probadas y tecnología de vanguardia.",
            image: "/images/mission.jpg",
        },
        {
            id: "vision",
            title: "Visión",
            description: "Ser reconocidos como la firma de consultoría líder en América Latina, destacando por nuestra capacidad de innovación, compromiso con la excelencia y resultados tangibles.",
            image: "/images/vision.jpg",
        },
    ],

    // Company Values
    values: {
        title: "Nuestros",
        titleHighlight: "Valores",
        items: [
            {
                id: "excelencia",
                title: "Excelencia",
                description: "Compromiso con la calidad en cada proyecto",
                icon: "FaStar",
            },
            {
                id: "innovacion",
                title: "Innovación",
                description: "Soluciones creativas y tecnología de punta",
                icon: "FaLightbulb",
            },
            {
                id: "integridad",
                title: "Integridad",
                description: "Transparencia y ética en todas nuestras acciones",
                icon: "FaShieldAlt",
            },
            {
                id: "colaboracion",
                title: "Colaboración",
                description: "Trabajo en equipo con nuestros clientes",
                icon: "FaHandshake",
            },
            {
                id: "compromiso",
                title: "Compromiso",
                description: "Dedicación total al éxito de nuestros clientes",
                icon: "FaHeart",
            },
            {
                id: "resultados",
                title: "Resultados",
                description: "Enfoque en logros medibles y sostenibles",
                icon: "FaChartLine",
            },
        ],
    },

    // Company History Timeline
    history: {
        title: "Nuestra Historia",
        milestones: [
            {
                year: "2010",
                title: "Fundación",
                description: "Inicio de operaciones con un equipo de 5 consultores especializados",
            },
            {
                year: "2013",
                title: "Expansión Regional",
                description: "Apertura de oficinas en Perú y Colombia",
            },
            {
                year: "2016",
                title: "Certificación ISO",
                description: "Obtención de certificaciones internacionales de calidad",
            },
            {
                year: "2019",
                title: "Transformación Digital",
                description: "Lanzamiento de plataforma de servicios digitales",
            },
            {
                year: "2022",
                title: "Reconocimiento",
                description: "Premio a la mejor firma de consultoría en innovación",
            },
            {
                year: "2024",
                title: "Presente",
                description: "Más de 500 proyectos exitosos y presencia en 8 países",
            },
        ],
    },

    // Team KPIs
    teamKPIs: [
        {
            id: "projects",
            value: 500,
            suffix: "+",
            label: "Proyectos Exitosos",
            icon: "FaBriefcase",
        },
        {
            id: "clients",
            value: 200,
            suffix: "+",
            label: "Clientes Satisfechos",
            icon: "FaUsers",
        },
        {
            id: "experts",
            value: 50,
            suffix: "+",
            label: "Expertos Certificados",
            icon: "FaUserTie",
        },
        {
            id: "countries",
            value: 8,
            suffix: "",
            label: "Países de Presencia",
            icon: "FaGlobe",
        },
    ],

    // Why Choose Us Features
    whyChooseUs: {
        title: "¿Por qué elegirnos?",
        features: [
            {
                id: "experience",
                title: "Experiencia Comprobada",
                description: "Más de 14 años transformando organizaciones",
                icon: "FaMedal",
                color: "#E3F2FD",
            },
            {
                id: "methodology",
                title: "Metodología Propia",
                description: "Procesos optimizados y probados en múltiples industrias",
                icon: "FaCogs",
                color: "#FFF3E0",
            },
            {
                id: "team",
                title: "Equipo Multidisciplinario",
                description: "Profesionales especializados en diversas áreas",
                icon: "FaPeopleCarry",
                color: "#F3E5F5",
            },
            {
                id: "technology",
                title: "Tecnología Avanzada",
                description: "Herramientas de última generación para mejores resultados",
                icon: "FaRocket",
                color: "#E8F5E9",
            },
            {
                id: "support",
                title: "Soporte Continuo",
                description: "Acompañamiento en todas las fases del proyecto",
                icon: "FaHeadset",
                color: "#FFF9C4",
            },
            {
                id: "roi",
                title: "ROI Garantizado",
                description: "Retorno de inversión medible y documentado",
                icon: "FaChartBar",
                color: "#FFEBEE",
            },
        ],
        kpiSummary: [
            { label: "Satisfacción del Cliente", value: "98%" },
            { label: "Tasa de Éxito", value: "95%" },
            { label: "Tiempo Promedio de Proyecto", value: "6 meses" },
        ],
    },

    // Footer
    footer: {
        columns: [
            {
                title: "Empresa",
                links: [
                    { label: "Nosotros", href: "/nosotros" },
                    { label: "Equipo", href: "/nosotros#equipo" },
                    { label: "Carreras", href: "/carreras" },
                    { label: "Blog", href: "/blog" },
                ],
            },
            {
                title: "Servicios",
                links: [
                    { label: "Consultoría Estratégica", href: "/servicios#estrategia" },
                    { label: "Transformación Digital", href: "/servicios#digital" },
                    { label: "Gestión de Proyectos", href: "/servicios#proyectos" },
                    { label: "Capacitación", href: "/servicios#capacitacion" },
                ],
            },
            {
                title: "Soluciones",
                links: [
                    { label: "Para Empresas", href: "/productos#empresas" },
                    { label: "Para Startups", href: "/productos#startups" },
                    { label: "Para Gobierno", href: "/productos#gobierno" },
                    { label: "Casos de Éxito", href: "/casos-exito" },
                ],
            },
            {
                title: "Contacto",
                links: [
                    { label: "Contáctanos", href: "/contacto" },
                    { label: "Soporte", href: "/soporte" },
                    { label: "Ubicación", href: "/contacto#ubicacion" },
                    { label: "FAQ", href: "/faq" },
                ],
            },
        ],
        social: [
            { platform: "LinkedIn", icon: "FaLinkedin", url: "https://linkedin.com/company/scl-consultores" },
            { platform: "Twitter", icon: "FaTwitter", url: "https://twitter.com/sclconsultores" },
            { platform: "Facebook", icon: "FaFacebook", url: "https://facebook.com/sclconsultores" },
            { platform: "Instagram", icon: "FaInstagram", url: "https://instagram.com/sclconsultores" },
        ],
        copyright: "© 2024 SCL Consultores. Todos los derechos reservados.",
    },
};
