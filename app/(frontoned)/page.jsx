import Calculator from "@/components/calculator/calculator";
import { AboutSection } from "../../components/AboutUs/aboutus";
import { HeroSection } from "../../components/herosection/herosection";
import { FAQ } from "@/components/faq/faq";
import SubscribCard from "@/components/partners/partners";
import { ContactUs } from "@/components/ContactUs/contactus";
import InvestmentTabs from "@/components/InvestmentTabs/investment";
import Concern from "@/components/concern/concern";
import InvestmentSection from "@/components/InvestmentSection/InvestmentSection";
import FeatureSection from "@/components/features/features";
import Testimonials from "@/components/testimonials/testimonials";
import SocialMediaSidebar from "@/components/socialMedia";
import { getAddisLogos, getArn, getServiceData, getSiteData, getSocialMedia, getTestimonials } from "@/lib/functions";

export default async function Page() {
  const testimonials = await getTestimonials();
  const sitedata = await getSiteData();
     const service=await getServiceData()
      const arn=await getArn()
      const socialMedia=await getSocialMedia()
      const amclogos= await getAddisLogos()
  return (
    <div className="">
      <main className="overflow-x-hidden">
        <HeroSection sitedata={sitedata}/>
        <AboutSection sitedata={sitedata}/>
        <div className="" id="">
          <InvestmentTabs service={service}/>
        </div>

        <Concern />
        <InvestmentSection />

        {/* <FeatureSection /> */}
        <Testimonials testimonials={testimonials} />
        <SubscribCard amclogos={amclogos}/>
        <Calculator />

        <ContactUs sitedata={sitedata} />
        <FAQ />
  

        <SocialMediaSidebar sitedata={sitedata}/>
      </main>
    </div>
  );
}
