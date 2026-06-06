import type { PortfolioProfile } from "@/models/portfolio";
import { StackExplorer } from "./StackExplorer";

type SystemSectionProps = {
  profile: PortfolioProfile;
};

export function SystemSection({ profile }: SystemSectionProps) {
  return (
    <section className="section-shell system-section" id="sistema">
      <div className="section-kicker">Tecnologías</div>
      <div className="section-heading-row">
        <h2>Negocio, código y datos en una misma forma de trabajar.</h2>
        <p>
          El portfolio mantiene arquitectura MVC: el CV vive como modelo, el controlador arma el
          contenido para pantalla y las vistas se encargan de la experiencia interactiva.
        </p>
      </div>

      <StackExplorer profile={profile} />
    </section>
  );
}
