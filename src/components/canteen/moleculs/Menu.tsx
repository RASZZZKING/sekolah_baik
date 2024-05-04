import Link from "next/link";
import { FunctionComponent } from "react";

interface MenuProps {
    href: string
    title: string
    image: string
}
 
const Menu: FunctionComponent<MenuProps> = ({href, title, image}) => {
    return ( 
        <Link href={href} className="flex flex-col gap-1">
          <div className="bg-slate-400 skeleton h-12 w-12 rounded-lg"></div>
          <p className="text-sm text-center">{title}</p>
        </Link>
     );
}
 
export default Menu;