import Clipboard from "./ui/clipboard";
import {
  ExternalLinkIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/svg";

export default function Footer() {
  return (
    <footer className="flex flex-col place-items-center justify-center mt-12 pb-6">
      <article className="py-2 gap-4 flex text-emerald-400">
        <a
          href="https://github.com/rodrigoleonel1"
          target={"_blank"}
          rel={"noreferrer"}
          aria-label="See the repository for this project on github."
        >
          <GithubIcon
            size={32}
            className="cursor-pointer hover:text-black/80 dark:hover:text-white/80"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rodrigoalarc%C3%B3n/"
          target={"_blank"}
          rel={"noreferrer"}
          aria-label="See this project website."
        >
          <LinkedinIcon
            size={32}
            className="cursor-pointer hover:text-sky-600"
          />
        </a>
        <Clipboard text={{ contact: "rodricsxd@gmail.com", type: "Email" }}>
          <MailIcon size={32} className="cursor-pointer hover:text-red-700" />
        </Clipboard>
      </article>
      <a
        href="https://github.com/rodrigoleonel1/my-website"
        target={"_blank"}
        rel={"noreferrer"}
        className="font-medium underline dark:text-zinc-200 flex place-items-center gap-1 hover:text-emerald-500 dark:hover:text-emerald-500 sm:text-lg"
      >
        Desarrollado por Rodrigo Alarcón
        <ExternalLinkIcon size={20} />
      </a>
    </footer>
  );
}
