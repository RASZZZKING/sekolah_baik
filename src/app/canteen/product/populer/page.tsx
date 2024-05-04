"use client";
import DaftarMenuOverflow from "@/components/canteen/DaftarMenuOverflow";
import GridShopProduct from "@/components/canteen/GridShopProduct";
import SearchInputLesson from "@/components/lessonToday/SearhInputLesson";
import HeaderShopCart from "@/components/utils/HeaderShopCart";
import { dataCatCanteen } from "@/models/data/FE/dataCatCannten";
import { FunctionComponent } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  return (
    <div className="min-h-svh bg-base-100 py-6 grid gap-7">
      <HeaderShopCart title="Select Product" />
      <SearchInputLesson />
      <DaftarMenuOverflow data={dataCatCanteen.data} title="Populer" />
      <div className="px-6">
        <GridShopProduct data={dataCatCanteen.data} />
      </div>
    </div>
  );
};

export default page;
