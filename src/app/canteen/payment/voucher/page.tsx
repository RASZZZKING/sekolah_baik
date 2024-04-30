import SearchInputLesson from "@/components/lessonToday/SearhInputLesson";
import { dataMapel } from "@/models/data/frontEnd/dataMapel";
import {
  CaretLeft,
  Coins,
  MapPin,
  SealPercent,
  ShoppingCart,
  Star,
} from "@phosphor-icons/react/dist/ssr";
import { FunctionComponent } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  return (
    <div className="min-h-svh bg-base-100 pt-6 pb-6">
      <div className="flex justify-between px-6 items-center">
        <CaretLeft size={24} weight="bold" className="cursor-pointer" />
        <p className="text-xl font-bold capitalize">Pakai Voucher</p>
        <ShoppingCart size={24} weight="bold" className="cursor-pointer" />
      </div>
      <div className="mt-7">
        <SearchInputLesson />
      </div>
      <div className="px-6 mt-6">
      <div className="flex flex-col gap-3">
            <div>
              <div className="px-4  py-3 w-full shadow-lg rounded-lg bg-base-100">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <Coins size={16} weight="bold" />
                    <p className="font-semibold text-md">Cashback 10%</p>
                  </div>
                  <p className="opacity-60 text-md">2 Days</p>
                </div>
                <div className="mt-2 text-wrap opacity-85">
                  Cb 10% minimal pembelian 15K, pembelian diatas 30K hanya akan
                  mendapat Cashback 10% dari 30K
                </div>
                <div className="flex justify-end">
                  <div className="btn btn-primary btn-xs mt-2">Pakai</div>
                </div>
              </div>
            </div>
            <div>
              <div className=" px-4  py-3 w-full shadow-lg rounded-lg bg-base-100">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <SealPercent size={16} weight="bold" />
                    <p className="font-semibold text-md">Discount 1K</p>
                  </div>
                  <p className="opacity-60 text-md">1 Days</p>
                </div>
                <div className="mt-2 text-wrap opacity-85">
                  Disc 10% minimal pembelian 15K, pembelian diatas 30K hanya
                  akan mendapat Cashback 10% dari 30K
                </div>
                <div className="flex justify-end mt-2">
                  <div className="btn btn-primary btn-xs">Pakai</div>
                </div>
              </div>
            </div>

            <div>
              <div className=" px-4  py-3 w-full shadow-lg rounded-lg bg-base-100">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <Coins size={16} weight="bold" />
                    <p className="font-semibold text-md">Cashback 10%</p>
                  </div>
                  <p className="opacity-60 text-md">2 Days</p>
                </div>
                <div className="mt-2 text-wrap opacity-85">
                  Cb 10% minimal pembelian 15K, pembelian diatas 30K hanya akan
                  mendapat Cashback 10% dari 30K
                </div>
                <div className="flex justify-end">
                  <div className="btn btn-primary btn-xs mt-2">Pakai</div>
                </div>
              </div>
            </div>
            <div>
              <div className=" px-4 me-3  py-3 w-full shadow-lg rounded-lg bg-base-100">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <SealPercent size={16} weight="bold" />
                    <p className="font-semibold text-md">Discount 1K</p>
                  </div>
                  <p className="opacity-60 text-md">1 Days</p>
                </div>
                <div className="mt-2 text-wrap opacity-85">
                  Disc 10% minimal pembelian 15K, pembelian diatas 30K hanya
                  akan mendapat Cashback 10% dari 30K
                </div>
                <div className="flex justify-end mt-2">
                  <div className="btn btn-primary btn-xs">Pakai</div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default page;
