"use client";

import { createContext , useContext , useState } from "react";



const DrawerContext = createContext();

export default function DrawerContextProvider({children}){
    const [drawer , setDrawer] = useState(false);
    
    return(
        <DrawerContext.Provider value={{ drawer , setDrawer }}>
            {children}
        </DrawerContext.Provider>
    );
}

export const useDrawer = ()=>useContext(DrawerContext) 