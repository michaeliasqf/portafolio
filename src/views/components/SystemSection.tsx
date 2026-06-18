import type { PortfolioProfile } from "@/models/portfolio";
import { StackExplorer } from "./StackExplorer";

type SystemSectionProps = {
  profile: PortfolioProfile;
};

export function SystemSection({ profile }: SystemSectionProps) {
  return (
    <section className="section-shell system-section" id="sistema">
      <div className="section-kicker">Tecnologías</div>
      <div className="section-heading-row system-heading-row">
        <h2>Negocio, código y datos en una misma forma de trabajar.</h2>
      </div>

      <StackExplorer profile={profile} />
    </section>
  );
}
