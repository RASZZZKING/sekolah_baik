"use client";
import SearchInputLesson from "@/components/lessonToday/SearhInputLesson";
import { CaretRight, MapPin, Star } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import ButtonPilihMenu from "@/components/utils/moleculs/ButtonPilihMenu";
import { dataCatCanteen } from "@/models/data/FE/dataCatCannten";
import CardProduct from "./moleculs/CardProduct";
import DaftarMenuOverflow from "./DaftarMenuOverflow";
import GridShopProduct from "./GridShopProduct";

interface SectionLowCanteenProps {}

const SectionLowCanteen: FunctionComponent<SectionLowCanteenProps> = () => {

  const Fory = () => (
    <div className="flex justify-between items-center">
      <div className="text-lg font-semibold">For you</div>
      <Link
        href={"/canteen/product/populer"}
        className="text-xs text-primary flex gap-1 items-center"
      >
        <p>See more</p>
        <CaretRight size={12} weight="bold" />{" "}
      </Link>
    </div>
  );

  return (
    <div className=" bg-base-100 min-h-svh -mt-[4.5rem]">
      <div className="pt-[6.5rem] pb-8 flex flex-col gap-6">
        <SearchInputLesson />
        <DaftarMenuOverflow data={dataCatCanteen.data} title="Populer" />
        <div className="px-6">
          <Fory />
          </div>
        <div className="px-6">
          <GridShopProduct data={dataCatCanteen.data} />
        </div>
      </div>
    </div>
  );
};

export default SectionLowCanteen;
