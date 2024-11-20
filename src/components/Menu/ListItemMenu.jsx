"use client";
import { useDrawer } from "@/context/DrawerContextProvider";


export default  function ListItemMenu({title , handler , section }){
    const {setDrawer} = useDrawer();

    const clickhandler =()=>{
        handler(section);
        setDrawer(false);
    }

    return(
        <li 
        onClick={clickhandler}
        className="w-[80px] h-[33px]  p-2 text-sm hover:text-blue-800 hover:border hover:border-blue-800 rounded-3xl flex items-center justify-center text-nowrap transition duration-400 cursor-pointer">
             {title}
        </li>
    );
} 