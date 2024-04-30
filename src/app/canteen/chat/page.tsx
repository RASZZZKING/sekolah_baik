import SearchInput from "@/components/dashboard/SearchInput";
import { FunctionComponent } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  return (
    <div className="min-h-svh bg-base-100">
      <div className="flex justify-center p-6 items-center">
        {/* <CaretLeft size={24} weight="bold" className="cursor-pointer" /> */}
        <p className="text-xl font-bold capitalize">Message</p>
        {/* <ShoppingCart size={24} weight="bold" className="cursor-pointer" /> */}
      </div>

      <div className="mb-6 shadow rounded-2xl mx-6">
        <SearchInput />
      </div>
      <div className="gap-2 flex-col flex ">
        <p className="text-md px-6">Recent</p>
        <div className="overflow-x-auto whitespace-nowrap max-w-full  flex gap-2">
          <div className="flex flex-col gap-2.5 items-center ms-6 mt-2">
            <div className="avatar">
              <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <p className="text-xs font-extralight">Darrel</p>
          </div>
          <div className="flex flex-col gap-2.5 ms-3 items-center mt-2">
            <div className="avatar">
              <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <p className="text-xs font-extralight">Darrel</p>
          </div>
          <div className="flex flex-col gap-1.5 ms-3 items-center mt-1">
            <div className="avatar">
              <div className="w-11 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <p className="text-xs font-extralight">Darrel</p>
          </div>
        </div>
      </div>

      <div className="py-4 px-6 flex justify-between items-center">
        <p className="text-md font-semibold">Messages</p>
        <p className="text-xs text-primary">New Messages</p>
      </div>

      <div className="flex flex-col gap-3 px-6">
        <div className="flex pb-3 border-b border-slate-400 gap-3 items-center">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="flex justify-between h-10 flex-col flex-1 max-w-full truncate">
            <p className="text-md font-semibold">Job.In Team</p>
            <p className="text-xs truncate font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
              provident?
            </p>
          </div>
          <div className="flex justify-between flex-col items-center h-10">
            <p className="text-xs opacity-60">2h ago</p>
            <div className="w-4 h-4 bg-success rounded-full text-[8px] text-base-100 font-bold flex items-center justify-center">
              3
            </div>
          </div>
        </div>
        <div className="flex pb-3 border-b border-slate-400 gap-3 items-center">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="flex justify-between h-10 flex-col flex-1 max-w-full truncate">
            <p className="text-md font-semibold">Job.In Team</p>
            <p className="text-xs truncate font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
              provident?
            </p>
          </div>
          <div className="flex justify-between flex-col items-center h-10">
            <p className="text-xs opacity-60">2h ago</p>
            <div className="w-4 h-4 bg-success rounded-full text-[8px] text-base-100 font-bold flex items-center justify-center">
              3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
