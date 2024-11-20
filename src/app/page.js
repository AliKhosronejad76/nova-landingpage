import Customers from "@/components/Customers/Customers";
import Contact from "@/components/Contact/Contact";
import ClientComments from "@/components/ClientComments/ClientComments";
import OurTeam from "@/components/ourTeam/OurTeam";
import Banner from "@/components/Banner/Banner";
import InterduceServices from "@/components/InterduceServices/InterdeuceServices";
import AboutSection from "@/components/AboutSection/AboutSection";
import Portfolio from "@/components/Portfolio/Portfolio";
import Pricing from "@/components/Pricing/Pricing";


export default function Home() {
  return (
      <>
        <Banner/>
        <InterduceServices/>
        <AboutSection/>
        <Portfolio/>
        <Pricing/>
        <OurTeam/>
        <ClientComments/>
        <Contact />
        <Customers/>
      

      </>
  );
}
