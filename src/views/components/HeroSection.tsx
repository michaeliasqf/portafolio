import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioProfile } from "@/models/portfolio";
import { TiltPanel } from "./TiltPanel";

type HeroSectionProps = {
  profile: PortfolioProfile;
  signature: string;
};

export function HeroSection({ profile, signature }: HeroSectionProps) {
  return (
    <section className="hero-section section-shell" id="perfil">
      <div className="hero-copy reveal">
        <p className="eyebrow">{signature}</p>
        <h1>
          <span>Michael</span>
          <span>Quintana</span>
        </h1>
        <p className="hero-headline">{profile.headline}</p>
        <p className="hero-pitch">{profile.pitch}</p>
        <div className="hero-actions">
          <a className="primary-action" href="#proyectos">
            Ver proyectos
            <ArrowUpRight size={18} />
          </a>
          <a className="secondary-action" href="#contacto">
            Hablemos
          </a>
        </div>
      </div>

      <div className="portrait-stage reveal delay-1" aria-label="Retrato profesional">
        <TiltPanel className="portrait-card" strength={7}>
          <div className="portrait-frame">
            <Image src={profile.portrait} alt={`Foto de ${profile.name}`} fill priority sizes="(max-width: 900px) 82vw, 420px" />
          </div>
        </TiltPanel>
      </div>

      <div className="metrics-strip reveal delay-2">
        {profile.metrics.map((metric) => (
          <div key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
