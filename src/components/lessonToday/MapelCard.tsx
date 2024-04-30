"use client"
import Link from "next/link";
import { FunctionComponent } from "react";

interface MapelCardProps {
    data: Mapel[] | Materi[]
}

const MapelCard: FunctionComponent<MapelCardProps> = ({data}) => {
  return (
    <div className="px-6 flex flex-col gap-6">
        {
            data.slice(3,7).map((cb,index)=>(
      <div key={index} className="rounded-3xl shadow-lg">
        <div className="h-24 bg-slate-400 skeleton rounded-b-none rounded-t-3xl"></div>
        <div className="px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-between gap-2">
              <p className="font-extralight text-sm">{cb.name}</p>
              <p className="font-extralight opacity-60 text-xs">{cb.name} {index + 6} Grade</p>
            </div>
            <Link href={"/lesson/detail"} className="btn btn-xs btn-primary">Take the Class</Link>
          </div>
        </div>
      </div>

            ))
        }
    </div>
  );
};

export default MapelCard;
