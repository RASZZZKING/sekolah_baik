"use client";
import { Tag } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

interface BottomBuyCartProps {}

const BottomBuyCart: FunctionComponent<BottomBuyCartProps> = () => {
  const router = useRouter();
  const handleBuy = () => {
    router.push("/canteen/payment");
  };
  return (
    <div className="fixed bottom-0 bg-base-100 shadow-inner w-full max-w-full px-6 py-4 flex flex-col gap-4">
      <div className="grid grid-cols-2 justify-between items-center">
        <div className="flex flex-col">
          <p className="opacity-60 text-xs">SUBTOTAL</p>
          <p className="text-xl text-primary font-semibold">15K</p>
        </div>
        <div className="flex justify-end">
          <div className="flex gap-3  font-semibold items-center">
            <p className="text-xs opacity-90 text-end">
              Selamat, Kamu dapat Voucer setelah beli!!!
            </p>
            <Tag size={40} className=" rotate-90 text-primary" weight="bold" />
          </div>
        </div>
      </div>
      <div onClick={handleBuy} className="btn flex-1 text-center btn-primary">
        Buy
      </div>
    </div>
  );
};

export default BottomBuyCart;
