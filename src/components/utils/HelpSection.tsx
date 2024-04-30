"use client";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

interface HelpSectionProps {}

const HelpSection: FunctionComponent<HelpSectionProps> = () => {
  const path = usePathname();
  const ContentHelp = () => (
    <>
      <div className="h-0.5 bg-slate-300"></div>
      <p className="ms-6 font-xl font-semibold">Punya pertanyaan?</p>
      <div className="pb-4 border-b ">
        <div className="flex justify-between items-center gap-3 px-6">
          <div className="h-9 w-9 rounded-xl skeleton "></div>
          <div className="flex flex-col justify-between flex-1">
            <p className="font-semibold text-sm">Pertanyaan soal sekolah?</p>
            <p className="opacity-60 text-xs">
              Cari semua pertanyaan kamu disini
            </p>
          </div>
          <CaretRight size={24} weight="bold" />
        </div>
      </div>
      <div className="pb-4 border-b ">
        <div className="flex justify-between items-center gap-3 px-6">
          <div className="h-9 w-9 rounded-xl skeleton "></div>
          <div className="flex flex-col justify-between flex-1">
            <p className="font-semibold text-sm">Pertanyaan soal sekolah?</p>
            <p className="opacity-60 text-xs">
              Cari semua pertanyaan kamu disini
            </p>
          </div>
          <CaretRight size={24} weight="bold" />
        </div>
      </div>
    </>
  );
  return (
    <>
      {/* {path === "/today" ? (
          ) : (
              <ContentHelp />
            )} */}
      <div className="flex gap-3 flex-col">
        <ContentHelp />
      </div>
    </>
  );
};

export default HelpSection;
