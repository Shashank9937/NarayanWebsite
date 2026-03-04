import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CorporateOverview from "@/components/CorporateOverview";
import BusinessSegments from "@/components/BusinessSegments";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import FuelComparison from "@/components/FuelComparison";
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
    <main className="bg-brand-background text-brand-primary min-h-screen font-body selection:bg-brand-accent/20">
      <PremiumLoader />
      <Navbar />
      <Hero />
      <CorporateOverview />
      <BusinessSegments />
      <ManufacturingProcess />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
      <FuelComparison />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
      <IndustriesServed />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
      <GlobalImpact />
      <StrategicBoard />
      <SustainabilityESG />
      <InfrastructureOperations />
      <GovernanceCompliance />
      <div className="py-24 px-6 bg-brand-surface">
        <EnterpriseInquiry />
      </div>
      <Footer />
    </main>
  );
}
