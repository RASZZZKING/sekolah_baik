import HeadUserDash from "@/components/dashboard/HeadUserDash";
import PilihLayanan from "@/components/dashboard/PilihLayanan";
import PilihMapel from "@/components/dashboard/PilihMapel";
import SearchInput from "@/components/dashboard/SearchInput";
import SectionLow from "@/components/dashboard/sectionLower";
import { dataMapel } from "@/models/data/frontEnd/dataMapel";
import { FunctionComponent } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  const user = {
    name: "Farras",
  };
  return (
    <>
    <div className="bg-primary px-4 pt-8 pb-12">
      <HeadUserDash user={user} />
      <div className="mt-10">
        <SearchInput />
      </div>
      <PilihLayanan />
      <PilihMapel />
    </div>
    <div className="-mt-8 bg-base-100 pt-8 rounded-t-3xl">
      <SectionLow />
    </div>
    </>
  );
};

export default page;
