"use client"
import SearchInputLesson from "@/components/lessonToday/SearhInputLesson";
import { dataMapel } from "@/models/data/frontEnd/dataMapel";
import {
  CaretLeft,
  MapPin,
  ShoppingCart,
  Star,
} from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  const router = useRouter(
  )
  const handleRoute = () => {
      router.back()
  }
  const handleCart = () => {
    router.push("/canteen/cart")
  }
  return (
    <div className="min-h-svh bg-base-100 pt-6">
      <div className="flex justify-between px-6 items-center">
        <CaretLeft onClick={handleRoute} size={24} weight="bold" className="cursor-pointer" />
        <p className="text-xl font-bold capitalize">Favorite</p>
        <ShoppingCart onClick={handleCart} size={24} weight="bold" className="cursor-pointer" />
      </div>
      <div className="mt-7">
        <SearchInputLesson />
      </div>
      <div className="mt-7 flex gap-2 whitespace-nowrap overflow-x-auto max-w-full">
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
      <div className="px-6 mt-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-base-100 shadow-lg rounded-xl">
            <div className=" aspect-square w-full rounded-t-xl bg-slate-500">
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
          </div>
          <div className="bg-base-100 shadow-lg rounded-xl">
            <div className=" aspect-square w-full rounded-t-xl bg-slate-500">
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
          </div>
          <div className="bg-base-100 shadow-lg rounded-xl">
            <div className=" aspect-square w-full rounded-t-xl bg-slate-500">
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
          </div>
          <div className="bg-base-100 shadow-lg rounded-xl">
            <div className=" aspect-square w-full rounded-t-xl bg-slate-500">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
