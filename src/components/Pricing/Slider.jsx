"use client";

import { FaDollarSign } from "react-icons/fa";




export default function Slider({sliderRef}){
   
     return(
        <div ref={sliderRef} className={` w-[300px] flex items-center   max-w-[1900px] overflow-scroll scroll-container transition-transform duration-300 ease-in-out`}>
            <div className="w-full flex gap-5 ">
            <Card data={{
                category:"طراحی عمومی",
                title:"طراحی وب",
                price:"29.00",
                items:[
                    {title:"طراحی دقیق و حرفه ای"},
                    {title:"صفحات نمونه"},
                    {title:"تیم بشتیبانی فوق العاده"},
                    {title:"بشتیبانی دایمی"},        
                ],
            }}/>
              <Card data={{
                category:"طراحی استاندارد",
                title:"توسعه وب",
                price:"429.00",
                items:[
                    {title:"طراحی دقیق و حرفه ای"},
                    {title:"صفحات نمونه"},
                    {title:"تیم بشتیبانی فوق العاده"},
                    {title:"بشتیبانی دایمی"},        
                ],
            }}/>
              <Card data={{
                category:"طراحی حرفه ای",
                title:"طراحی وب",
                price:"297.00",
                items:[
                    {title:"طراحی دقیق و حرفه ای"},
                    {title:"صفحات نمونه"},
                    {title:"تیم بشتیبانی فوق العاده"},
                    {title:"بشتیبانی دایمی"},        
                ],
            }}/>
        </div>
        </div>
       
    );
}

function Card({data}){
    return(
        <div className="sliderItem min-w-[85%]  shadow-sm bg-white h-full flex flex-col p-8 rounded-xl justify-start items-center gap-9 text-gay-700">
            <h6 className="text-xl yekanbakhBold text-gray-600">{data.category}</h6>
            <h1 className="text-3xl yekanbakhFat text-gray-700">{data.title}</h1>
            <div className="flex items-center gap-3 text-3xl">
                <span className="text-4xl">{data.price}</span> 
                <FaDollarSign className="text-sky-700"/>
            </div>
            <ul className="flex flex-col gap-4 text-center text-gray-700 yekanbakhLight">
                {
                    data.items.map((item , index )=><li key={index} >{item.title}</li>)
                }
            </ul>
            <div>
                <button className="yekanbakhBold bg-[#2f80ed] text-white rounded-3xl text-xl w-[180px] h-[44px]">
                    شروع کن
                </button>
            </div>
        </div>
    )
}




