import Accent from "./ui/accent";
import AnimationDiv from "./ui/animation-div";
import { PROJECTS } from "@/lib/constants";
import ProjectCard from "./ui/project-card";
import ProjectMinicard from "./ui/project-minicard";

export default function Projects() {
  // Filtrar proyectos destacados y regulares
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="proyectos"
      className="flex flex-col justify-center max-w-4xl p-6 pt-24"
    >
      {/* Título sin delay */}
      <AnimationDiv>
        <h2 className="font-bold text-5xl tracking-tighter -ml-0.5 mb-8">
          <Accent>Proyectos.</Accent>
        </h2>
      </AnimationDiv>

      {/* Proyectos destacados con animaciones escalonadas */}
      <section className="mx-auto flex flex-col justify-center place-items-center gap-6">
        {featuredProjects.map((project, index) => (
          <AnimationDiv key={project.id} delay={index * 0.1}>
            <ProjectCard project={project} />
          </AnimationDiv>
        ))}
      </section>

      {/* Mini cards animadas con delay secuencial */}
      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        {otherProjects.map((project, index) => (
          <AnimationDiv key={project.id} delay={index * 0.1}>
            <ProjectMinicard project={project} />
          </AnimationDiv>
        ))}
      </section>
    </section>
  );
}