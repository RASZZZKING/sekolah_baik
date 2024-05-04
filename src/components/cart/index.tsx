"use client";
import {
  ShoppingCart,
  Trash,
  CaretLeft,
  Coins,
  Tag,
  Plus,
} from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { FunctionComponent, useState } from "react";
import CardCartShop from "./moleculs/CardCartShop";
import BottomBuyCart from "./atom/BottomBuyCart";
import { dataCatCanteen } from "@/models/data/FE/dataCatCannten";
import HeaderCostum from "@/components/utils/moleculs/HeaderCostum";

interface CartShopPageProps {}

const CartShopPage: FunctionComponent<CartShopPageProps> = () => {
  const router = useRouter();
  const handleCart = () => {
    router.push("/canteen/product/populer");
  };
  return (
    <div className=" bg-base-100 pt-6 pb-36">
      <HeaderCostum title="Shopping Cart">
        <Plus
          onClick={handleCart}
          size={24}
          weight="bold"
          className="cursor-pointer"
        />
      </HeaderCostum>
      <div className="flex flex-col px-6 gap-4 mt-8">
        {dataCatCanteen.data[3].data.map((cb, i) => (
          <CardCartShop
            key={i}
            name={cb.name}
            price={cb.price}
            quantitys={i + 1}
            size="small"
            flavour="late"
          />
        ))}
      </div>
      <BottomBuyCart />
    </div>
  );
};

export default CartShopPage;
