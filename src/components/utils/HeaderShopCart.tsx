"use client";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";
import HeaderCostum from "./moleculs/HeaderCostum";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";

interface HeaderShopCartProps {
    title: string
}

const HeaderShopCart: FunctionComponent<HeaderShopCartProps> = ({title}) => {
  const router = useRouter();
  const handleCart = () => {
    router.push("/canteen/cart");
  };
  return (
    <HeaderCostum title={title}>
      <ShoppingCart
        onClick={handleCart}
        size={24}
        weight="bold"
        className="cursor-pointer"
      />
    </HeaderCostum>
  );
};

export default HeaderShopCart;
