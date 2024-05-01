"use client"
import {
  ShoppingCart,
  Trash,
  CaretLeft,
  Coins,
  Tag,
  Plus,
} from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  const router = useRouter(
  )
  const handleRoute = () => {
      router.back()
  }
  const handleCart = () => {
    router.push("/canteen/product/populer")
  }
  return (
    <div className=" bg-base-100 pt-6 pb-36">
      <div className="flex justify-between px-6 items-center">
        <CaretLeft onClick={handleRoute} size={24} weight="bold" className="cursor-pointer" />
        <p className="text-xl font-bold capitalize">Shopping Cart</p>
        <Plus onClick={handleCart} size={24} weight="bold" className="cursor-pointer" />
      </div>

      <div className="flex flex-col px-6 gap-4 mt-8">
        <div className="flex gap-3 pb-4  items-center border-b border-slate-400 ">
          <div className="h-16 w-16 bg-slate-700 rounded-lg"></div>
          <div className="flex-1 h-16 flex flex-col justify-between">
            <div>
              <p className="text-md font-semibold">Batagor Crispy</p>
              <p className="text-xs opacity-60 -mt-0.5">Pedas, Size: Jumbo</p>
            </div>
            <div className="text-md opacity-60 text-xs">
              Quantity:
              <div className="join scale-75">
                <button className="join-item btn btn-xs">-</button>
                <button className="join-item btn btn-xs">1</button>
                <button className="join-item btn btn-xs">+</button>
              </div>
            </div>
          </div>
          <div className="flex h-16 justify-between flex-col items-end">
            <Trash size={14} weight="bold" className="mt-2" />
            <div className="text-md font-semibold">10K</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-6 gap-4 mt-8">
        <div className="flex gap-3 pb-4  items-center border-b border-slate-400 ">
          <div className="h-16 w-16 bg-slate-700 rounded-lg"></div>
          <div className="flex-1 h-16 flex flex-col justify-between">
            <div>
              <p className="text-md font-semibold">Batagor Crispy</p>
              <p className="text-xs opacity-60 -mt-0.5">Pedas, Size: Jumbo</p>
            </div>
            <div className="text-md opacity-60 text-xs">
              Quantity:
              <div className="join scale-75">
                <button className="join-item btn btn-xs">-</button>
                <button className="join-item btn btn-xs">1</button>
                <button className="join-item btn btn-xs">+</button>
              </div>
            </div>
          </div>
          <div className="flex h-16 justify-between flex-col items-end">
            <Trash size={14} weight="bold" className="mt-2" />
            <div className="text-md font-semibold">10K</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-6 gap-4 mt-8">
        <div className="flex gap-3 pb-4  items-center border-b border-slate-400 ">
          <div className="h-16 w-16 bg-slate-700 rounded-lg"></div>
          <div className="flex-1 h-16 flex flex-col justify-between">
            <div>
              <p className="text-md font-semibold">Batagor Crispy</p>
              <p className="text-xs opacity-60 -mt-0.5">Pedas, Size: Jumbo</p>
            </div>
            <div className="text-md opacity-60 text-xs">
              Quantity:
              <div className="join scale-75">
                <button className="join-item btn btn-xs">-</button>
                <button className="join-item btn btn-xs">1</button>
                <button className="join-item btn btn-xs">+</button>
              </div>
            </div>
          </div>
          <div className="flex h-16 justify-between flex-col items-end">
            <Trash size={14} weight="bold" className="mt-2" />
            <div className="text-md font-semibold">10K</div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 bg-base-100 shadow-inner w-full max-w-full px-6 py-4 flex flex-col gap-4">
        <div className="grid grid-cols-2 justify-between items-center">
          <div className="flex flex-col">
            <p className="opacity-60 text-xs">SUBTOTAL</p>
            <p className="text-xl text-primary font-semibold">15K</p>
          </div>
          <div className="flex gap-3  font-semibold items-center">
            <p className="text-xs opacity-90 text-end">
              Selamat, Kamu dapat Voucer setelah beli!!!
            </p>
            <Tag size={40} className=" rotate-90 text-primary" weight="bold" />
          </div>
        </div>
        <div className="btn flex-1 text-center btn-primary">
          Buy
          {/* <Coins size={20} />  */}
        </div>
      </div>
    </div>
  );
};

export default page;
