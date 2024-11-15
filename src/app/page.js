import Customers from "@/components/Customers/Customers";
import Contact from "@/components/Contact/Contact";
import ClientComments from "@/components/ClientComments/ClientComments";
import OurTeam from "@/components/ourTeam/OurTeam";
import Banner from "@/components/Banner/Banner";
import InterduceServices from "@/components/InterduceServices/InterdeuceServices";
import AboutSection from "@/components/AboutSection/AboutSection";
import Portfolio from "@/components/Portfolio/Portfolio";



export default function Home() {
  return (
      <div>
        <Banner/>
        <InterduceServices/>
        <AboutSection/>
        <Portfolio/>
        <OurTeam/>
        <ClientComments/>
        <Contact />
        <Customers/>
      

      </div>
  );
}
