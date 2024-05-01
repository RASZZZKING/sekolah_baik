"use client";
import {
  CaretLeft,
  Check,
  ForkKnife,
  Star,
} from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  const handleCanteen = () => {
    router.push("/canteen");
  };
  const targetTime = new Date();
  targetTime.setHours(targetTime.getHours() + 2);
  targetTime.setMinutes(targetTime.getMinutes() + 21);
  targetTime.setSeconds(targetTime.getSeconds() + 11);

  const [remainingTime, setRemainingTime] = useState<number>(
    targetTime.getTime() - Date.now()
  );
  const [timeState, setTimeState] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = Date.now();
      const diff = targetTime.getTime() - now;
      if (diff <= 0) {
        clearInterval(intervalId);
        setRemainingTime(0);
      } else {
        setRemainingTime(diff);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const hours = Math.floor(remainingTime / (1000 * 60 * 60));
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    setTimeState({
      hours,
      minutes,
      seconds,
    });
  }, [remainingTime]);

  return (
    <div className="bg-slate-100 min-h-svh">
      <div className="bg-base-100 flex justify-between px-6 py-5 items-center rounded-b-xl shadow-inner">
        <CaretLeft
          onClick={handleBack}
          size={24}
          weight="bold"
          className="cursor-pointer"
        />
        <p className="text-xl font-bold capitalize">Payment Details</p>
        <ForkKnife
          onClick={handleCanteen}
          size={24}
          weight="bold"
          className="cursor-pointer"
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
        <div className="mt-4 btn btn-block font-mono btn-primary items-center">
          Your Product Ready in{" "}
          <span className="countdown items-center ">
            <span style={{ "--value": timeState.hours } as object}></span>h:
            <span style={{ "--value": timeState.minutes } as object}></span>m:
            <span style={{ "--value": timeState.seconds } as object}></span>s
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
