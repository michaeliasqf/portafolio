"use client";

import { Braces, Database, Layers3, Sparkles } from "lucide-react";
import { useState } from "react";
import type { PortfolioProfile, Technology } from "@/models/portfolio";
import { TiltPanel } from "./TiltPanel";
import { TechLogo } from "./TechLogo";

type StackCategory = Technology["category"];

const categoryBySkill = ["frontend", "backend", "database"] as const;
const icons = [Sparkles, Braces, Database, Layers3];

const categoryNames: Record<StackCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Bases de datos",
  tools: "Herramientas",
  data: "Análisis"
};

function orderTechnologies(technologies: Technology[], activeCategory: StackCategory) {
  return [
    ...technologies.filter((technology) => technology.category === activeCategory),
    ...technologies.filter((technology) => technology.category !== activeCategory)
  ];
}

export function StackExplorer({ profile }: { profile: PortfolioProfile }) {
  const [activeCategory, setActiveCategory] = useState<StackCategory>("frontend");
  const orderedTechnologies = orderTechnologies(profile.technologies, activeCategory);

  return (
    <>
      <div className="tech-mobile-hint">Desliza con el dedo para explorar tecnologías.</div>

      <div className="tech-marquee" aria-label="Tecnologías del CV">
        <div className="tech-track">
          {[...orderedTechnologies, ...orderedTechnologies].map((technology, index) => (
            <TechLogo key={`${technology.name}-${index}-${activeCategory}`} technology={technology} />
          ))}
        </div>
      </div>

      <div className="skill-grid">
        {profile.skills.map((group, index) => {
          const Icon = icons[index] ?? Layers3;
          const category = categoryBySkill[index] ?? "tools";
          const isActive = activeCategory === category;

          return (
            <button
              type="button"
              key={group.title}
              className="skill-button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
            >
              <TiltPanel className={`skill-card accent-${group.accent} ${isActive ? "is-active" : ""}`}>
                <div className="card-icon">
                  <Icon size={22} />
                </div>
                <div>
                  <span className="skill-category">{categoryNames[category]}</span>
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-detail">
                  <p>{group.description}</p>
                  <ul>
                    {group.capabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                </div>
                <div className="chip-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </TiltPanel>
            </button>
          );
        })}
      </div>
    </>
  );
}
