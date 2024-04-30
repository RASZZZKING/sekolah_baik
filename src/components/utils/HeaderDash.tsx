import Link from "next/link";
import { FunctionComponent } from "react";

interface HeaderDashProps {
    title: string,
    subtitle?: string,
    href: string,
}
 
const HeaderDash: FunctionComponent<HeaderDashProps> = ({title, href, subtitle}) => {
    return ( 
        <div className="flex px-6 justify-between gap-2">
            <div className="flex flex-col gap-1">
                <p className="text-base font-bold">{title}</p>
                <p className="text-sm text-opacity-60">{subtitle}</p>
            </div>
            <Link href={href} className="text-secondary flex justify-center items-center">See All</Link>
        </div>
     );
}
 
export default HeaderDash;