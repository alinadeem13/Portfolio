import Banner from "@/components/Banner";
import Collaboration from "@/components/Collaboration";
import FeaturetteCard from "@/components/FeaturetteCard";
import Footer from "@/components/Footer";
import HeroText from "@/components/HeroText";
// import CompanyShowcase from "@/components/PortfolioShowCase";
import PortfolioShowcase from "@/components/RecentWork";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Banner />

      <div className="bg-[#42f584] pt-16 pb-32 px-4 w-full">
        <HeroText
          titleText={"Hi, I'm Ali. Nice to meet you."}
          description="Since beginning my journey as a freelance developer 2 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to bring their ideas to life. I'm quietly confident, naturally curious, and perpetually working on improving my chops."
        />
      </div>

      <div className="relative -mt-24 px-4 max-w-6xl mx-auto w-full">
        <FeaturetteCard />
      </div>
      <PortfolioShowcase />
      {/* <div className="w-full h-[1px] bg-gray-200 my-16" />
      <CompanyShowcase /> */}
      <div className="w-full h-[1px] bg-gray-200 my-16" />
      <Collaboration />
      <Footer />
    </div>
  );
}
