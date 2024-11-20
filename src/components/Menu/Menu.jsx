"use client";

import  ListItemMenu  from "./ListItemMenu"
import { useNav } from "@/context/NavContextProvider";


export default function Menu({dir }){
    
    const { 
        scrolltoSection ,
        home ,
        services ,
        about ,
        portfolio ,
        pricing , 
        ourTeam , 
        contact , 
    } = useNav()

    return(
        <ul className={` ${dir === "col" ? "flex-col " : "flex-row " } lg:flex yekanbakhBold text-gray-700`}>
            <ListItemMenu section={home} handler={scrolltoSection} title={"خانه"}/>
            <ListItemMenu section={services} handler={scrolltoSection} title={"امکانات"}/>
            <ListItemMenu section={about} handler={scrolltoSection} title={"درباره ما"}/>
            <ListItemMenu section={portfolio} handler={scrolltoSection} title={"نمونه کارها"}/>
            <ListItemMenu section={pricing} handler={scrolltoSection} title={"جدول قیمت ها"} />
            <ListItemMenu section={ourTeam} handler={scrolltoSection} title={"تیم ما"}/>
            <ListItemMenu section={contact} handler={scrolltoSection} title={"تماس با ما"}/>
        </ul>
    )

}