import { Project, Tool } from "./interfaces";

export const TOOLS: Record<string, Tool> = {
  JAVASCRIPT: {
    id: "javascript",
    name: "JavaScript",
    image: "/tools/javascript.svg",
  },
  TYPESCRIPT: {
    id: "typescript",
    name: "TypeScript",
    image: "/tools/typescript.svg",
  },
  REACT: { id: "react", name: "React JS", image: "/tools/react.svg" },
  NEXTJS: {
    id: "nextjs",
    name: "Next.js",
    image: "/tools/next.svg",
    invert: true,
  },
  NODEJS: { id: "nodejs", name: "Node.js", image: "/tools/nodejs.svg" },
  EXPRESS: {
    id: "express",
    name: "Express.js",
    image: "/tools/express.svg",
    invert: true,
  },
  MONGODB: { id: "mongodb", name: "MongoDB", image: "/tools/mongodb.svg" },
  MYSQL: { id: "mysql", name: "MySQL", image: "/tools/mysql.svg" },
  POSTGRESQL: {
    id: "postgresql",
    name: "PostgreSQL",
    image: "/tools/postgresql.svg",
  },
  SUPABASE: { id: "supabase", name: "Supabase", image: "/tools/supabase.svg" },
  TAILWIND: {
    id: "tailwindcss",
    name: "Tailwind CSS",
    image: "/tools/tailwindcss.svg",
  },
  BOOTSTRAP: {
    id: "bootstrap",
    name: "Bootstrap",
    image: "/tools/bootstrap.svg",
  },
  SASS: { id: "sass", name: "Sass", image: "/tools/sass.svg" },
  SOCKETIO: { id: "socketio", name: "Socket.IO", image: "/tools/socketio.svg" },
  FIREBASE: { id: "firebase", name: "Firebase", image: "/tools/firebase.svg" },
  GIT: { id: "git", name: "Git", image: "/tools/git.svg" },
  HTML: { id: "html", name: "HTML", image: "/tools/html.svg" },
  CSS: { id: "css", name: "CSS", image: "/tools/css.svg" },
};

export const PROJECTS: Project[] = [
  {
    id: "lunatika",
    title: "Lunatika Accesorios",
    description:
      "Pagina catálogo de Lunatika Accesorios para visualizar productos y contactar con la dueña mediante Whatsapp. También cuenta con un dashboard para que la administradora pueda ver, editar, crear y eliminar productos, categorías y materiales.",
    tools: [TOOLS.NEXTJS, TOOLS.SUPABASE, TOOLS.TAILWIND],
    demo: "https://lunatika.vercel.app/",
    repo: "https://github.com/rodrigoleonel1/lunatika",
    img: "/projects/lunatika.jpg",
    alt: "Lunatika web preview",
    featured: true,
  },
  {
    id: "sneakers-ecommerce",
    title: "Sneakers E-commerce",
    description:
      "E-commerce de Zapatillas que permite navegar por las categorías, los productos y sus detalles. Cuenta con lógica de carrito que permite generar de órdenes de compra.",
    tools: [TOOLS.REACT, TOOLS.TAILWIND, TOOLS.FIREBASE],
    demo: "https://my-sneakers.vercel.app/",
    repo: "https://github.com/rodrigoleonel1/sneakers-ecommerce",
    img: "/projects/sneakers1.jpg",
    alt: "Sneakers ecommerce preview",
    featured: true,
  },
  {
    id: "ecommerce-fullstack",
    title: "E-commerce Fullstack",
    description:
      "E-commerce con API para administrar productos, usuarios y autenticación. MongoDB para persistencia de datos, arquitectura MVC, manejo de errores, chat en tiempo real y más.",
    tools: [TOOLS.NODEJS, TOOLS.EXPRESS, TOOLS.MONGODB, TOOLS.SOCKETIO],
    demo: null,
    repo: "https://github.com/rodrigoleonel1/API-Ecommerce",
    img: "/projects/ecommerce1.jpg",
    alt: "Fullstack ecommerce web preview",
    featured: true,
  },
  {
    id: "tateti",
    title: "Ta-te-ti",
    description: "El clásico juego del ta-te-ti hecho en React JS.",
    tools: [TOOLS.REACT, TOOLS.CSS],
    demo: "https://react-mytictactoe.vercel.app/",
    repo: "https://github.com/rodrigoleonel1/react-tic-tac-toe",
    img: "/projects/tictactoe1.jpg",
    alt: "Tic-tac-toe web preview",
    featured: false,
  },
  {
    id: "radiante-eventos",
    title: "Radiante Eventos",
    description:
      "Landing page con HTML, CSS, Sass y Bootstrap basada en un Salón de Eventos.",
    tools: [TOOLS.HTML, TOOLS.CSS, TOOLS.BOOTSTRAP, TOOLS.SASS],
    demo: "https://radianteeventos.vercel.app/",
    repo: "https://github.com/rodrigoleonel1/events-hall-page/tree/main",
    img: "/projects/radiante1.jpg",
    alt: "Events hall web preview",
    featured: false,
  },
];
