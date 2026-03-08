import { Navigation } from "../../components/layout/navigation";
import { Footer } from "../../components/layout/footer";
import Achievements from "@/components/pages/achievment";

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        <Achievements />
      </main>

      <Footer />
    </div>
  );
}
