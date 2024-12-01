import About from "./About";
import QuickLinks from "./QuickLinks";
import Services from "./Services";
import DownloadApp from "./DownloadApp";



export default function Footer(){
    return(
        <footer className="text-gray-600 h-full">
            <div className="h-full flex flex-col md:flex-row md:flex-wrap gap-24 md:gap-6 lg:gap-0 px-6 md:justify-between pt-8 md:pt-28 pb-16 bg-[#f3f3f3]">
                <About/>
                <QuickLinks/>
                <Services/>
                <DownloadApp/>
            </div>
        </footer>
    );
}