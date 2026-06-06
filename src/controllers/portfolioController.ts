import { portfolioProfile } from "@/models/portfolio";

export function getPortfolioViewModel() {
  const featuredProject = portfolioProfile.projects[0];
  const projectFilters = Array.from(
    new Set(portfolioProfile.projects.flatMap((project) => [project.type, ...project.stack]))
  );

  return {
    profile: portfolioProfile,
    featuredProject,
    projectFilters,
    navItems: [
      { label: "Perfil", href: "#perfil" },
      { label: "Tecnologías", href: "#sistema" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Contacto", href: "#contacto" }
    ],
    signature: `${portfolioProfile.role} · ${portfolioProfile.location}`
  };
}
