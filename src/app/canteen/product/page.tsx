"use client";
import HeadChevron from "@/components/utils/HeadChevron";
import { dataMapel } from "@/models/data/frontEnd/dataMapel";
import {
  CaretLeft,
  CaretRight,
  Chat,
  Clock,
  Coins,
  Heart,
  MapPin,
  ShoppingCart,
  Star,
  X,
} from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { FunctionComponent, useRef, useState } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  const [quantity, setQuantity] = useState<number>(1)
  const buyRef = useRef<HTMLDivElement>(null)
  const router = useRouter();
  const handleRoute = () => {
    router.back();
  };
  const handleCart = () => {
    router.push("/canteen/product/cart");
  };
  const handleFav = () => {
    router.push("/canteen/product/favorite");
  };
  const handleChat = () => {
    router.push("/chat/dm");
  };
  const handleBuy = () => {
    if (buyRef.current !== null){
      buyRef.current.style.display = "flex"
    }
  }
  const handleClose = () => {
    if (buyRef.current !== null){
      buyRef.current.style.display = "none"
    }
  }
  const handlePay = () => {
    router.push("/canteen/payment");
    }
  const handlePayCart = () => {
    handleClose()
    alert("Berhasil masuk ke keranjang")
    }
    const handlePlus = () => {
      setQuantity(quantity + 1)
    }
    const handleMinus = () => {
      quantity !== 1 && setQuantity(quantity - 1)
    }

  
  const condition = ["/", "s"];
  return (
    <div className="bg-base-100 pt-4 pb-24">
      <div className="flex justify-between px-6 items-center">
        <CaretLeft
          onClick={handleRoute}
          size={24}
          weight="bold"
          className="cursor-pointer"
        />
        <p className="text-xl font-bold capitalize">Batagor Detail</p>
        <Star
          onClick={handleFav}
          size={24}
          weight="bold"
          className="cursor-pointer"
        />
      </div>
      <div className="flex-col flex gap-6 mt-4">
        <div className="w-full aspect-square bg-slate-500 skeleton rounded-none"></div>
        <div className="flex justify-between gap-3 items-center px-6">
          <div className="flex flex-col gap-1.5">
            <p className="text-xl font-semibold">Temple Of Heaven</p>
            <div className="flex gap-0.5 items-center">
              <MapPin size={12} weight="fill" className="text-primary" />
              <p className="opacity-60">Ruang Kantin Pojok</p>
            </div>
          </div>
          <p className="text-xl text-primary font-semibold">5K</p>
        </div>
        <div className="px-6">
          <div className="flex justify-between py-3 px-4 gap-3 rounded-xl bg-base-100 shadow-lg">
            <div className="flex gap-1.5 flex-col">
              <div className="flex gap-0.5">
                <Clock weight="fill" size={12} />
                <p className="text-xs">Open At</p>
              </div>
              <div className="text-sm font-extralight">8 AM</div>
            </div>
            <div className="flex flex-1 border-x justify-center items-center gap-1.5 flex-col">
              <div>
                <div className="flex gap-0.5">
                  <Star className="text-accent" weight="fill" size={12} />
                  <p className="text-xs">Ratings</p>
                </div>
                <div className="text-sm font-extralight flex items-center gap-0.5">
                  <p>4.5</p>
                  <p className="opacity-60">(125 Reviews)</p>
                </div>
              </div>
            </div>

            <div className="flex gap-1.5 flex-col">
              <div className="flex gap-0.5">
                <Heart className=" text-red-600 " weight="fill" size={12} />
                <p className="text-xs">Likes</p>
              </div>
              <div className="text-sm font-extralight">123 Likes</div>
            </div>
          </div>
        </div>
        <div className="px-6 line-clamp-3 opacity-60 break-all">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          aliquid sit modi nihil maiores debitis similique quo natus provident
          at.
        </div>
        <div className="px-6 flex justify-between items-center">
          <div className="text-md flex items-center">
            <p>Comments</p>
            <p className="opacity-60 text-sm">(14)</p>
          </div>
          <div className="flex gap-1.5 text-xs text-primary">
            <p>See More</p>
            <CaretRight size={12} weight="bold" />
          </div>
        </div>

        <div className="overflow-x-auto whitespace-nowrap flex gap-3">
          <div>
            <div className="ms-6 px-4  py-3 min-w-72 shadow-lg rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="h-10 w-10 rounded-full bg-slate-400"></div>
                  <div className="flex  flex-col ">
                    <p className="text-sm font-extralight">Yura Pritiest</p>
                    <p className="text-sm opacity-60">XI IPA 2</p>
                  </div>
                </div>
                <p className="opacity-60">25/3/2024</p>
              </div>
              <div className="mt-2 text-wrap opacity-85">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                doloribus!
              </div>
            </div>
          </div>
          <div>
            <div className="me-3 px-4 py-3 min-w-72 shadow-lg rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex gap-1.5">
                  <div className="h-10 w-10 rounded-full bg-slate-400"></div>
                  <div className="flex gap-1 flex-col">
                    <p className="text-sm font-extralight">Yura Pritiest</p>
                    <p className="text-sm opacity-60">XI IPA 2</p>
                  </div>
                </div>
                <p className="opacity-60">25/3/2024</p>
              </div>
              <div className="mt-2 text-wrap opacity-85">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                doloribus!
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 flex justify-between items-center">
          <div className="text-md flex items-center">
            <p>Recommendations</p>
            <p className="opacity-60 text-sm"></p>
          </div>
          <div className="flex gap-1.5 text-xs text-primary">
            <p>See More</p>
            <CaretRight size={12} weight="bold" />
          </div>
        </div>

        <div className="overflow-x-auto whitespace-nowrap flex gap-3">
          <div className="ms-6 bg-base-100 shadow-lg rounded-xl">
            <div className=" aspect-square w-full rounded-t-xl bg-slate-500"></div>
            <div className="aspect-square w-full -mt-[100%]">
              <div className="btn mt-2 ml-2 text-base-100 glass btn-xs">
                Food
              </div>
            </div>
            <div className="p-4 flex flex-col justify-between gap-2">
              <p className="font-extralight text-md">Pecel Ayam</p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <Star weight="fill" className="text-accent" size={12} />{" "}
                  <p className="text-sm">4.5</p>{" "}
                  <p className="text-xs opacity-60">(123 Reviews)</p>{" "}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={12} weight="fill" className="text-primary" />
                  <p className="text-sm">Warung Bu Titin</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-base-100 shadow-lg rounded-xl">
            <div className=" aspect-square w-full rounded-t-xl bg-slate-500"></div>
            <div className="aspect-square w-full -mt-[100%]">
              <div className="btn mt-2 ml-2 text-base-100 glass btn-xs">
                Food
              </div>
            </div>
            <div className="p-4 flex flex-col justify-between gap-2">
              <p className="font-extralight text-md">Pecel Ayam</p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <Star weight="fill" className="text-accent" size={12} />{" "}
                  <p className="text-sm">4.5</p>{" "}
                  <p className="text-xs opacity-60">(123 Reviews)</p>{" "}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={12} weight="fill" className="text-primary" />
                  <p className="text-sm">Warung Bu Titin</p>
                </div>
              </div>
            </div>
          </div>
          <div className="me-3 bg-base-100 shadow-lg rounded-xl">
            <div className=" aspect-square w-full rounded-t-xl bg-slate-500"></div>
            <div className="aspect-square w-full -mt-[100%]">
              <div className="btn mt-2 ml-2 text-base-100 glass btn-xs">
                Food
              </div>
            </div>
            <div className="p-4 flex flex-col justify-between gap-2">
              <p className="font-extralight text-md">Pecel Ayam</p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <Star weight="fill" className="text-accent" size={12} />{" "}
                  <p className="text-sm">4.5</p>{" "}
                  <p className="text-xs opacity-60">(123 Reviews)</p>{" "}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={12} weight="fill" className="text-primary" />
                  <p className="text-sm">Warung Bu Titin</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* pop up belanjaan */}
        <div ref={buyRef} className="fixed top-0 left-0 w-screen h-screen hidden  justify-center items-center">
          <div className="absolute w-72 flex justify-end -mt-[12rem]">
            <div onClick={handleClose} className="h-6 pt-1 w-16 flex justify-center rounded-t-md bg-slate-400">
              <X  weight="bold" />
            </div>
          </div>
          <div className="w-72 py-4 z-[1] rounded-tr-none rounded-xl flex flex-col gap-3 bg-slate-50">
            <div className="flex px-4 justify-between pb-2 border-b border-slate-300">
              <div className="text-lg font-semibold">Essential Kits</div>
              <div className="text-lg font-bold">10K</div>
            </div>
            <div className="px-4">
              <div className="flex gap-2 whitespace-nowrap overflow-x-auto max-w-full">
                <button
                  className={` btn btn-sm border-slate-300 bg-base-100 text-slate-600  `}
                >
                  Lihat Semua
                </button>
                {condition[1] !== "lesson"
                  ? dataMapel.map((cb, index) => (
                      <button
                        key={index}
                        className={`btn btn-sm ${
                          index === 0
                            ? "btn-primary"
                            : "border-slate-300 bg-base-100 text-slate-600"
                        } ${index + 1 === dataMapel.length && ""} `}
                      >
                        {cb.name}
                      </button>
                    ))
                  : dataMapel.slice(0, 5).map((cb, index) => (
                      <button
                        key={index}
                        className={`btn btn-sm ${
                          index === 0
                            ? "btn-primary"
                            : "border-slate-300 bg-base-100 text-slate-600"
                        } ${index + 1 === 5 && "me-4"} `}
                      >
                        Semester {index + 1}
                      </button>
                    ))}
              </div>
            </div>
            <div className="flex px-4 justify-between items-center">
              <div className="join">
                <button onClick={handleMinus} className="join-item btn-xs btn text-slate-500 ">
                  -
                </button>
                <button className="join-item btn btn-xs text-slate-500 ">
                  {quantity}
                </button>
                <button onClick={handlePlus} className="join-item btn-xs btn text-slate-500 ">
                  +
                </button>
              </div>
              <div className="flex items-center">
                <div onClick={handlePayCart} className="btn-xs mr-1 btn">
                  <ShoppingCart size={17} className="text-slate-500" />
                </div>
                <div onClick={handlePay} className="btn-xs btn-primary btn">Pay Now</div>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 bg-base-100 shadow-inner w-full max-w-full px-6 py-4 flex gap-4">
          <div onClick={handleCart} className="btn">
            <ShoppingCart size={22} />
          </div>
          <div onClick={handleChat} className="btn">
            <Chat size={22} />
          </div>
          <div onClick={handleBuy} className="btn flex-1  btn-primary">
            Buy
            {/* <Coins size={20} />  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
