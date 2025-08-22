import { PROJECTS } from "@/lib/projects";
import SectionHeader from "./ui/section-header";
import CardProject from "./ui/card-project";
import CardMini from "./ui/card-mini";

export default function Projects() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const otherProjects = PROJECTS.filter((p) => !p.featured);
  return (
    <section
      id="proyectos"
      className="relative bg-[url(/noise.png)] bg-blue-950/50 px-4"
    >
      <SectionHeader
        title="MIS PROYECTOS"
        subtitle="Una selección de proyectos en los que he trabajado."
      />
      <section className="mx-auto grid grid-cols-1 gap-6 md:gap-4 pt-12 md:py-4 relative z-50">
        {featuredProjects.map((project, index) => (
          <CardProject key={project.id} project={project} />
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2 pb-12 max-w-4xl mx-auto pt-6 w-full">
        {otherProjects.map((project, index) => (
          <CardMini key={project.id} project={project} />
        ))}
      </section>
    </section>
  );
}
