"use client"
import {
    CalendarDots,
  CaretLeft,
  CaretRight,
  DotsThree,
  Link,
  LinkSimple,
  PaperPlaneRight,
  VideoCamera,
} from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

interface pageProps {}

const Page: FunctionComponent<pageProps> = () => {
  const router = useRouter(
  )
  const handleRoute = () => {
      router.back()
  }
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="bg-base-100 gap-4 shadow rounded-b-lg px-6 py-4 flex items-center">
        <CaretLeft onClick={handleRoute} size={20} weight="bold" />
        <div className="flex items-center gap-3 flex-1">
          <div className="avatar">
            <div className="w-11 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="flex justify-between flex-col">
            <p className="font-semibold text-md">Bella Zamora</p>
            <p className="font-extralight text-sm text-success">Online</p>
          </div>
        </div>
        <div className="flex gap-5 items-center justify-center">
          <VideoCamera size={20} weight="bold" />
          <DotsThree size={20} weight="bold" />
        </div>
      </div>

      <p className="text-center opacity-60 py-4">Today</p>

      <div className="flex px-6 flex-col mb-20">
        <div className="chat chat-start">
          <div className="chat-bubble bg-base-100 border-slate-300 text-black text-opacity-70">
            You were the Chosen One!
          </div>
          <div className="chat-footer opacity-50">12.12</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">I loved you.</div>
          <div className="chat-footer opacity-50">Seen at 14.44</div>
        </div>
      </div>

    {/* <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full">
        <div className="p-4 w-full">
            <div className="rounded-xl p-3 bg-base-100">
                <div className="flex gap-3  mb-6 items-center">
                    <CaretLeft size={16} weight="bold" />
                    <p className="text-sm flex-1 text-center font-semibold">Create Video Meeting</p>
                    <div></div>
                </div>
                <div className="flex gap-3  mb-4 items-center">
                    <LinkSimple size={16} weight="bold" />
                    <p className="text-sm flex-1 font-extralight">Send instant meeting link</p>
                    <div></div>
                </div>
                <div className="flex gap-3  border-b border-slate-200 pb-4 items-center">
                    <CalendarDots size={16} weight="bold" />
                    <p className="text-sm flex-1 font-extralight">Schedule meeting for later</p>
                    <CaretRight size={16} weight="bold" />
                </div>
                <div className="pt-4">
                    <div className="flex gap-3">
                        <VideoCamera size={20} />
                        <div className="flex flex-col gap-2">
                        <p className="text-sm font-extralight">You're using Google Meet.</p>
                        <p className="text-xs text-primary ">Select a different plattform</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

      <div className="bottom-0 fixed px-6 py-4 bg-base-100 flex rounded-t-lg shadow w-full gap-4">
        <label className="input input-bordered w-full flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <div className="btn btn-sm btn-primary">
            <PaperPlaneRight size={16} weight="fill" />
          </div>
        </label>
      </div>
    </div>
  );
};

export default Page;
