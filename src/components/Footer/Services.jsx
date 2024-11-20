import ListItem from "./ListItem";

export default function Services(){
    return(
        <div className="w-full md:w-[48%] lg:w-[21%] flex flex-col gap-8" >
            <h3 className="yekanbakhFat text-2xl">خدمات</h3>
            <ul className="yekahbakhLight">
                <ListItem  href="/" title="طزاحی وب" />
                <ListItem  href="/" title="توسعه وب" />
                <ListItem  href="/" title="خدمات سئو " />
                <ListItem  href="/" title="وبلاگ نویسی" />
            </ul>
        </div>
    );
}