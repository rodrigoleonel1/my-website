import Light from "./ui/light";
import Accent from "./ui/accent";
import AnimationDiv from "./ui/animation-div";
import SocialButtons from "./ui/social-buttons";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="flex flex-col gap-2 justify-center items-center min-h-[calc(100vh-80px)] p-6 pt-24 md:min-h-0 md:flex-row-reverse md:pt-42"
    >
      <Light />
      <AnimationDiv
        element={
          <article className="overflow-hidden rounded-full bg-[url(/noise.png)] bg-slate-800">
            <img
              className="max-h-82 md:max-h-[330px]"
              src="/avatar.png"
              alt="Rodrigo Alarcón avatar"
            />
          </article>
        }
      />
      <AnimationDiv
        element={
          <article className="flex flex-col gap-2 justify-center items-center text-center md:text-start md:items-start">
            <h1 className="font-bold text-5xl sm:text-7xl tracking-tighter -ml-0.5">
              <Accent>Rodrigo Alarcón</Accent>
            </h1>

            <h2 className="text-4xl sm:text-5xl md:text-4xl md:font-semibold tracking-tighter italic">
              DESARROLLADOR FULLSTACK
            </h2>

            <p className="text-zinc-300 sm:text-xl max-w-[410px] sm:max-w-[570px]">
              Me apasiona la resolución de problemas y la creación de
              aplicaciones con experiencias atractivas y funcionales.
            </p>

            <SocialButtons />
          </article>
        }
      />
    </section>
  );
}
