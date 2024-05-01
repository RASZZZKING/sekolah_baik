import { SquaresFour, Wallet } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { FunctionComponent } from "react";

interface SectionMenuShopProps {}

const SectionMenuShop: FunctionComponent<SectionMenuShopProps> = () => {
  return (
    <div className="p-4 flex flex-col gap-5 bg-base-100 rounded-xl shadow-xl">
      <div className="flex justify-between rounded-xl py-2 px-3 bg-slate-300 bg-opacity-40 border-slate-300 border shadow-inner text-xs">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-0.5">
            <Wallet size={13} />
            <p className="font-semibold text-xs">Wallet</p>
          </div>
          <div className="btn btn-xs text-accent bg-base-100 border-slate-500">
            Yadpay
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-0.5">
            <Wallet size={13} />
            <p className="font-semibold text-xs">Wallet</p>
          </div>
          <div className="btn btn-xs text-accent bg-base-100 border-slate-500">
            Yadpay
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-0.5">
            <Wallet size={13} />
            <p className="font-semibold text-xs">Wallet</p>
          </div>
          <div className="btn btn-xs text-accent bg-base-100 border-slate-500">
            Yadpay
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Link href={"/canteen/payment/history"} className="flex flex-col gap-1">
          <div className="bg-slate-400 skeleton h-12 w-12 rounded-lg"></div>
          <p className="text-sm text-center">Payment</p>
        </Link>
        <Link href={"/canteen/payment/voucher"} className="flex flex-col gap-1">
          <div className="bg-slate-400 skeleton h-12 w-12 rounded-lg"></div>
          <p className="text-sm text-center">Voucher</p>
        </Link>
        <Link href={"/canteen/product/favorite"} className="flex flex-col gap-1">
          <div className="bg-slate-400 skeleton h-12 w-12 rounded-lg"></div>
          <p className="text-sm text-center">Favorit</p>
        </Link>
        <Link href={"/canteen/shop"} className="flex flex-col gap-1">
          <div className="bg-slate-400 skeleton h-12 w-12 rounded-lg"></div>
          <p className="text-sm text-center">Warung</p>
        </Link>
      </div>
      <div className="btn btn-block disabled">
        <SquaresFour weight="fill" size={22} className="text-color-primary" />
        <div className="text-lg font-semibold">All Categories</div>
      </div>
    </div>
  );
};

export default SectionMenuShop;
