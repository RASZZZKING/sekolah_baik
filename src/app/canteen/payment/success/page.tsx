import { CaretLeft, Check, Star } from "@phosphor-icons/react/dist/ssr";
import { FunctionComponent } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  return (
    <div className="bg-slate-100 min-h-svh">
      <div className="bg-base-100 flex justify-between px-6 py-5 items-center rounded-b-xl shadow-inner">
        <CaretLeft size={24} weight="bold" className="cursor-pointer" />
        <p className="text-xl font-bold capitalize">Payment Details</p>
        <CaretLeft
          size={24}
          weight="bold"
          className="cursor-pointer opacity-0"
        />
      </div>

      <div className="min-h-[10vh] my-16 flex-col flex items-center justify-center">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center">
            <div className=" aspect-square w-20 bg-primary rounded-full scale-150 opacity-50"></div>
            <div className="absolute aspect-square w-20 bg-primary rounded-full scale-[2] opacity-25"></div>
            <div className="absolute aspect-square w-20 bg-primary rounded-full flex justify-center items-center">
              <Check size={22} className="text-white" />
            </div>
            <div className="absolute flex flex-col justify-between w-60 opacity-60 h-40">
              <div className="flex justify-between">
                <Star size={22} className=" text-indigo-700" />
                <div className="w-3 h-3 rounded-full mr-2 mt-4 bg-cyan-300"></div>
              </div>
              <div className="flex justify-between">
                <div className="w-3 h-3 mt-5 rounded-full ms-4 bg-red-500"></div>
                <Star size={18} className=" text-orange-500" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <p className="text-lg font-semibold text-center text-blue-950">
            Payment In Progress
          </p>
          <p className="text-sm font-semibold text-center text-blue-950 opacity-60 mt-1">
            Payment In Progress
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 bg-base-100 py-4 rounded-t-xl px-6 w-full">
        <div className="text-blue-950 border-b border-blue-95 pb-4 border-opacity-60 font-extralight text-sm grid gap-2 grid-rows-6 grid-flow-col w-full  justify-between">
          <p className="opacity-60">Payment Method</p>
          <p className="opacity-60">Date</p>
          <p className="opacity-60">Transaction ID</p>
          <p className="opacity-60">Cashback</p>
          <p className="opacity-60">Discount</p>
          <p className="opacity-60">Subtotal</p>
          <p className="text-end">Gopay</p>
          <p className="text-end">26 Sep 2022</p>
          <p className="text-end">FT4JIKS</p>
          <p className="text-end">10K</p>
          <p className="text-end">1K Points</p>
          <p className="text-end">2K</p>
        </div>
        <div className="flex justify-between  items-end text-blue-950 font-semibold">
          <p className="opacity-60 text-sm">Total</p>
          <p className="text-xl mt-3.5">
            <span className="text-sm line-through opacity-60">10K</span> 8K
          </p>
        </div>
        <div className="mt-4 btn btn-block btn-disabled font-mono btn-primary items-center">
          Your Product Ready in{" "}
          <span className="countdown items-center ">
            <span>2</span>:<span>04</span>:<span>10</span>
            {/* <span style={{ "--value": 24 }}></span>: */}
            {/* <span style={{ "--value": 52 }}></span> */}
            {/* <span style={{ "--value": 52 }}></span> */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
