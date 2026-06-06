import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  GraduationCap,
  Mail,
  MapPin,
  Megaphone,
  Send
} from "lucide-react";
import type { PortfolioProfile } from "@/models/portfolio";

type ProcessContactSectionProps = {
  profile: PortfolioProfile;
};

const experienceIcons = [Megaphone, Building2, GraduationCap];

function splitExperienceTitle(title: string) {
  const [company, role] = title.split(" - ");
  return {
    company: company ?? title,
    role: role ?? ""
  };
}

export function ProcessContactSection({ profile }: ProcessContactSectionProps) {
  const email = profile.socials.find((link) => link.label === "Email")?.href ?? "mailto:michaeliasqf@gmail.com";
  const linkedIn = profile.socials.find((link) => link.label === "LinkedIn")?.href ?? "#";

  return (
    <section className="section-shell contact-section">
      <div className="section-kicker experience-kicker">Experiencia laboral</div>
      <div className="process-list">
        {profile.experience.map((step, index) => {
          const Icon = experienceIcons[index] ?? BadgeCheck;
          const title = splitExperienceTitle(step.title);

          return (
            <article className="process-step" key={step.year}>
              <div className="process-icon">
                <Icon size={22} />
              </div>
              <div className="process-content">
                <span>{step.year}</span>
                <h3>{title.company}</h3>
                {title.role ? <strong>{title.role}</strong> : null}
                <p>{step.description}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="contact-panel" id="contacto">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>Disponible para integrarme a un equipo técnico.</h2>
          <p>{profile.availability}</p>
        </div>

        <div className="contact-actions">
          <a href={email}>
            <Mail size={18} />
            Email
          </a>
          <a href={linkedIn} target="_blank" rel="noreferrer">
            <Send size={18} />
            LinkedIn
          </a>
          <span>
            <MapPin size={18} />
            {profile.location}
          </span>
        </div>
        <a className="primary-action contact-cta" href="#perfil">
          Volver arriba
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
