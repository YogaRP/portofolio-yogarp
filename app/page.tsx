import { HeroSection } from "../components/pages/home/hero-section";
import { AboutSection } from "../components/pages/home/about-section";
import { ProjectsSection } from "../components/pages/home/projects-section";
import { ExperienceSection } from "../components/pages/home/experience-section";
import CertificateSection from "../components/pages/home/certificate-section";
import { ContactSection } from "../components/pages/home/contact-section";
import { Footer } from "../components/layout/footer";
import { Navigation } from "../components/layout/navigation";

export default function HomePage() {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CertificateSection />
        <ExperienceSection />
        {/* <TestimonialsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
