import Header from "./header";
import { Github, Linkedin, Mail } from "lucide-react";
import DarkVeil from "./ui/dark-veil";
import HeroBg from "./ui/hero-bg";
import CornerElements from "./ui/corner-elements";
import Clipboard from "./ui/clipboard";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col overflow-hidden">
      <div className="absolute inset-0">
        <DarkVeil />
      </div>
      <HeroBg />
      <CornerElements />
      <Header />
      <section className="flex flex-grow flex-col items-center justify-center z-10">
        <article className="flex flex-col items-center gap-8">
          {/* Monograma en lugar de imagen */}
          <header className="flex flex-col items-center justify-center gap-2 text-center">
            <h1 className="animate-in fade-in slide-in-from-top-4 duration-700 text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl ">
              Rodrigo Alarcón
            </h1>

            <h2 className="animate-in fade-in slide-in-from-top-4 delay-75 duration-700 text-3xl tracking-tighter sm:text-4xl md:text-5xl md:font-semibold">
              DESARROLLADOR FULLSTACK
            </h2>

            <p className="animate-in fade-in slide-in-from-top-4 delay-100 duration-700 max-w-[410px] text-zinc-300 sm:max-w-[520px] sm:text-xl">
              Me apasiona la resolución de problemas y la creación de
              aplicaciones con experiencias atractivas y funcionales.
            </p>
          </header>
        </article>
        <article className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-top-4 delay-150 duration-700">
          <a
            href="https://github.com/rodrigoleonel1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar mi perfil de Github"
            className="flex cursor-pointer items-center gap-2 border-2 border-white px-4 py-2 shadow-[4px_4px_0px_0px] transition-all duration-300 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            <Github size={20} />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/rodrigoalarc%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar mi perfil de Linkedin"
            className="flex cursor-pointer items-center gap-2 border-2 border-white px-4 py-2 shadow-[4px_4px_0px_0px] transition-all duration-300 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            <Linkedin size={20} />
            Linkedin
          </a>
          <Clipboard
            text={{ contact: "rodricsxd@gmail.com", type: "Email" }}
            className=""
          >
            <a
              href="mailto:rodricsxd@gmail.com"
              aria-label="Enviarme un correo electrónico"
              className="flex cursor-pointer items-center gap-2 border-2 border-white px-4 py-2 shadow-[4px_4px_0px_0px] transition-all duration-300 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
            >
              <Mail size={20} />
              Mail
            </a>
          </Clipboard>
        </article>
      </section>

      {/* Indicador de scroll */}
      <a
        href="#proyectos"
        aria-label="Ir a la sección de proyectos"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10"
      >
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
