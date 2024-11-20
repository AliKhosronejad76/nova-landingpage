"use client";
import { useNav } from "@/context/NavContextProvider";
import { FaChartLine } from "react-icons/fa6";
import { VscSymbolColor } from "react-icons/vsc";
import { MdOutlineGraphicEq } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { MdOutlineSecurity } from "react-icons/md";
import { TbDeviceImacCode } from "react-icons/tb";



export default function InterduceServices(){
    const {services} = useNav();
    return(
        <section ref={services} className="pt-24 flex flex-col gap-8">
           <div>
                <h1 className="text-center text-5xl yekanbakhFat my-5 text-gray-600">خدمات ما</h1>
                <p className="text-center yekanbakhLight text-sm pb-6">
                    با ما در وقت و هزینه خود صرفه جویی کنید
                </p>
           </div>
           
            <div className="flex flex-wrap justify-between px-10 sm:px-20">
                <ServiceItem icon={<FaChartLine/>} title={"تحلیل کسب و کار"} desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
                <ServiceItem icon={<VscSymbolColor/>} title={"خدمات چاب"} desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
                <ServiceItem icon={<MdOutlineGraphicEq/>} title={"طراحی گرافیک"} desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
                <ServiceItem icon={<HiCode/>} title={"طراحی وب"} desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
                <ServiceItem icon={<MdOutlineSecurity/>} title={"امنیت"} desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
                <ServiceItem icon={<TbDeviceImacCode/>} title={"توسعه وب"} desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."/>
            </div>
        </section>
    );
}


function ServiceItem({icon , title , desc}){
    return(
        <div className="shadow-[0px_10px_0px_-2px_rgba(0,0,0,0.75)] w-full md:w-[49%] lg:w-[32%] flex flex-col items-center justify-center px-4 gap-7 mb-20  rounded-[40px] h-[350px]">
            <div className="text-7xl text-blue-600 mb-4 ">
                {icon}
            </div>
            <h5 className="yekanbakhMed text-3xl text-gray-700">{title}</h5>

            <div>
                <p className="text-center text-base text-gray-700">{desc}</p>
            </div>
        </div>
    );
}