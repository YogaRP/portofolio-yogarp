import { Navigation } from "../../components/layout/navigation";
import { Footer } from "../../components/layout/footer";
import Contacts from "@/components/pages/contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        <Contacts />
      </main>

      <Footer />
    </div>
  );
}
