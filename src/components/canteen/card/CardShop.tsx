import { MapPin, Star } from "@phosphor-icons/react/dist/ssr";
import { FunctionComponent } from "react";

interface CardShopProps {
    category: string
    name: string
    rating: number
    reviewers: number
    shopName: string
}
 
const CardShop: FunctionComponent<CardShopProps> = ({category, name, rating, reviewers, shopName}) => {
    return ( 
        <div className="bg-base-100 shadow-lg rounded-xl">
            <div className=" aspect-square w-full rounded-t-xl bg-slate-500"></div>
            <div className="aspect-square w-full -mt-[100%]">
              <div className="btn mt-2 ml-2 text-base-100 glass btn-xs">
                {category}
              </div>
            </div>
            <div className="p-4 flex flex-col justify-between gap-2">
              <p className="font-extralight text-md">{name}</p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <Star weight="fill" className="text-accent" size={12} />{" "}
                  <p className="text-sm">{rating}</p>{" "}
                  <p className="text-xs opacity-60">({reviewers} Reviews)</p>{" "}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={12} weight="fill" className="text-primary" />
                  <p className="text-sm">{shopName}</p>
                </div>
              </div>
            </div>
          </div>
     );
}
 
export default CardShop;