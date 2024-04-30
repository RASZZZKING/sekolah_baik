"use client"
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

interface DataProps {
    name: string
}
interface MapelAktifProps {
    datax: DataProps[]
    title: string
}

const MapelAktif: FunctionComponent<MapelAktifProps> = ({datax, title}) => {
    const path = usePathname()
    const condition = path.split("/")
    console.log(datax);
    
    
    
  return (
    <>
      <p className="text-lg ms-6 font-semibold">{title} options</p>
      <div className="mt-2 flex gap-2 whitespace-nowrap overflow-x-auto max-w-full">
      <button className={`btn btn-sm ms-6 border-slate-300 bg-base-100 text-slate-600  `}>
          Lihat Semua
        </button>
        {condition[1] !== "lesson" ? datax.map((cb,index)=>(
        <button key={index} className={`btn btn-sm ${index === 0 ? "btn-primary" : "border-slate-300 bg-base-100 text-slate-600"} ${index + 1 === datax.length && "me-3"} `}>
          {cb.name}
        </button>
        ))
            : datax.slice(0,5).map((cb,index)=>(
                <button key={index} className={`btn btn-sm ${index === 0 ? "btn-primary" : "border-slate-300 bg-base-100 text-slate-600"} ${index + 1 === 5 && "me-3"} `}>
                 Semester {index + 1}
                </button>
            ))
        }
      </div>
    </>
  );
};

export default MapelAktif;
