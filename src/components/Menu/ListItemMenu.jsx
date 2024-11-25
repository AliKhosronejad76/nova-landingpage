"use client";
import { useState  , useEffect } from "react";
import { useDrawer } from "@/context/DrawerContextProvider";
import { useNav } from "@/context/NavContextProvider";

export default  function ListItemMenu({title , handler , section , sectionNumber}){
    const {setDrawer} = useDrawer();
    const {setSectionId , sectionId} = useNav();
    const [active , setActive] = useState(null);
    useEffect(()=>{
        if(sectionId === sectionNumber){
            setActive(true);
        }else{
            setActive(false);
        }

    },[sectionId , sectionNumber]);

    const clickhandler =()=>{
        handler(section);
        setDrawer(false);
        setSectionId(sectionNumber);

       
    }

    return(
        <li 
        onClick={clickhandler}
        className={`${active ? "text-blue-500 border-2 border-blue-800":""} w-[80px] h-[33px]  p-2 text-sm hover:text-blue-800 hover:border hover:border-blue-800 rounded-3xl flex items-center justify-center text-nowrap transition duration-400 cursor-pointer`}>
             {title}
        </li>
    );
} 