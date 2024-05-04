"use client"
import SearchInputLesson from "@/components/lessonToday/SearhInputLesson";
import HeaderShopCart from "@/components/utils/HeaderShopCart";
import { FunctionComponent } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  
  return (
    <div className="bg-base-100 pt-6 min-h-svh">
      <HeaderShopCart title="History Payment" />
      <div className="mt-7">
        <SearchInputLesson />
      </div>

      <div className="flex flex-col gap-3 px-6 py-6">

      <div className="w-full flex flex-col gap-1 bg-color-primary p-4 shadow rounded-lg">
        <div className="flex justify-between items-center pb-1">
          <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-between">
          <div className="text-xs">{"23-11-2024"}</div>
          <div className="font-semibold text-lg">{"Dea Afrizal"}</div>
        </div>
          </div>
          <div
            className={`text-sm 
              btn-success text-success border-color-success
           btn min-w-24  bg-opacity-15 hover:bg-opacity-40  max-h-8 h-8 min-h-8`}
          >
            {"Success"}
          </div>
        </div>
        <div className="h-0.5 w-full border-t opacity-50"></div>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between">
            <p className="text-xs">Nama Biaya</p>
            <p className="text-xs">{"Dea"}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-xs">Jumlah Biaya</p>
            <p className="text-xs">Rp {"15K"}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-xs">Kurang</p>
            <p className="text-xs">Rp {0}</p>
          </div>
        </div>
        <div
          className={`
          flex justify-end gap-2`}
        >
          {/* <div
          className={`${
            cb.status === "Cicil" && "hidden"
          } btn btn-xs mt-1.5 btn-primary hover:bg-color-dark hover:bg-opacity-20 hover:border-color-birulaut bg-color-primary text-color-birulaut border-color-birulaut`}
        >
          Cicil
        </div> */}
          {/* <div className="btn btn-xs mt-1.5 hover:bg-color-birulaut hover:bg-opacity-80 hover:border-color-birulaut btn-primary bg-color-birulaut border-color-birulaut">
          {cb.status === "Cicil" ? cb.status : "Bayar"}
        </div> */}
        </div>
      </div>
      <div className="w-full flex flex-col gap-1 bg-color-primary p-4 shadow rounded-lg">
        <div className="flex justify-between items-center pb-1">
          <div className="flex flex-col justify-center">
            <div className="font-semibold text-lg">{"Dea Afrizal"}</div>
          </div>
          <div
            className={`text-sm 
              btn-success text-success border-color-success
           btn min-w-24  bg-opacity-15 hover:bg-opacity-40  max-h-8 h-8 min-h-8`}
          >
            {"Success"}
          </div>
        </div>
        <div className="h-0.5 w-full border-t opacity-50"></div>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between">
            <p className="text-xs">Nama Biaya</p>
            <p className="text-xs">{"Dea"}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-xs">Jumlah Biaya</p>
            <p className="text-xs">Rp {"15K"}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-xs">Kurang</p>
            <p className="text-xs">Rp {0}</p>
          </div>
        </div>
        <div
          className={`
          flex justify-end gap-2`}
        >
          {/* <div
          className={`${
            cb.status === "Cicil" && "hidden"
          } btn btn-xs mt-1.5 btn-primary hover:bg-color-dark hover:bg-opacity-20 hover:border-color-birulaut bg-color-primary text-color-birulaut border-color-birulaut`}
        >
          Cicil
        </div> */}
          {/* <div className="btn btn-xs mt-1.5 hover:bg-color-birulaut hover:bg-opacity-80 hover:border-color-birulaut btn-primary bg-color-birulaut border-color-birulaut">
          {cb.status === "Cicil" ? cb.status : "Bayar"}
        </div> */}
        </div>
      </div>
      <div className="w-full flex flex-col gap-1 bg-color-primary p-4 shadow rounded-lg">
        <div className="flex justify-between items-center pb-1">
          <div className="flex flex-col justify-center">
            <div className="font-semibold text-lg">{"Dea Afrizal"}</div>
          </div>
          <div
            className={`text-sm 
              btn-success text-success border-color-success
           btn min-w-24  bg-opacity-15 hover:bg-opacity-40  max-h-8 h-8 min-h-8`}
          >
            {"Success"}
          </div>
        </div>
        <div className="h-0.5 w-full border-t opacity-50"></div>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between">
            <p className="text-xs">Nama Biaya</p>
            <p className="text-xs">{"Dea"}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-xs">Jumlah Biaya</p>
            <p className="text-xs">Rp {"15K"}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-xs">Kurang</p>
            <p className="text-xs">Rp {0}</p>
          </div>
        </div>
        <div
          className={`
          flex justify-end gap-2`}
        >
          {/* <div
          className={`${
            cb.status === "Cicil" && "hidden"
          } btn btn-xs mt-1.5 btn-primary hover:bg-color-dark hover:bg-opacity-20 hover:border-color-birulaut bg-color-primary text-color-birulaut border-color-birulaut`}
        >
          Cicil
        </div> */}
          {/* <div className="btn btn-xs mt-1.5 hover:bg-color-birulaut hover:bg-opacity-80 hover:border-color-birulaut btn-primary bg-color-birulaut border-color-birulaut">
          {cb.status === "Cicil" ? cb.status : "Bayar"}
        </div> */}
        </div>
      </div>
      <div className="w-full flex flex-col gap-1 bg-color-primary p-4 shadow rounded-lg">
        <div className="flex justify-between items-center pb-1">
          <div className="flex flex-col justify-center">
            <div className="font-semibold text-lg">{"Dea Afrizal"}</div>
          </div>
          <div
            className={`text-sm 
              btn-success text-success border-color-success
           btn min-w-24  bg-opacity-15 hover:bg-opacity-40  max-h-8 h-8 min-h-8`}
          >
            {"Success"}
          </div>
        </div>
        <div className="h-0.5 w-full border-t opacity-50"></div>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between">
            <p className="text-xs">Nama Biaya</p>
            <p className="text-xs">{"Dea"}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-xs">Jumlah Biaya</p>
            <p className="text-xs">Rp {"15K"}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-xs">Kurang</p>
            <p className="text-xs">Rp {0}</p>
          </div>
        </div>
        <div
          className={`
          flex justify-end gap-2`}
        >
          {/* <div
          className={`${
            cb.status === "Cicil" && "hidden"
          } btn btn-xs mt-1.5 btn-primary hover:bg-color-dark hover:bg-opacity-20 hover:border-color-birulaut bg-color-primary text-color-birulaut border-color-birulaut`}
        >
          Cicil
        </div> */}
          {/* <div className="btn btn-xs mt-1.5 hover:bg-color-birulaut hover:bg-opacity-80 hover:border-color-birulaut btn-primary bg-color-birulaut border-color-birulaut">
          {cb.status === "Cicil" ? cb.status : "Bayar"}
        </div> */}
        </div>
      </div>
      </div>
    </div>
  );
};

export default page;
