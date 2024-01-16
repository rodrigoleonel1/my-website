import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5">
      <Hero />
      <Projects />
      <Technologies />
    </main>
  );
}
