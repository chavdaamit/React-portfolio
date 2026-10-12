export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Full Stack & Backend' | 'Frontend' | 'All';
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Proficient", "Familiar"
    icon: string;
  }[];
}

export const portfolioData = {
  personal: {
    name: "Amit Chavda",
    title: "Full Stack & MERN Developer",
    email: "adchavda7777@gmail.com",
    phone: "+91 7984656852",
    rawPhone: "7984656852",
    location: "Bhavnagar, Gujarat, India",
    githubUsername: "chavdaamit",
    githubUrl: "https://github.com/chavdaamit",
    linkedinUrl: "https://www.linkedin.com/in/amit1201/",
    whatsappUrl: "https://wa.me/917984656852",
    avatarUrl: "https://avatars.githubusercontent.com/u/215827427?v=4",
    resumePdfUrl: "/AMIT_CHAVDA_Resume.pdf",
    summary:
      "Passionate Full Stack Developer skilled in HTML, CSS, JavaScript, TypeScript, React, Node.js, Express.js, MongoDB, and REST APIs. Experienced in building responsive, scalable, and user-centric web applications with clean architecture and modern developer tooling.",
    typingRoles: [
      "Full Stack Web Developer",
      "MERN Stack Specialist",
      "RESTful API Architect",
      "TypeScript & React Enthusiast"
    ],
    stats: [
      { label: "Public Repositories", value: "79+" },
      { label: "Hackathon Participant", value: "Tech Wars 2026" },
      { label: "Core Specialization", value: "MERN Stack" },
      { label: "Live Projects Built", value: "10+" }
    ]
  },

  education: [
    {
      institution: "Red & White Skill Education",
      course: "Full Stack Web Development",
      location: "Bhavnagar, Gujarat",
      status: "Professional Training",
      description:
        "Comprehensive hands-on training focusing on end-to-end full stack development: React frontend architecture, Node.js & Express RESTful services, MongoDB data modeling, and industry-standard deployment practices."
    }
  ],

  certifications: [
    {
      title: "Tech Wars 2026 Hackathon",
      organization: "Tech Wars",
      role: "Hackathon Participant & Innovator",
      year: "2026",
      description: "Collaborated under pressure to design, architect, and deliver real-world software solutions."
    },
    {
      title: "Future Forward Certificate",
      organization: "Design + Development Initiative",
      role: "Design & Full Stack Engineering",
      year: "2025-2026",
      description: "Certified proficiency in responsive web design, modern UI engineering, and backend integration."
    }
  ],

  languages: [
    { name: "English", proficiency: "Intermediate (Professional Working)" },
    { name: "Hindi", proficiency: "Native / Bilingual" },
    { name: "Gujarati", proficiency: "Native / Bilingual" }
  ],

  skillsCategories: [
    {
      id: "frontend",
      name: "Frontend Development",
      description: "Building fast, dynamic, and accessible interfaces",
      skills: [
        { name: "React.js", level: "Proficient", icon: "react" },
        { name: "TypeScript", level: "Proficient", icon: "typescript" },
        { name: "JavaScript (ES6+)", level: "Advanced", icon: "javascript" },
        { name: "Tailwind CSS", level: "Proficient", icon: "tailwind" },
        { name: "Bootstrap 5", level: "Advanced", icon: "bootstrap" },
        { name: "HTML5 & Semantic Web", level: "Advanced", icon: "html" },
        { name: "CSS3 & Modern Layouts", level: "Advanced", icon: "css" },
        { name: "Responsive UI/UX", level: "Advanced", icon: "layout" }
      ]
    },
    {
      id: "backend",
      name: "Backend & APIs",
      description: "Server architecture, authentication, and secure endpoints",
      skills: [
        { name: "Node.js", level: "Proficient", icon: "nodejs" },
        { name: "Express.js", level: "Proficient", icon: "express" },
        { name: "RESTful API Design", level: "Advanced", icon: "api" },
        { name: "JWT Authentication", level: "Proficient", icon: "shield" },
        { name: "CRUD Architecture", level: "Advanced", icon: "database" },
        { name: "EJS Templating", level: "Proficient", icon: "code" },
        { name: "Middleware & Security", level: "Proficient", icon: "lock" }
      ]
    },
    {
      id: "database",
      name: "Database & Cloud",
      description: "Data modeling, storage, and hosting solutions",
      skills: [
        { name: "MongoDB", level: "Proficient", icon: "database" },
        { name: "Mongoose ODM", level: "Proficient", icon: "code" },
        { name: "Cloudinary", level: "Proficient", icon: "cloud" },
        { name: "Render", level: "Proficient", icon: "server" },
        { name: "Vercel & Netlify", level: "Proficient", icon: "globe" }
      ]
    },
    {
      id: "tools",
      name: "Tools, AI & DevOps",
      description: "Version control and cutting-edge productivity tools",
      skills: [
        { name: "Git & GitHub", level: "Advanced", icon: "git" },
        { name: "Postman", level: "Proficient", icon: "send" },
        { name: "VS Code & Cursor AI", level: "Advanced", icon: "terminal" },
        { name: "GitHub Copilot", level: "Proficient", icon: "bot" },
        { name: "Claude & ChatGPT", level: "Proficient", icon: "sparkles" },
        { name: "Perplexity AI", level: "Proficient", icon: "search" }
      ]
    }
  ],

  projects: ([
    {
      id: "food-ordering-api",
      title: "Food Ordering REST API",
      category: "Full Stack & Backend",
      featured: true,
      description:
        "Comprehensive RESTful backend architecture built for an on-demand food delivery and restaurant ecosystem. Includes token-based user authentication, role-based controls, restaurant directory, menu management, order placement, and full CRUD operations.",
      tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "REST API", "Postman"],
      githubUrl: "https://github.com/chavdaamit/node.js/tree/main/food_order",
      highlights: [
        "Secure user signup, login & session verification via JWT",
        "Complete CRUD routes for restaurants, dishes, and orders",
        "Mongoose schema validations and relationship modeling",
        "Well-tested with Postman collections"
      ]
    },
    {
      id: "asus-laptop-clone",
      title: "ASUS Laptop Website Clone",
      category: "Frontend",
      featured: true,
      description:
        "Pixel-perfect responsive showcase website clone for ASUS ROG & ZenBook laptops. Built with rich multimedia sections, fluid product specs grids, smooth navigation, and a modern mobile-first design.",
      tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Responsive Web Design"],
      liveUrl: "https://jade-pavlova-8f316d.netlify.app/",
      githubUrl: "https://github.com/chavdaamit/asus-laptop",
      highlights: [
        "Fully responsive layout adapting from mobile screens to 4K displays",
        "Product feature showcase and specifications matrix",
        "Interactive navigation bar, sliders, and dynamic elements",
        "High performance and deployed on Netlify"
      ]
    },
    {
      id: "jwt-authentication",
      title: "Secure JWT Authentication System",
      category: "Full Stack & Backend",
      featured: true,
      description:
        "Production-ready authentication and authorization microservice using Node.js, Express, and MongoDB. Implements password encryption with bcrypt, JWT token signing & verification, and custom route guard middleware.",
      tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "Security"],
      githubUrl: "https://github.com/chavdaamit/node.js/tree/main/auth_login",
      highlights: [
        "One-way cryptographic password hashing using bcrypt",
        "Stateless token-based authentication with expiration logic",
        "Reusable authorization middleware for protected endpoints",
        "Error handling pipeline preventing sensitive info leakage"
      ]
    },
    {
      id: "ecommerce-project",
      title: "Full-Featured E-Commerce Platform",
      category: "Full Stack & Backend",
      featured: true,
      description:
        "Interactive web application engineered for online retail. Features dynamic catalog filtering, instant cart management, item quantity modification, and persistent order summaries.",
      tags: ["React", "JavaScript", "Tailwind CSS", "REST API", "State Management"],
      githubUrl: "https://github.com/chavdaamit/E-commerce-project",
      highlights: [
        "Dynamic cart calculation with real-time tax and price updates",
        "Product categorization and live keyword search filter",
        "Modular component hierarchy with predictable state",
        "Responsive shopping UI crafted for mobile and desktop"
      ]
    },
    {
      id: "html-css-exam-showcase",
      title: "Responsive Web Portal Showcase",
      category: "Frontend",
      featured: false,
      description:
        "Modern multi-section web application built to demonstrate advanced CSS grid layouts, responsive flexbox patterns, typography hierarchies, and mobile responsiveness.",
      tags: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Netlify"],
      liveUrl: "https://graceful-naiad-6cc6eb.netlify.app/",
      githubUrl: "https://github.com/chavdaamit/html-css-exam",
      highlights: [
        "Semantic HTML5 structure optimized for SEO and readability",
        "Fluid CSS Grid and media query breakpoints",
        "Live deployed on Netlify with fast initial load"
      ]
    },
    {
      id: "event-management",
      title: "Event Management Practical System",
      category: "Full Stack & Backend",
      featured: false,
      description:
        "Backend management system for scheduling events, tracking attendees, and managing calendar registrations with MongoDB persistence.",
      tags: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      githubUrl: "https://github.com/chavdaamit/Event-management-practical",
      highlights: [
        "Event creation, edit, deletion, and attendee tracking",
        "Robust validation and status updates",
        "Structured RESTful API endpoints"
      ]
    }
  ] as Project[])
};
