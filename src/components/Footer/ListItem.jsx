import Link from "next/link";


export default function ListItem({href , title }){
    return(
        <li className="mb-3 text-sm transition duration-300 hover:text-sky-700">
            <Link href={href}>
                {title}
            </Link>
        </li>
    );
}