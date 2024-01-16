import Image from "next/image";
import { Abril_Fatface } from "next/font/google";

import { GithubIcon, LinkedinIcon } from "@/components/svg";
import MailClipboard from "./ui/mail-clipboard";

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
        <h2 className="text-xl font-semibold md:text-2xl dark:text-zinc-200">
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
          >
            <LinkedinIcon
              size={32}
              className="cursor-pointer hover:text-sky-600"
            />
          </a>
          <MailClipboard
            text={{ contact: "rodricsxd@gmail.com", type: "Email" }}
          />
        </article>
      </article>
      <figure className="bg-emerald-300 border-emerald-400 border-8 rounded-full shadow-md overflow-hidden hidden md:block col-span-3 dark:border-teal-700 dark:bg-teal-600">
        <Image
          width={250}
          height={250}
          className="h-full "
          src="/avatar.png"
          alt="Rodrigo Alarcón avatar portfolio"
        />
      </figure>
    </section>
  );
}
