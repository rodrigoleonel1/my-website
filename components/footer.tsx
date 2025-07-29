import { ExternalLinkIcon } from "./svg";
import SocialButtons from "./ui/social-buttons";
import AnimationDiv from "./ui/animation-div";

export default function Footer() {
  return (
    <footer className="flex flex-col place-items-center justify-center mt-12 pb-6">
      <article className="py-2 gap-4 flex flex-col items-center text-emerald-400">
        <AnimationDiv element={<SocialButtons />} />
        <AnimationDiv
          element={
            <a
              href="https://github.com/rodrigoleonel1/my-website"
              target={"_blank"}
              rel={"noreferrer"}
              className="font-medium underline text-zinc-200 flex place-items-center gap-1 dark:hover:text-blue-300 sm:text-lg"
            >
              Desarrollado por Rodrigo Alarcón 👨‍💻
              <ExternalLinkIcon size={20} />
            </a>
          }
        />
      </article>
    </footer>
  );
}
