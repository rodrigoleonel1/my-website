import { Abril_Fatface } from "next/font/google";

import Clipboard from "./ui/clipboard";
import Avatar from "./ui/avatar";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/svg";

const AbrilFatface = Abril_Fatface({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section className="mt-8 grid grid-cols-10 gap-3 items-center">
      <article className="m-auto col-span-10 md:col-span-7">
        <h1
          className={`text-7xl bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent ${AbrilFatface.className} sm:text-[4rem] col-span-10 pb-2`}
        >
          Rodrigo Alarcón.
        </h1>
        <h2 className="text-xl font-semibold md:text-3xl">
          Desarrollador Fullstack.
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Con enfoque en el desarrollo web, me apasiona la resolución de
          problemas y la creación de aplicaciones con experiencias atractivas y
          funcionales.
        </p>
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
      </article>
      <Avatar />
    </section>
  );
}
