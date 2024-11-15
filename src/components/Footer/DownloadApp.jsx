import { IoLogoGooglePlaystore } from "react-icons/io5";
import { TfiApple } from "react-icons/tfi";
import Link from "next/link";

export default function DownloadApp(){
    return(
        <div className="flex flex-col gap-8 w-[23%] ">
            <h3 className="text-2xl yekanbakhFat">دانلود برنامه </h3>
            <div className="flex flex-col gap-4">
                <DownloadBox href="/" icon={<TfiApple/>} marketName="AppleStore"/>
                <DownloadBox href="/" icon={<IoLogoGooglePlaystore/>} marketName="PlayStore"/>
            </div>
        </div>
    )
}

function DownloadBox({ href , icon , marketName }){
    return(
        <Link 
            href={href}
            className="flex items-center gap-4 w-full bg-white shadow-lg py-4 px-2 rounded-xl "
        >
            <div className="text-4xl">
                {icon}
            </div>
            <div className="flex flex-col ">
                <span className="mb-2 yekanbakhBold">دانلود از</span>
                <span className="yekanbakhLight">َ{marketName}</span>
            </div>
        </Link>
    );
}