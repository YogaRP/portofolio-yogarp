import { Navigation } from "../../components/layout/navigation";
import { Footer } from "../../components/layout/footer";
import Projects from "@/components/pages/project";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        <Projects />
      </main>

      <Footer />
    </div>
  );
}
