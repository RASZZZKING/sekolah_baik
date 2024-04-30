import HeaderDash from "@/components/utils/HeaderDash";
import HelpSection from "@/components/utils/HelpSection";
import { dataMapel } from "@/models/data/frontEnd/dataMapel";
import { CaretRight, Star } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { FunctionComponent } from "react";

interface SectionLowProps {}

const SectionLow: FunctionComponent<SectionLowProps> = () => {
  return (
    <div className="flex flex-col gap-5">
      <HeaderDash
        title="Popular Question"
        subtitle="Learn have fun and enjoy it"
        href="/lesson/allquiz"
      />
      <div className="overflow-auto whitespace-nowrap flex max-w-full gap-4 pb-10">
        {dataMapel.slice(3, 7).map((cb, index) => (
          <Link href={"/lesson/quiz"}
            className={`${index === 0 && "ms-6"} ${
              index === 3 && "me-3"
            } min-w-72 rounded-2xl bg-base-100 shadow-xl`}
            key={index}
          >
            <div className="h-40 bg-primary rounded-t-2xl flex flex-col justify-center items-center">
              <div className="h-4 z-10 flex justify-center w-2/3">
                <p className="w-3/4 bg-fuchsia-500 text-xs font-semibold rounded justify-center items-center flex text-center">
                  SMA GRADE 10
                </p>
              </div>
              <div className="w-2/3 h-20 -mt-2">
                <p className="text-2xl flex justify-center items-center h-full text-wrap rounded-xl bg-base-100 text-center leading-6 italic">
                  {cb.name}
                </p>
              </div>
            </div>

            <div className="flex justify-end -mt-32">
              <div className=" -mr-12 -mt-2">
                <div className="border p-1 rounded-full bg-accent bg-opacity-60 border-accent">
                  <Star size={12} className="text-accent" weight="fill" />
                </div>
              </div>
              <Star size={12} className="text-blue-300 -mr-12" weight="fill" />
              <div className="w-2/6 mt-[4.5rem] h-14 rounded-none skeleton"></div>
            </div>

            {/* <div className="h-40 skeleton rounded-t-2xl rounded-b-none flex flex-col justify-center items-center"></div> */}

            <div className="h-20 pt-3 mb-4 px-4 flex flex-col justify-between">
              <p className="text-sm font-semibold text-wrap">
                Class 10 {cb.name} Weekly Exam Questiions
              </p>
              {/* <p className="text-sm font-semibold text-wrap skeleton rounded-xl h-8 opacity-50"></p> */}

              <p className="text-sm opacity-50">
                {cb.name}
              </p>

              {/* <p className="text-sm h-3 opacity-50 skeleton"></p> */}
              {/* <p className="text-sm h-3 max-w-20 opacity-50 skeleton"></p> */}
            </div>
          </Link>
        ))}
      </div>

      <div className="-mt-6">
        <HeaderDash title="Free Class For You" href="/lesson/allclass" />
      </div>

      <div className=" overflow-auto whitespace-nowrap flex max-w-full gap-4 pb-10">
        {dataMapel.slice(3, 7).map((cb, index) => (
          <Link href={"/lesson/detail"}
            className={`${index === 0 && "ms-6"} ${
              index === 3 && "me-3"
            } min-w-[10.5rem] rounded-2xl bg-base-100 shadow-xl`}
            key={index}
          >
            <div className="h-32 bg-primary rounded-t-2xl flex flex-col justify-center items-center">
              <div className="h-4 z-10 flex justify-center w-2/3">
                <p className="w-3/4 bg-fuchsia-500 text-xs font-semibold rounded justify-center items-center flex text-center">
                  SMA GRADE 10
                </p>
              </div>
              <div className="w-2/3 h-20 -mt-2">
                <p className="text-2xl flex justify-center items-center h-full text-wrap rounded-xl bg-base-100 text-center leading-6 italic">
                  {cb.name}
                </p>
              </div>
            </div>
            <div className="flex justify-between -mt-32">
              <div className="bg-accent text-xs flex justify-center items-center py-0.5 font-semibold text-base-100  w-12 h-4 rounded -ml-1.5 mt-1">
                New
              </div>
              <Star
                size={12}
                className="text-blue-300 -mr-32 mt-7"
                weight="fill"
              />
              <div className="w-2/6 mt-[5.5rem] h-10 rounded-none skeleton"></div>
            </div>
            {/* <div className="h-32 skeleton rounded-b-none rounded-t-2xl flex flex-col justify-center items-center"> </div> */}

            <div className="h-20 pt-3 mb-6 px-4 flex flex-col justify-between">
              <p className="text-sm font-semibold text-wrap ">
                Class 10 {cb.name} Weekly Exam Questiions
              </p>
              <p className="text-sm opacity-50">{cb.name}</p>
            </div>

            {/* <div className="h-20 pt-3 mb-6 px-4 flex flex-col justify-between">
              <p className="text-sm skeleton opacity-50 rounded-lg h-8 font-semibold text-wrap ">
              </p>
              <p className="text-sm opacity-50 h-3 max-w-20 skeleton"></p>
            </div> */}
          </Link>
        ))}
      </div>

      <div className="-mt-6">
        <HelpSection />
      </div>
    </div>
  );
};

export default SectionLow;
