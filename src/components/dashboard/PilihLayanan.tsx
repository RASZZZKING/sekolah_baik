import { FunctionComponent } from "react";

interface PilihLayananProps {}

const PilihLayanan: FunctionComponent<PilihLayananProps> = () => {
  return (
    <div className="py-6 flex flex-row max-w-full whitespace-nowrap overflow-auto gap-4 text-white">
      <div className="text-sm flex justify-end">
        <p className="font-semibold">School lesson</p>
          <div className="h-3 rounded-md text-center text-[7.5px] text-white text-xs items-center -mt-0.5 -mr-2 aspect-square bg-accent flex justify-center">
            6
        </div>
      </div>
      <p className="text-sm">Ulangan Harian</p>
      <p className="text-sm">Exam 2023</p>
      <p className="text-sm">UTBK</p>
      <p className="text-sm">OSN</p>
      <p className="text-sm">Olimpic</p>
    </div>
  );
};

export default PilihLayanan;
