import {
  CaretLeft,
  Clock,
  Heart,
  Share,
  Star,
} from "@phosphor-icons/react/dist/ssr";
import { FunctionComponent } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  const sip =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, veniam!                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium quo praesentium dignissimos eaque iusto quisquam ab temporibus ut corporis?                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, porro autem!";
  return (
    <div className="bg-base-100 min-h-svh">
      <div className="py-6 justify-between px-6 flex">
        <CaretLeft size={24} weight="bold" />
        <Share size={24} weight="bold" />
      </div>
      <div className="w-full  skeleton rounded-none aspect-video"></div>

      <div className="px-6 mt-6">
        <div className="grid grid-cols-4 py-3 px-4 gap-3 rounded-xl bg-base-100 shadow-lg">
          <div className="flex gap-1.5 flex-col items-center">
            <div className="flex gap-0.5">
              <Heart className=" text-red-600 " weight="fill" size={12} />
              <p className="text-xs">Math</p>
            </div>
            <div className={"text-sm font-extralight"}>Algorithm</div>
          </div>
          <div className=" col-span-2 flex flex-1 border-x items-center gap-1.5 flex-col">
            <div className="flex gap-0.5">
              <Clock weight="fill" size={12} />
              <p className="text-xs">Time At</p>
            </div>
            <div className={"text-xs font-extralight text-wrap"}>
              8 AM - 9 AM <br />
              21 April 2024
            </div>
          </div>
          <div className="flex gap-1.5 flex-col">
            <div className="flex flex-col items-center">
              <div className="flex gap-0.5 ">
                <Star className="text-accent" weight="fill" size={12} />
                <p className="text-xs">Ratings</p>
              </div>
              <div className={"text-sm font-extralight items-center"}>
                <p className="text-center">4.5</p>
                <p className="opacity-60 text-center text-[.6rem] -mt-1">
                  (125 Reviews)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 text-xl font-semibold mt-6">Documentation</div>

      <div className=" min-h-72 p-6 ">
        <div className="p-6 shadow-xl rounded-lg">
          <div className="flex justify-between opacity-60 text-xs">
            <p>Chapter 1</p>
            <p>1 of 10</p>
          </div>
          {/* header  */}
          <div className="my-4 text-md font-semibold">
            Lorem ipsum dolor sit.
          </div>
          <div className="text-xs opacity-70 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
            voluptatum. Lorem ipsum dolor sit. Lorem, ipsum dolor. Lorem ipsum
            dolor sit amet.
          </div>
          <div className="pt-4 flex justify-end gap-1.5">
            <div className="btn btn-xs">prev</div>
            <div className="btn btn-xs btn-primary">next</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default page;
