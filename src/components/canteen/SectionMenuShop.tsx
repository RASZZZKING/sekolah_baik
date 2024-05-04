import { FunctionComponent, useState } from "react";
import Menu from "./moleculs/Menu";
import PaymentMenu from "./moleculs/PaymentMenu";
import ButtonCat from "./moleculs/ButtonCat";
import { menuPayCanteen } from "@/models/data/FE/menuPayCanteen";
import { menuCanteen } from "@/models/data/FE/menuCanteen";

interface SectionMenuShopProps {}

const SectionMenuShop: FunctionComponent<SectionMenuShopProps> = () => {
  return (
    <div className="p-4 flex flex-col gap-5 bg-base-100 rounded-xl shadow-xl">
      <div className="flex justify-between rounded-xl py-2 px-3 bg-slate-300 bg-opacity-40 border-slate-300 border shadow-inner text-xs">
        {menuPayCanteen.data.map((cb, i) => (
          <PaymentMenu key={i} title={cb.title} value={cb.value}>
            {cb.children}
          </PaymentMenu>
        ))}
      </div>
      <div className="flex justify-between">
        {menuCanteen.data.map((cb, i) => (
          <Menu key={i} href={cb.href} title={cb.title} image={cb.image} />
        ))}
      </div>
      <ButtonCat />
    </div>
  );
};

export default SectionMenuShop;
