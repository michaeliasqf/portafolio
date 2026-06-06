import { ExternalLink, GitBranch, RadioTower } from "lucide-react";
import type { Project } from "@/models/portfolio";
import { ProjectPreviewCarousel } from "./ProjectPreviewCarousel";

type ProjectsSectionProps = {
  projects: Project[];
  filters: string[];
};

export function ProjectsSection({ projects, filters }: ProjectsSectionProps) {
  return (
    <section className="section-shell project-section" id="proyectos">
      <div className="section-kicker">Proyectos destacados</div>
      <div className="section-heading-row">
        <h2>Proyectos con foco en gestión, visualización e IA local.</h2>
        <div className="filter-rail" aria-label="Tecnologías y categorías">
          {filters.slice(0, 8).map((filter) => (
            <span key={filter}>{filter}</span>
          ))}
        </div>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <ProjectPreviewCarousel project={project} />

            <div className="project-card-top">
              <span>{project.type}</span>
              <RadioTower size={18} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="project-signal">
              <GitBranch size={17} />
              {project.signal}
            </div>
            <div className="stack-row">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a className="ghost-link" href={project.repository} target="_blank" rel="noreferrer">
              Ver repositorio
              <ExternalLink size={15} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
