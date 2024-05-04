import HeaderCanteen from "@/components/canteen/HeaderCanteen";
import SectionMenuShop from "@/components/canteen/SectionMenuShop";
import SectionLowCanteen from "@/components/canteen/SectionLowCanteen";
import { FunctionComponent } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  return (
    <>
      <div className="px-6 pt-6  bg-primary flex gap-6 flex-col">
        <HeaderCanteen />
        <SectionMenuShop />
      </div>
      <SectionLowCanteen />
    </>
  );
};

export default page;
