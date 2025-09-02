import { Github, Linkedin, Mail } from "lucide-react";
import Logo from "./ui/logo";
import Clipboard from "./ui/clipboard";

export default function Footer() {
  return (
    <footer className="border-t border-gray-700 bg-black px-6 py-12">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
        {/* Logo and Description */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Logo />
            <span className="text-xl font-playfair font-semibold">
              Rodrigo Alarcón
            </span>
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Desarrollador Fullstack enfocado en crear soluciones funcionales y
            en constante actualización con las nuevas tecnologías.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Enlaces Rápidos</h3>
          <div className="grid grid-cols-1 gap-2">
            {[
              { label: "Inicio", href: "#" },
              { label: "Proyectos", href: "#projectos" },
              { label: "Tecnologías", href: "#habilidades" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-neutral-400 hover:underline text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Contacto</h3>
          <div className="flex space-x-4">
            {[
              {
                icon: Github,
                href: "https://github.com/rodrigoleonel1",
                label: "GitHub",
                ariaLabel: "Visitar mi perfil de Github",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/rodrigoalarc%C3%B3n",
                label: "LinkedIn",
                ariaLabel: "Visitar mi perfil de Linkedin",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary hover:bg-blue-950 hover:text-primary-foreground transition-all duration-300 flex items-center justify-center transform hover:scale-110 hover:-translate-y-1"
              >
                <social.icon className="w-5 h-5" />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
            <Clipboard
              text={{ contact: "rodricsxd@gmail.com", type: "Email" }}
              className=""
            >
              <a
                href="mailto:rodricsxd@gmail.com"
                aria-label="Enviarme un correo electrónico"
                className="w-10 h-10 rounded-full bg-primary hover:bg-blue-950 hover:text-primary-foreground transition-all duration-300 flex items-center justify-center transform hover:scale-110 hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
              </a>
            </Clipboard>
          </div>
        </div>
      </div>
    </footer>
  );
}
