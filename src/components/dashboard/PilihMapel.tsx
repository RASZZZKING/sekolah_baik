import Link from "next/link";
import { FunctionComponent } from "react";

interface PilihMapelProps {}

const PilihMapel: FunctionComponent<PilihMapelProps> = () => {
  // for (let index = 0; index < 7; index++) {
  // }
  return (
    <div className="grid grid-cols-4 gap-y-6 py-6 px-3 text-dark bg-base-100 rounded-3xl items-center ">
      <Link href={"/lesson/matematika"} className="flex gap-1 items-center justify-between flex-col">
        <div className="h-12  skeleton rounded-md aspect-square"></div>
        <p className="font-bold text-xs">Math</p>
      </Link>
      <Link href={"/lesson/matematika"} className="flex gap-1 items-center justify-between flex-col">
        <div className="h-12  skeleton rounded-md aspect-square"></div>
        <p className="font-bold text-xs">Math</p>
      </Link>
      <Link href={"/lesson/matematika"} className="flex gap-1 items-center justify-between flex-col">
        <div className="h-12  skeleton rounded-md aspect-square"></div>
        <p className="font-bold text-xs">Math</p>
      </Link>
      <Link href={"/lesson/matematika"} className="flex gap-1 items-center justify-between flex-col">
        <div className="h-12  skeleton rounded-md aspect-square"></div>
        <p className="font-bold text-xs">Math</p>
      </Link>
      <Link href={"/lesson/matematika"} className="flex gap-1 items-center justify-between flex-col">
        <div className="h-12  skeleton rounded-md aspect-square"></div>
        <p className="font-bold text-xs">Math</p>
      </Link>
      <Link href={"/lesson/matematika"} className="flex gap-1 items-center justify-between flex-col">
        <div className="h-12  skeleton rounded-md aspect-square"></div>
        <p className="font-bold text-xs">Math</p>
      </Link>
      <Link href={"/lesson/matematika"} className="flex gap-1 items-center justify-between flex-col">
        <div className="h-12  skeleton rounded-md aspect-square"></div>
        <p className="font-bold text-xs">Math</p>
      </Link>
      <Link href={"/lesson/matematika"} className="flex gap-1 items-center justify-between flex-col">
        <div className="h-12  skeleton rounded-md aspect-square"></div>
        <p className="font-bold text-xs">Math</p>
      </Link>
      
    </div>
  );
};

export default PilihMapel;
