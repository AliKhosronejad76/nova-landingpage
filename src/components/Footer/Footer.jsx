import About from "./About";
import QuickLinks from "./QuickLinks";
import Services from "./Services";
import DownloadApp from "./DownloadApp";



export default function Footer(){
    return(
        <footer className="text-gray-600 ">
            <div className="flex px-6 justify-between pt-28 pb-16 bg-[#f3f3f3]">
                <About/>
                <QuickLinks/>
                <Services/>
                <DownloadApp/>
            </div>
        </footer>
    );
}