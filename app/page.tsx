import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";

export default function Home() {
  return (
    <main className="flex flex-col mx-auto max-w-4xl">
      <Hero />
      <Projects />
      <Technologies />
    </main>
  );
}
