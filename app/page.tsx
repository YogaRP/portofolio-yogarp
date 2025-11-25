import { HeroSection } from "../components/sections/hero-section";
import { AboutSection } from "../components/sections/about-section";
import { ProjectsSection } from "../components/sections/projects-section";
import { ExperienceSection } from "../components/sections/experience-section";
import { TestimonialsSection } from "../components/sections/testimonials-section";
import { ContactSection } from "../components/sections/contact-section";
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
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
