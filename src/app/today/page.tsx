import MapelAktif from "@/components/lessonToday/MapelAktif";
import MapelCard from "@/components/lessonToday/MapelCard";
import SearchInputLesson from "@/components/lessonToday/SearhInputLesson";
import HeadChevron from "@/components/utils/HeadChevron";
import HelpSection from "@/components/utils/HelpSection";
import { dataMapel } from "@/models/data/FE/dataMapel";
import { dataMateri } from "@/models/data/FE/dataMateri";
import { FunctionComponent } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  console.log(dataMapel);

  return (
    <div className="bg-base-100 pt-8">
      <HeadChevron title="Lesson Today's" />
      <div className="mt-6">
        <SearchInputLesson />
      </div>
      <div className="mt-6">
        <MapelAktif datax={dataMapel} title="Materi" />
      </div>
      <div className="mt-6">
        <MapelCard data={dataMateri.data.matematika} />
      </div>
      <div className="mt-6">
        <HelpSection />
      </div>
    </div>
  );
};

export default page;
