import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Segmentation from "@/components/Segmentation";
import WhyUs from "@/components/WhyUs";
import StaffVoice from "@/components/StaffVoice";
import LatestWorks from "@/components/LatestWorks";
import NewsBlog from "@/components/NewsBlog";
import Footer from "@/components/Footer";
import MobileFixedFooter from "@/components/MobileFixedFooter";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Segmentation />
        <WhyUs />
        <StaffVoice />
        <LatestWorks />
        <NewsBlog />
      </main>
      <Footer />
      <MobileFixedFooter />
      {/* Spacer for mobile fixed footer */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
