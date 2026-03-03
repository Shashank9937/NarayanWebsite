import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CorporateOverview from "@/components/CorporateOverview";
import BusinessSegments from "@/components/BusinessSegments";
import GlobalImpact from "@/components/GlobalImpact";
import StrategicBoard from "@/components/StrategicBoard";
import SustainabilityESG from "@/components/SustainabilityESG";
import InfrastructureOperations from "@/components/InfrastructureOperations";
import GovernanceCompliance from "@/components/GovernanceCompliance";
import EnterpriseInquiry from "@/components/EnterpriseInquiry";
import Footer from "@/components/Footer";
import PremiumLoader from "@/components/PremiumLoader";

export default function Home() {
  return (
    <main className="bg-brand-charcoal text-white min-h-screen">
      <PremiumLoader />
      <Navbar />
      <Hero />
      <CorporateOverview />
      <BusinessSegments />
      <GlobalImpact />
      <StrategicBoard />
      <SustainabilityESG />
      <InfrastructureOperations />
      <GovernanceCompliance />
      <div className="relative overflow-hidden py-20 px-12 bg-brand-surface border-y border-white/5">
        <div className="absolute inset-0 neo-grid opacity-10 pointer-events-none" />
        <EnterpriseInquiry />
      </div>
      <Footer />
    </main>
  );
}
