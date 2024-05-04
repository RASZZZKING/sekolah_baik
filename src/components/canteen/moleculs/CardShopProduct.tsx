import { MapPin, Star } from "@phosphor-icons/react/dist/ssr";
import { FunctionComponent } from "react";

interface CardShopProductProps {
    shop_name: string
    category: string
    ratings : number
    reviewers : number  
}

const CardShopProduct: FunctionComponent<CardShopProductProps> = ({
  shop_name,
  category,
  ratings,
  reviewers,
}) => {
  return (
    <div className="bg-base-100 shadow-lg rounded-xl">
      <div className=" aspect-square w-full rounded-t-xl bg-slate-500">
        <div className="absolute btn mt-2 ml-2 text-base-100 glass btn-xs">
          {category}
        </div>
      </div>
      <div className="p-4 flex flex-col justify-between gap-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <Star weight="fill" className="text-accent" size={12} />{" "}
            <p className="text-sm">{ratings}</p>{" "}
            <p className="text-xs opacity-60">({reviewers} Reviews)</p>{" "}
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={12} weight="fill" className="text-primary" />
            <p className="text-sm">{shop_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShopProduct;
