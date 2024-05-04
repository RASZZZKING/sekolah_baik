import VoucherCard from "@/components/canteen/moleculs/VoucherCard";
import SearchInputLesson from "@/components/lessonToday/SearhInputLesson";
import HeaderShopCart from "@/components/utils/HeaderShopCart";
import { dataVoucher } from "@/models/data/FE/dataVoucher";
import { getExpiredTime } from "@/models/data/libs/getExpiredTime";
import { FunctionComponent } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  
  return (
    <div className="min-h-svh bg-base-100 pt-6 pb-6">
      <HeaderShopCart title={"Voucher"} />
      <div className="mt-7">
        <SearchInputLesson />
      </div>
      <div className="px-6 mt-6">
        <div className="flex flex-col gap-3">
          {dataVoucher.data.reverse().map((cb,i)=>(
            <VoucherCard data={cb} key={i} expired={cb.expired} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
