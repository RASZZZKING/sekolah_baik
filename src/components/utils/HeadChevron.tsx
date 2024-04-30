"use client"
import { CaretLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

interface HeadChevronProps {
    title: string
}

const HeadChevron: FunctionComponent<HeadChevronProps> = ({title}) => {
    const router = useRouter(
    )
    const handleRoute = () => {
        router.back()
    }
  return (
    <div className="flex justify-between px-6 items-center">
      <CaretLeft size={20} weight="bold" onClick={handleRoute} className="cursor-pointer" />
      <p className="text-xl font-bold capitalize">{title}</p>
      <div className="h-10 bg-slate-400 skeleton aspect-square rounded-xl flex justify-end">
        <div className="absolute w-3 h-3 border-2 border-white bg-primary rounded-full -mt-0.5 -mr-0.5 "></div>
      </div>
    </div>
  );
};

export default HeadChevron;
