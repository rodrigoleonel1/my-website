import Accent from "./ui/accent";
import AnimationDiv from "./ui/animation-div";
import { FEATURED_PROJECTS, PROJECTS } from "@/lib/constants";
import ProjectCard from "./ui/project-card";
import ProjectMinicard from "./ui/project-minicard";

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="flex flex-col justify-center max-w-4xl p-6 pt-24"
    >
      <AnimationDiv
        element={
          <h2 className="font-bold text-5xl tracking-tighter -ml-0.5 mb-8">
            <Accent>Proyectos.</Accent>
          </h2>
        }
      />
      <section className="mx-auto flex flex-col justify-center place-items-center gap-6">
        {FEATURED_PROJECTS.map((project) => (
          <AnimationDiv
            key={project.title}
            element={<ProjectCard project={project} />}
          />
        ))}
      </section>
      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectMinicard key={project.title} project={project} />
        ))}
      </section>
    </section>
  );
}
