import { Tool } from "./interfaces";

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
