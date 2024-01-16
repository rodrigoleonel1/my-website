import { ExternalLinkIcon, GithubIcon, LinkedinIcon } from "@/components/svg";
import MailClipboard from "./ui/mail-clipboard";

export default function Footer() {
  return (
    <footer className="flex flex-col place-items-center justify-center mt-12 pb-6">
      <article className="py-2 gap-4 flex text-emerald-400">
        <GithubIcon
          size={32}
          className="cursor-pointer hover:text-black/80 dark:hover:text-white/80"
        />
        <LinkedinIcon size={32} className="cursor-pointer hover:text-sky-600" />
        <MailClipboard
          text={{ contact: "rodricsxd@gmail.com", type: "Email" }}
        />
      </article>
      <a
        href="https://github.com/rodrigoleonel1/my-website"
        target={"_blank"}
        rel={"noreferrer"}
        className="font-medium underline dark:text-zinc-400 flex place-items-center gap-1 hover:text-emerald-500 dark:hover:text-emerald-500 sm:text-lg"
      >
        Desarrollado por Rodrigo Alarcón
        <ExternalLinkIcon size={20} />
      </a>
    </footer>
  );
}
