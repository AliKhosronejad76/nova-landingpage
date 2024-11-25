"use client";

import {useRef , useContext , createContext , useState } from "react";

const NavContext = createContext();

export default function NavContextProvider({children}){
    const [sectionId , setSectionId] = useState(1);
    const home = useRef(null);
    const services = useRef(null);
    const about = useRef(null);
    const portfolio = useRef(null);
    const pricing = useRef(null);
    const ourTeam = useRef(null);
    const contact = useRef(null);

    const scrolltoSection = (elementRef , setDrawer )=>{
        window.scrollTo({
            top:elementRef.current.offsetTop , 
            behavior:'smooth',
        });
        console.log(elementRef);
        console.log(window);
    }
    
    return(
        <NavContext value={{
            home , 
            services , 
            about ,
            portfolio ,
            pricing , 
            ourTeam , 
            contact ,
            sectionId ,
            setSectionId ,
            scrolltoSection,
        }}>
            {children}
        </NavContext>
    );
}

export const useNav = ()=> useContext(NavContext);