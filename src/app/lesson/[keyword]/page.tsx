import MapelAktif from "@/components/lessonToday/MapelAktif";
import MapelCard from "@/components/lessonToday/MapelCard";
import SearchInputLesson from "@/components/lessonToday/SearhInputLesson";
import HeadChevron from "@/components/utils/HeadChevron";
import HelpSection from "@/components/utils/HelpSection";
import { dataMateri } from "@/models/data/FE/dataMateri";
import { FunctionComponent } from "react";

interface pageProps {
  params: {
    keyword: string;
  };
}

const page: FunctionComponent<pageProps> = ({ params }) => {
  let { keyword } = params;
  keyword = decodeURI(keyword);
  const data = dataMateri.data[keyword];
  return (
    <div className="bg-base-100 pt-8">
      <HeadChevron title={keyword} />
      <div className="flex-col flex gap-6 mt-7">
        <SearchInputLesson />
        <MapelAktif datax={data} title="Semester" />
        <MapelCard data={data} />
        <HelpSection />
      </div>
    </div>
  );
};

export default page;
