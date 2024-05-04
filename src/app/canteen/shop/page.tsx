"use client";
import GridShopProduct from "@/components/canteen/GridShopProduct";
import SearchInputLesson from "@/components/lessonToday/SearhInputLesson";
import HeaderShopCart from "@/components/utils/HeaderShopCart";
import { dataCatCanteen } from "@/models/data/FE/dataCatCannten";
import { FunctionComponent } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  return (
    <div className="min-h-svh bg-base-100 pt-6">
      <HeaderShopCart title="Shop" />
      <div className="mt-7">
        <SearchInputLesson />
      </div>
      <div className="px-6 mt-6">
        <GridShopProduct data={dataCatCanteen.data} isShop />
      </div>
    </div>
  );
};

export default page;
