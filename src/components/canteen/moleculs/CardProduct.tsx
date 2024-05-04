import { MapPin, Star } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { FunctionComponent } from "react";

interface CardProductProps {
  href: string;
  title?: string;
  category: string;
  shop: string;
  reviewers: number;
  rating: number;
}

const CardProduct: FunctionComponent<CardProductProps> = ({
  href,
  title,
  category,
  shop,
  reviewers,
  rating,
}) => {
  return (
    <Link href={href} className="bg-base-100 shadow-lg rounded-xl">
      <div className=" aspect-square w-full rounded-t-xl skeleton rounded-b-none bg-slate-500">
        <div className="absolute btn mt-2 ml-2 text-base-100 glass btn-xs">
          {category}
        </div>
      </div>
      <div className="p-4 flex flex-col justify-between gap-2">
        <p className="font-extralight text-md">{title}</p>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <Star weight="fill" className="text-accent" size={12} />{" "}
            <p className="text-sm">{rating}</p>{" "}
            <p className="text-xs opacity-60">({reviewers} Reviews)</p>{" "}
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={12} weight="fill" className="text-primary" />
            <p className="text-sm">{shop}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;
