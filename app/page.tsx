import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PurposeMissionVision } from "@/components/sections/PurposeMissionVision";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { HistoryTimeline } from "@/components/sections/HistoryTimeline";
import { TeamKPIs } from "@/components/sections/TeamKPIs";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <PurposeMissionVision />
        <ValuesSection />
        <HistoryTimeline />
        <TeamKPIs />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
