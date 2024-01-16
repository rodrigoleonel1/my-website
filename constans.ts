import { Project } from "./types";

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Sneakers E-commerce",
    description:
      "E-commerce de Zapatillas que permite navegar por las categorías, los productos y sus detalles. Cuenta con lógica de carrito que permite generar de órdenes de compra.",
    tools: ["React JS", "Tailwind CSS", "Firebase"],
    demo: "https://my-sneakers.vercel.app/",
    repo: "https://github.com/rodrigoleonel1/sneakers-ecommerce",
    img: "/projects/sneakers1.jpg",
    alt: "Sneakers ecommerce preview",
  },
  {
    title: "E-commerce Fullstack",
    description:
      "E-commerce con API para administrar productos, usuarios y autenticación. MongoDB para persistencia de datos, arquitectura MVC, manejo de errores, chat en tiempo real y más.",
    tools: [
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Passport",
      "Swagger",
      "Handlebars",
    ],
    demo: false,
    repo: "https://github.com/rodrigoleonel1/API-Ecommerce",
    img: "/projects/ecommerce1.jpg",
    alt: "Fullstack ecommerce web preview",
  },
  {
    title: "Pokédex",
    description:
      "Pokédex realizada con el uso de API, manipulación de DOM, métodos de arrays, local storage y CSS nesting.",
    tools: ["Javascript", "Bootstrap", "CSS 3", "Sweetalert2"],
    demo: "https://rodrigoleonel1.github.io/js-pokedex/",
    repo: "https://github.com/rodrigoleonel1/js-pokedex",
    img: "/projects/pokedex1.jpg",
    alt: "Pokedex web preview",
  },
];

export const PROJECTS = [
  {
    title: "Ta-te-ti",
    description: "El clásico juego del ta-te-ti hecho en React JS.",
    tools: ["React JS", "CSS 3", "Canvas confetti"],
    demo: "https://react-mytictactoe.vercel.app/",
    repo: "https://github.com/rodrigoleonel1/react-tic-tac-toe",
    img: "/projects/tictactoe1.jpg",
    alt: "Tic-tac-toe web preview",
  },
  {
    title: "Radiante Eventos",
    description:
      "Landing page con HTML, CSS, Sass y Bootstrap casada en un Salón de Eventos.",
    tools: ["HTML 5", "CSS 3", "Bootstrap", "Sass"],
    demo: "https://radianteeventos.vercel.app/",
    repo: "https://github.com/rodrigoleonel1/events-hall-page/tree/main",
    img: "/projects/radiante1.jpg",
    alt: "Events hall web preview",
  },
];

export const SKILLS = [
  {
    name: "JavaScript",
    src: "/skills/javascript.svg",
  },
  {
    name: "TypeScript",
    src: "/skills/typescript.svg",
  },
  {
    name: "React",
    src: "/skills/react.svg",
  },
  {
    name: "Next.js",
    src: "/skills/next.svg",
    invert: true,
  },
  {
    name: "Node.js",
    src: "/skills/nodejs.svg",
  },
  {
    name: "Express.js",
    src: "/skills/express.svg",
    invert: true,
  },
  {
    name: "MongoDB",
    src: "/skills/mongodb.svg",
  },
  {
    name: "Tailwind",
    src: "/skills/tailwindcss.svg",
  },
  {
    name: "Bootstrap",
    src: "/skills/bootstrap.svg",
  },
  {
    name: "Sass",
    src: "/skills/sass.svg",
  },
  {
    name: "Socket.IO",
    src: "/skills/socketio.svg",
  },
  {
    name: "Firebase",
    src: "/skills/firebase.svg",
  },
  // {
  //   name: "Git",
  //   src: "/skills/git.svg",
  // },
  // {
  //   name: "NPM",
  //   src: "/skills/npm.svg",
  // },
];
