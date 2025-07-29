import { Project } from "./interfaces";

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Lunatika Accesorios",
    description:
      "Pagina catálogo de Lunatika Accesorios para visualizar productos y contactar con la dueña mediante Whatsapp. También cuenta con un dashboard para que la administradora pueda ver, editar, crear y eliminar productos, categorías y materiales.",
    tools: [
      { id: 1, name: "NextJS", image: "/tools/next.svg", invert: true },
      {
        id: 2,
        name: "Supabase",
        image: "/tools/supabase.svg",
        invert: false,
      },
      {
        id: 3,
        name: "Tailwind CSS",
        image: "/tools/tailwindcss.svg",
        invert: false,
      },
    ],
    demo: "https://lunatika.vercel.app/",
    repo: "https://github.com/rodrigoleonel1/lunatika",
    img: "/projects/lunatika.jpg",
    alt: "Lunatika web preview",
  },
  {
    title: "Sneakers E-commerce",
    description:
      "E-commerce de Zapatillas que permite navegar por las categorías, los productos y sus detalles. Cuenta con lógica de carrito que permite generar de órdenes de compra.",
    tools: [
      { id: 1, name: "React JS", image: "/tools/react.svg", invert: false },
      {
        id: 2,
        name: "Tailwind CSS",
        image: "/tools/tailwindcss.svg",
        invert: false,
      },
      { id: 3, name: "Firebase", image: "/tools/firebase.svg", invert: false },
    ],
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
      { id: 1, name: "Node.js", image: "/tools/nodejs.svg", invert: false },
      { id: 2, name: "Express", image: "/tools/express.svg", invert: true },
      { id: 3, name: "MongoDB", image: "/tools/mongodb.svg", invert: false },
      { id: 4, name: "Socket.io", image: "/tools/socketio.svg", invert: false },
    ],
    demo: false,
    repo: "https://github.com/rodrigoleonel1/API-Ecommerce",
    img: "/projects/ecommerce1.jpg",
    alt: "Fullstack ecommerce web preview",
  },
];

export const PROJECTS = [
  {
    title: "Ta-te-ti",
    description: "El clásico juego del ta-te-ti hecho en React JS.",
    tools: [
      { id: 1, name: "React JS", image: "/tools/react.svg", invert: false },
      {
        id: 2,
        name: "CSS3",
        image: "/tools/css.svg",
        invert: false,
      },
    ],
    demo: "https://react-mytictactoe.vercel.app/",
    repo: "https://github.com/rodrigoleonel1/react-tic-tac-toe",
    img: "/projects/tictactoe1.jpg",
    alt: "Tic-tac-toe web preview",
  },
  {
    title: "Radiante Eventos",
    description:
      "Landing page con HTML, CSS, Sass y Bootstrap basada en un Salón de Eventos.",
    tools: [
      { id: 1, name: "HTML 5", image: "/tools/html.svg", invert: false },
      {
        id: 2,
        name: "CSS3",
        image: "/tools/css.svg",
        invert: false,
      },
      {
        id: 3,
        name: "Bootstrap",
        image: "/tools/bootstrap.svg",
        invert: false,
      },
      {
        id: 4,
        name: "Sass",
        image: "/tools/sass.svg",
        invert: false,
      },
    ],
    demo: "https://radianteeventos.vercel.app/",
    repo: "https://github.com/rodrigoleonel1/events-hall-page/tree/main",
    img: "/projects/radiante1.jpg",
    alt: "Events hall web preview",
  },
  // {
  //   title: "Pokédex",
  //   description:
  //     "Pokédex realizada con el uso de API, manipulación de DOM, métodos de arrays, local storage y CSS nesting.",
  //   tools: ["Javascript", "Bootstrap", "CSS 3", "Sweetalert2"],
  //   demo: "https://rodrigoleonel1.github.io/js-pokedex/",
  //   repo: "https://github.com/rodrigoleonel1/js-pokedex",
  //   img: "/projects/pokedex1.jpg",
  //   alt: "Pokedex web preview",
  // },
];

export const TOOLS = [
  {
    name: "JavaScript",
    image: "/tools/javascript.svg",
  },
  {
    name: "TypeScript",
    image: "/tools/typescript.svg",
  },
  {
    name: "React",
    image: "/tools/react.svg",
  },
  {
    name: "Next.js",
    image: "/tools/next.svg",
    invert: true,
  },
  {
    name: "Node.js",
    image: "/tools/nodejs.svg",
  },
  {
    name: "Express.js",
    image: "/tools/express.svg",
    invert: true,
  },
  {
    name: "MongoDB",
    image: "/tools/mongodb.svg",
  },
  {
    name: "MySQL",
    image: "/tools/mysql.svg",
  },
  {
    name: "PostgreSQL",
    image: "/tools/postgresql.svg",
  },
  {
    name: "Supabase",
    image: "/tools/supabase.svg",
  },
  {
    name: "Tailwind",
    image: "/tools/tailwindcss.svg",
  },
  {
    name: "Bootstrap",
    image: "/tools/bootstrap.svg",
  },
  {
    name: "Sass",
    image: "/tools/sass.svg",
  },
  {
    name: "Socket.IO",
    image: "/tools/socketio.svg",
  },
  {
    name: "Firebase",
    image: "/tools/firebase.svg",
  },
  {
    name: "Git",
    image: "/tools/git.svg",
  },
  {
    name: "HTML",
    image: "/tools/html.svg",
  },
  {
    name: "CSS",
    image: "/tools/css.svg",
  },
];
