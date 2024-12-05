import "./globals.css";
import "./fonts/font.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrolltoTop/ScrollToTop";
import NavContextProvider from "@/context/NavContextProvider";
import DrawerContextProvider from "@/context/DrawerContextProvider";
export const metadata = {
  title: "Novalanding-app",
  description: "Generated by create next app",
};



export default function RootLayout({children}) {
 
  return (
    <html lang="fa" dir="rtl">
      <DrawerContextProvider>
       <NavContextProvider>

        <body
          className={'overflow-x-hidden'}
        >
            <Header />
            <div className="max-w-screen min-w-screen ">
                {children}
            </div>
            <Footer />
          <ScrollToTop />
        </body>
        </NavContextProvider>
        </DrawerContextProvider>
    </html>
  );
}
