import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CorporateOverview from "@/components/CorporateOverview";
import BusinessSegments from "@/components/BusinessSegments";
import IndustriesServed from "@/components/IndustriesServed";
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
    <main className="bg-[#000000] text-white min-h-screen font-body selection:bg-blue-500/30">
      <PremiumLoader />
      <Navbar />
      <Hero />
      <CorporateOverview />
      <BusinessSegments />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <IndustriesServed />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <GlobalImpact />
      <StrategicBoard />
      <SustainabilityESG />
      <InfrastructureOperations />
      <GovernanceCompliance />
      <div className="py-24 px-6 bg-[#000000]">
        <EnterpriseInquiry />
      </div>
      <Footer />
    </main>
  );
}
