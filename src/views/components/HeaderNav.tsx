import { Code2, Github, Linkedin, Mail } from "lucide-react";
import type { SocialLink } from "@/models/portfolio";
import { ThemeToggle } from "./ThemeToggle";

type HeaderNavProps = {
  navItems: Array<{ label: string; href: string }>;
  socials: SocialLink[];
};

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail
};

export function HeaderNav({ navItems, socials }: HeaderNavProps) {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#perfil" aria-label="Ir al inicio">
        <Code2 size={19} />
        <span>Michael.dev</span>
      </a>

      <nav className="nav-links" aria-label="Secciones del portfolio">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="social-buttons" aria-label="Enlaces sociales">
        <ThemeToggle />
        {socials.map((social) => {
          const Icon = iconMap[social.label as keyof typeof iconMap] ?? Code2;
          const isExternal = social.href.startsWith("http");

          return (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              title={social.label}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </header>
  );
}
