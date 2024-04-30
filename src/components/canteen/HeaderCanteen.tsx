import { Chat, MapPin, ShoppingCartSimple, User } from "@phosphor-icons/react/dist/ssr";
import { FunctionComponent } from "react";

interface HeaderCanteenProps {}

const HeaderCanteen: FunctionComponent<HeaderCanteenProps> = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col text-base-100">
        <p className="opacity-70">Your Class</p>
        <div className="flex items-center">
          <MapPin size={16} weight="fill" />
          <div className="ms-1 mt-0.5">XI MIPA 2</div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-10 h-10 flex justify-center items-center bg-base-100 text-slate-500 rounded-lg ">
          <Chat size={22} weight="bold" />
        </div>
        <div className="w-10 h-10 flex justify-center items-center bg-base-100 text-slate-500 rounded-lg ">
          <ShoppingCartSimple size={22} weight="fill" />
        </div>
      </div>
    </div>
  );
};

export default HeaderCanteen;
