import { getPortfolioViewModel } from "@/controllers/portfolioController";
import { HeaderNav } from "./components/HeaderNav";
import { HeroSection } from "./components/HeroSection";
import { ProcessContactSection } from "./components/ProcessContactSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SystemSection } from "./components/SystemSection";

export function PortfolioPage() {
  const viewModel = getPortfolioViewModel();

  return (
    <main>
      <HeaderNav navItems={viewModel.navItems} socials={viewModel.profile.socials} />
      <HeroSection profile={viewModel.profile} signature={viewModel.signature} />
      <SystemSection profile={viewModel.profile} />
      <ProjectsSection projects={viewModel.profile.projects} filters={viewModel.projectFilters} />
      <ProcessContactSection profile={viewModel.profile} />
    </main>
  );
}
