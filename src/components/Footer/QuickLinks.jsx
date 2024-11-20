import ListItem from "./ListItem";


export default function QuickLinks(){
    return(
        <div className="w-full md:w-[48%] lg:w-[24%] flex flex-col gap-8" >
            <h3 className="yekanbakhFat text-2xl">دسترسی سریع</h3>
            <ul className="yekahbakhLight">
                <ListItem title={"خانه "} href="/"/>
                <ListItem title={"درباره ما"} href="/"/>
                <ListItem title={"خدمات"} href="/"/>
                <ListItem title={"گواهینامه"} href="/"/>
                <ListItem title={"تماس"} href="/"/>

            </ul>
        </div>
    );
}
