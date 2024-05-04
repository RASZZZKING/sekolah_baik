"use client";
import SearchInputLesson from "@/components/lessonToday/SearhInputLesson";
import { dataMapel } from "@/models/data/FE/dataMapel";
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
  const router = useRouter();
  const handleRoute = () => {
    router.back();
  };
  const handleCart = () => {
    router.push("/canteen/cart");
  };
  return (
    <div className="min-h-svh bg-base-100 pt-6">
      <div className="flex justify-between px-6 items-center">
        <CaretLeft
          onClick={handleRoute}
          size={24}
          weight="bold"
          className="cursor-pointer"
        />
        <p className="text-xl font-bold capitalize">All Quiz</p>
        <ShoppingCart
          onClick={handleCart}
          size={24}
          weight="bold"
          className="cursor-pointer"
        />
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
        <div className="grid grid-cols-2 gap-4 pb-10">
          {dataMapel.slice(3, 7).map((cb, index) => (
            <div
              className={`${index === 0 && "ms-0"} ${
                index === 3 && "me-3"
              } min-w-[10.5rem] rounded-2xl bg-base-100 shadow-xl`}
              key={index}
            >
              <div className="h-32 bg-primary rounded-t-2xl flex flex-col justify-center items-center">
                <div className="h-4 z-10 flex justify-center w-2/3">
                  <p className="w-3/4 bg-fuchsia-500 text-xs font-semibold rounded justify-center items-center flex text-center">
                    SMA GRADE 10
                  </p>
                </div>
                <div className="w-2/3 h-20 -mt-2">
                  <p className="text-2xl flex justify-center items-center h-full text-wrap rounded-xl bg-base-100 text-center leading-6 italic">
                    {cb.name}
                  </p>
                </div>
              </div>

              <div className="flex justify-between -mt-32">
                <div className="bg-accent text-xs flex justify-center items-center py-0.5 font-semibold text-base-100  w-12 h-4 rounded -ml-1.5 mt-1">
                  New
                </div>
                <Star
                  size={12}
                  className="text-blue-300 -mr-32 mt-7"
                  weight="fill"
                />
                <div className="w-2/6 mt-[5.5rem] h-10 bg-slate-500"></div>
              </div>

              <div className="h-20 pt-3 mb-6 px-4 flex flex-col justify-between">
                <p className="text-sm font-semibold text-wrap ">
                  Class 10 {cb.name} Weekly Exam Questiions
                </p>
                <p className="text-sm opacity-50">{cb.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
