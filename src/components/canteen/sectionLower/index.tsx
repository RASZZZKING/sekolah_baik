import SearchInputLesson from "@/components/lessonToday/SearhInputLesson";
import { dataMapel } from "@/models/data/frontEnd/dataMapel";
import { CaretRight, MapPin, Star } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { FunctionComponent } from "react";

interface SectionLowCanteenProps {}

const SectionLowCanteen: FunctionComponent<SectionLowCanteenProps> = () => {
  const Fory = () => (
    <div className="flex justify-between items-center">
      <div className="text-lg font-semibold">For you</div>
      <Link href={"/canteen/product/populer"} className="text-xs text-primary flex gap-1 items-center">
        <p>See more</p>
        <CaretRight size={12} weight="bold" />{" "}
      </Link>
    </div>
  );
  return (
    <div className=" bg-base-100 min-h-svh -mt-[4.5rem]">
      <div className="pt-[6.5rem] pb-8 flex flex-col gap-6">
        <SearchInputLesson />
        <div className="mt-2 flex gap-2 whitespace-nowrap overflow-x-auto max-w-full">
          {dataMapel.map((cb, index) => (
            <button
              key={index}
              className={`btn btn-sm ${index === 0 && "ms-6"} ${
                index === 0
                  ? "btn-primary"
                  : "border-slate-300 bg-base-100 text-slate-600"
              } ${index + 1 === dataMapel.length && "me-3"} `}
            >
              {"FOOD"}
            </button>
          ))}
        </div>
        <div className="px-6">
          <Fory />
        </div>
        <div className="px-6">
          <div className="grid grid-cols-2 gap-4">
            <Link href={"/canteen/product"} className="bg-base-100 shadow-lg rounded-xl">
              <div className=" aspect-square w-full rounded-t-xl skeleton rounded-b-none bg-slate-500">
                <div className="absolute btn mt-2 ml-2 text-base-100 glass btn-xs">
                  Food
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between gap-2">
                <p className="font-extralight text-md">Pecel Ayam</p>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <Star weight="fill" className="text-accent" size={12} />{" "}
                    <p className="text-sm">4.5</p>{" "}
                    <p className="text-xs opacity-60">(123 Reviews)</p>{" "}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={12} weight="fill" className="text-primary" />
                    <p className="text-sm">Warung Bu Titin</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href={"/canteen/product"} className="bg-base-100 shadow-lg rounded-xl">
              <div className=" aspect-square w-full rounded-t-xl skeleton rounded-b-none bg-slate-500">
                <div className="absolute btn mt-2 ml-2 text-base-100 glass btn-xs">
                  Food
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between gap-2">
                <p className="font-extralight text-md">Pecel Ayam</p>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <Star weight="fill" className="text-accent" size={12} />{" "}
                    <p className="text-sm">4.5</p>{" "}
                    <p className="text-xs opacity-60">(123 Reviews)</p>{" "}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={12} weight="fill" className="text-primary" />
                    <p className="text-sm">Warung Bu Titin</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href={"/canteen/product"} className="bg-base-100 shadow-lg rounded-xl">
              <div className=" aspect-square w-full rounded-t-xl skeleton rounded-b-none bg-slate-500">
                <div className="absolute btn mt-2 ml-2 text-base-100 glass btn-xs">
                  Food
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between gap-2">
                <p className="font-extralight text-md">Pecel Ayam</p>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <Star weight="fill" className="text-accent" size={12} />{" "}
                    <p className="text-sm">4.5</p>{" "}
                    <p className="text-xs opacity-60">(123 Reviews)</p>{" "}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={12} weight="fill" className="text-primary" />
                    <p className="text-sm">Warung Bu Titin</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href={"/canteen/product"} className="bg-base-100 shadow-lg rounded-xl">
              <div className=" aspect-square w-full rounded-t-xl skeleton rounded-b-none bg-slate-500">
                <div className="absolute btn mt-2 ml-2 text-base-100 glass btn-xs">
                  Food
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between gap-2">
                <p className="font-extralight text-md">Pecel Ayam</p>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <Star weight="fill" className="text-accent" size={12} />{" "}
                    <p className="text-sm">4.5</p>{" "}
                    <p className="text-xs opacity-60">(123 Reviews)</p>{" "}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={12} weight="fill" className="text-primary" />
                    <p className="text-sm">Warung Bu Titin</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionLowCanteen;
