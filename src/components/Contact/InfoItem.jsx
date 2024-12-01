export default function InfoItem({icon , info1 , info2}){
    return(
        <div className="mb-6 lg:mb-0 w-full bg-white rounded-lg flex items-center gap-4 py-4 px-3 transition duration-500 sadow-lg hover:shadow-xl">
            <div className="min-w-16 min-h-16 flex items-center justify-center text-white bg-[#2f80ed] text-3xl rounded-full">
                {icon}
            </div>
            <div className="flex flex-col gap-2 text-sm w-auto">
                <span>{info1}</span>
                {info2 && <sapn>{info2}</sapn>}
            </div>
        </div>
    );
}