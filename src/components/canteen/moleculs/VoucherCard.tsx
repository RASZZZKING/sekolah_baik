"use client"
import { Coins } from "@phosphor-icons/react";
import { SealPercent } from "@phosphor-icons/react/dist/ssr";
import { FunctionComponent } from "react";

interface VoucherCardProps {
  data: Voucher;
  expired: string | number
}

const VoucherCard: FunctionComponent<VoucherCardProps> = ({ data, expired }) => {
  const handleUse = () => {
    alert("Voucher berhasil dipakai");
  };
  
  return (
    <div>
      <div className={`${expired === "Expired" && "opacity-60"} px-4  py-3 w-full shadow-lg rounded-lg bg-base-100`} >
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            {data.category === "discount" ? (
              <SealPercent size={16} weight="bold" />
            ) : (
              <Coins size={16} weight="bold" />
            )}

            <div className="font-semibold text-md">
              {data.category}{" "}
              {data.type === "slice" ? data.amount : data.amount}
              {data.type === "percent" ? "%" : "K"}
            </div>
          </div>
          <div className="opacity-60 text-md" suppressHydrationWarning suppressContentEditableWarning>
            {expired}
          </div>
        </div>
        <div className="mt-2 text-wrap opacity-85">{data.description}</div>
        <div className="flex justify-end">
          <div onClick={handleUse} className="btn btn-primary btn-xs mt-2">
            Pakai
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherCard;
