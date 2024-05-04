"use client"
import { CaretLeft, Plus } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

interface HeaderCostumProps {
    title: string
    children: React.ReactNode
}
 
const HeaderCostum: FunctionComponent<HeaderCostumProps> = ({children, title}) => {
    const router = useRouter();
  const handleRoute = () => {
    router.back();
  };
    return ( 
        <div className="flex justify-between px-6 items-center">
        <CaretLeft
          onClick={handleRoute}
          size={24}
          weight="bold"
          className="cursor-pointer"
        />
        <p className="text-xl font-bold capitalize">{title}</p>
        {children}
      </div>
     );
}
 
export default HeaderCostum;