import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CorporateOverview from "@/components/CorporateOverview";
import BusinessSegments from "@/components/BusinessSegments";
import IndustriesServed from "@/components/IndustriesServed";
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
      <IndustriesServed />
      <SustainabilityESG />
      <InfrastructureOperations />
      <GovernanceCompliance />
      <EnterpriseInquiry />
      <Footer />
    </main>
  );
}
