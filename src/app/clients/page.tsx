import Navbar from "@/components/Navbar";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
}
