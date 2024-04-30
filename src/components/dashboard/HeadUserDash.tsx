import {
  Chat,
  ForkKnife,
  ShoppingCartSimple,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { FunctionComponent } from "react";

interface HeadUserDashProps {
  user: {
    name: string;
  };
}

const HeadUserDash: FunctionComponent<HeadUserDashProps> = ({ user }) => {
  return (
    <div className="flex text-base-100 justify-between gap-3 items-center">
      {/* for image */}
      <div className="h-12 skeleton aspect-square rounded-xl flex justify-end">
        <div className="absolute w-3 h-3 border-2 border-white bg-primary rounded-full -mt-0.5 -mr-0.5 "></div>
      </div>
      <div className="flex justify-between flex-col flex-1">
        <p className="opacity-60">Let's go study</p>
        <p>{user.name}</p>
      </div>
      <div className="flex gap-2">
        <Link
          href={"/canteen"}
          className="h-8 aspect-square bg-accent rounded-xl flex justify-center items-center"
        >
          <ForkKnife size={16} weight="fill" color="#f5f5f5" />
        </Link>
        <Link
          href={"/chat"}
          className="h-8 aspect-square bg-accent rounded-xl flex justify-center items-center"
        >
          <Chat size={16} weight="fill" color="#f5f5f5" />
        </Link>
      </div>
    </div>
  );
};

export default HeadUserDash;
