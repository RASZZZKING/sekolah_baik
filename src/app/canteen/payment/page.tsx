"use client"
import {
  Calendar,
  CaretLeft,
  Clock,
  Coins,
  Heart,
  SealPercent,
  TagSimple,
  User,
} from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }
  const handlePay = () => {
    router.push("/canteen/payment/success")
  }
  return (
    <div className="bg-slate-100 pb-24">
      <div className="bg-base-100 flex justify-between px-6 py-5 items-center rounded-b-xl shadow-inner">
        <CaretLeft onClick={handleBack} size={24} weight="bold" className="cursor-pointer" />
        <p className="text-xl font-bold capitalize">Payment Details</p>
        <CaretLeft
          size={24}
          weight="bold"
          className="cursor-pointer opacity-0"
        />
      </div>
      {/* <div className="w-full px-6 py-4 pt-8">
        <ul className="steps w-full">
          <li className="step step-primary">Order</li>
          <li className="step step-primary">Payment</li>
          <li className="step">Complete</li>
        </ul>
      </div> */}
      <div className="bg-slate-100 pb-14 pt-6">
        <div className="px-6">
          <div className="p-5 flex flex-col gap-2 border rounded-xl border-slate-300 bg-base-100">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-md">Complete Payment in</p>
              <p className="font-semibold text-md text-accent">02:11:45</p>
            </div>
            <div className="p-3 border-slate-500 bg-base-100">
              <div className="flex gap-2 items-center">
                <div className="w-10 h-10 bg-slate-500 rounded-lg"></div>
                <div className="text-lg font-semibold">Batagor Crispy</div>
              </div>
              <div className="mt-5 flex gap-2.5 flex-col">
                <div className="flex gap-1.5">
                  <TagSimple size={16} weight="bold" className="mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <div className="text-sm">Entrance Ticket</div>
                    <div className="text-xs flex gap-2 items-center">
                      <p>1 reguler batagor</p>
                      <div className="flex gap-1 items-center">
                        <User size={14} weight="fill" />
                        <p>Member</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <Calendar size={16} weight="bold" className="mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <div className="text-sm">Date & Time</div>
                    <div className="text-xs flex gap-2 items-center">
                      <p>Tue, 18 Oct 2022</p>
                      <div className="flex gap-1 items-center">
                        <Clock size={14} weight="fill" />
                        <p>19.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 mt-4">
            <p className="text-lg font-extralight">Payment Method</p>
            <div className="flex items-center rounded-lg gap-4 py-2 px-4 bg-base-100 border-slate-300 border">
              <div className="bg-slate-400 border-slate-300 border w-12 h-8 rounded-md"></div>
              <div className="text-md font-semibold flex-1">Yadtren</div>
              <div className="text-primary text-sm cursor-pointer">Change</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 mt-4">
          <p className="text-lg font-extralight px-6">Voucher Method</p>
          <div className="overflow-x-auto whitespace-nowrap flex gap-3">
            <div>
              <div className="ms-6 px-4  py-3 min-w-72 shadow-lg rounded-lg bg-base-100">
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
              <div className=" px-4  py-3 min-w-72 shadow-lg rounded-lg bg-base-100">
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
              <div className=" px-4  py-3 min-w-72 shadow-lg rounded-lg bg-base-100">
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
              <div className=" px-4 me-3  py-3 min-w-72 shadow-lg rounded-lg bg-base-100">
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
      <div className="fixed bottom-0 bg-base-100 shadow-inner w-full max-w-full px-6 py-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="opacity-60 text-xs">SUBTOTAL</p>
            <p className="text-xl text-primary font-semibold">15K</p>
          </div>
          <div className="flex gap-2 font-semibold items-center">
            <Coins size={16} className="text-accent" weight="bold" />
            <p className="text-xs ">You will Get 1250 Points</p>
          </div>
        </div>
        <div onClick={handlePay} className="btn flex-1 text-center btn-primary">
          Pay Now
          {/* <Coins size={20} />  */}
        </div>
      </div>
    </div>
  );
};

export default page;
