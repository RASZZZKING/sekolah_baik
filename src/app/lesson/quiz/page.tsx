"use client"
import
{
  X,
} from "@phosphor-icons/react/dist/ssr";
import { FunctionComponent } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
    const handleChange = () => {

    }
  return (
    <div className="bg-base-100 min-h-svh">
      <div className="py-6 px-6 grid grid-cols-3">
        <X size={24} weight="bold" />
        <p className="text-lg text-center font-semibold">UH MTK</p>
        <p className="text-primary text-lg font-semibold text-end">
          Finish test
        </p>
      </div>
      <div className="-mt-[.55rem]">
        <progress
          className="progress progress-success  rounded-none"
          value={20}
          max="100"
        ></progress>
      </div>

      <div className="px-6 text-sm opacity-60 font-semibold my-3 text-primary">
        QUESTIONS 1 OF 10
      </div>

      <div className="w-full  skeleton rounded-none  aspect-video"></div>

      <div className="px-6 mt-6">
        <div className="text-sm whitespace-pre-line">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
          voluptatum. Lorem ipsum dolor sit. Lorem, ipsum dolor. Lorem ipsum
          dolor sit amet?
        </div>
      </div>

      <div className="my-6 px-6 flex flex-col gap-4">
        <label htmlFor="oke1" className="p-4 form-control flex-row gap-3 shadow-lg rounded-xl border border-blue-950  bg-blue-950 text-base-100">
          <input
            type="radio"
            onChange={handleChange}
            name="radio-1"
            id="oke1"
            className="radio bg-cyan-50 radio-primary"
          />
          <label  className="text-sm label p-0 m-0" htmlFor="oke1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, laudantium.
          </label>
        </label>
        <label htmlFor="oke2" className="p-4 form-control flex-row gap-3 shadow-lg rounded-xl border border-blue-950 text-blue-950">
          <input
            type="radio"
            onChange={handleChange}
            name="radio-1"
            id="oke2"
            className="radio bg-cyan-50 radio-primary"
          />
          <label  className="text-sm label p-0 m-0" htmlFor="oke2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, laudantium.
          </label>
        </label>
        <label htmlFor="oke3" className="p-4 form-control flex-row gap-3 shadow-lg rounded-xl border border-blue-950 text-blue-950">
          <input
            type="radio"
            onChange={handleChange}
            name="radio-1"
            id="oke3"
            className="radio bg-cyan-50 radio-primary"
          />
          <label  className="text-sm label p-0 m-0" htmlFor="oke3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, laudantium.
          </label>
        </label>
        <label htmlFor="oke4" className="p-4 form-control flex-row gap-3 shadow-lg rounded-xl border border-blue-950 text-blue-950">
          <input
            type="radio"
            onChange={handleChange}
            name="radio-1"
            id="oke4"
            className="radio bg-cyan-50 radio-primary"
          />
          <label  className="text-sm label p-0 m-0" htmlFor="oke4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, laudantium.
          </label>
        </label>
      </div>

      <div className="px-6 pb-6 flex justify-between gap-1.5">
        <div className="btn btn-md min-h-10 max-h-10 h-10">prev</div>
        <div className="btn btn-md min-h-10 max-h-10 h-10 btn-primary">
          next
        </div>
      </div>
    </div>
  );
};

export default page;
