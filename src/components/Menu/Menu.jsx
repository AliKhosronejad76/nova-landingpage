"use client";
import { useState , useEffect } from "react";
import  ListItemMenu  from "./ListItemMenu"
import { useNav } from "@/context/NavContextProvider";


export default function Menu({dir}){
    const { 
        scrolltoSection ,
        home ,
        services ,
        about ,
        portfolio ,
        pricing , 
        ourTeam , 
        contact , 
        sectionId ,
        setSectionId ,
    } = useNav();
    const [height , setHeight] = useState(0);

    useEffect(()=>{
        const help = ()=>{
            setHeight(window.scrollY);
            
        };
        window.addEventListener("scroll" , help );
        function check(){
            console.log(height);
            if(height < 400){
                setSectionId(1)
            }
            if(height >= 480 && height <= 1590){
                setSectionId(2);
            }
            if(height >= 1591 && height <= 2332){
                setSectionId(3);
            }
            if(height >= 2338 && height <= 3804){
                setSectionId(4);

            }
            if(height >= 3804 && height <= 4342){
                setSectionId(5);
            }
            if(height >= 4342 && height <= 6722){
                setSectionId(6);
            }
            if(height >= 6722){
                setSectionId(7);
            }


        }
        check(); 
    },[height])

    return(
        <ul className={` ${dir === "col" ? "flex-col " : "flex-row " }   lg:flex yekanbakhBold text-gray-700`}>
            <ListItemMenu sectionNumber={1} section={home} handler={scrolltoSection} title={"خانه"}/>
            <ListItemMenu sectionNumber={2} section={services} handler={scrolltoSection} title={"امکانات"}/>
            <ListItemMenu sectionNumber={3} section={about} handler={scrolltoSection} title={"درباره ما"}/>
            <ListItemMenu sectionNumber={4} section={portfolio} handler={scrolltoSection} title={"نمونه کارها"}/>
            <ListItemMenu sectionNumber={5} section={pricing} handler={scrolltoSection} title={"جدول قیمت ها"} />
            <ListItemMenu sectionNumber={6} section={ourTeam} handler={scrolltoSection} title={"تیم ما"}/>
            <ListItemMenu sectionNumber={7} section={contact} handler={scrolltoSection} title={"تماس با ما"}/>
        </ul>
    )

}