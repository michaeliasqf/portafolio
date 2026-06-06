import type { IconType } from "react-icons";
import {
  SiCss,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite
} from "react-icons/si";
import { BarChart3, LineChart, Workflow } from "lucide-react";
import type { Technology } from "@/models/portfolio";

const iconMap: Record<string, IconType> = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  Vite: SiVite,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Python: SiPython,
  Django: SiDjango,
  FastAPI: SiFastapi,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  GitHub: SiGithub,
  Figma: SiFigma,
  Pandas: SiPandas
};

const fallbackMap = {
  Matplotlib: LineChart,
  PowerBI: BarChart3,
  n8n: Workflow
};

const categoryLabel = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Datos",
  tools: "Tools",
  data: "Análisis"
};

export function TechLogo({ technology }: { technology: Technology }) {
  const Icon = iconMap[technology.name] ?? fallbackMap[technology.name as keyof typeof fallbackMap];

  return (
    <div className={`tech-logo tech-${technology.category}`}>
      <Icon size={25} aria-hidden="true" />
      <span>{technology.name}</span>
      <small>{categoryLabel[technology.category]}</small>
    </div>
  );
}
