"use client";
import { Trash } from "@phosphor-icons/react";
import { FunctionComponent, useState } from "react";

interface CardCartShopProps {
  name: string
  flavour?: string
  size?: string
  quantitys: number
  price: number
}

const CardCartShop: FunctionComponent<CardCartShopProps> = ({
  name,
  flavour,
  size,
  quantitys,
  price,
}) => {
  price = price / 1000
  const [quantity, setQuantity] = useState<number>(quantitys);
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const handleMinus = () => {
    quantity !== 1 && setQuantity(quantity - 1);
  };
  const handleDelete = () => {
    alert("Produk ini telah dihapus");
  };
  return (
    <div className="flex gap-3 pb-4  items-center border-b skl border-slate-400 ">
      <div className="h-16 w-16 skeleton bg-slate-700 rounded-lg"></div>
      <div className="flex-1 h-16 flex flex-col justify-between">
        <div>
          <p className="text-md font-semibold">{name}</p>
          <p className="text-xs opacity-60 -mt-0.5">
            {flavour && `Flavour: ${flavour}`}{size && flavour && ","} {size && ` Size: ${size}`}
          </p>
        </div>
        <div className="text-md opacity-60 text-xs">
          Quantity:
          <div className="join scale-75">
            <button onClick={handleMinus} className="join-item btn btn-xs">
              -
            </button>
            <button className="join-item btn btn-xs">{quantity}</button>
            <button onClick={handlePlus} className="join-item btn btn-xs">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-16 justify-between flex-col items-end">
        <Trash
          onClick={handleDelete}
          size={18}
          weight="bold"
          className="mt-2"
        />
        <div className="text-md font-semibold">{price * quantity}K</div>
      </div>
    </div>
  );
};

export default CardCartShop;
