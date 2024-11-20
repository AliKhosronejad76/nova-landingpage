"use client";
import Menu from "../Menu/Menu";
import { useDrawer } from "@/context/DrawerContextProvider";

export default function Drawer(){
    const { drawer } = useDrawer();
    return(
        <div className={`${drawer ? "max-h-full overflow-visible opacity-1" : "opacity-0 max-h-[0px] overflow-hidden transition-[max-height,opacity] [transition:max-height_300ms,opacity_500ms] duration-1000 ease-in-out"} bg-white w-[96%] mx-auto fixed  z-[90]   right-[10px] left-0 top-[90px] p-5 rounded-xl `}>
           <Menu dir="col"/> 
        </div>
    );
}