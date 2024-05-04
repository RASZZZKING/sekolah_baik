import { FunctionComponent } from "react";
import CardShopProduct from "./moleculs/CardShopProduct";
import CardProduct from "./moleculs/CardProduct";

interface GridShopProductProps {
  data: KatCan2[]
  isShop?: boolean
}

const GridShopProduct: FunctionComponent<GridShopProductProps> = ({ data, isShop }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((cb, i) => {
        const Dg = () => (
          <>
            {cb.data.map((sb, n) => (
              <CardProduct
              href={`canteen/product/${i}00${n}`}
              category={cb.name}
              title={!isShop ? sb.name : ""} 
              shop={sb.shop_name}
              rating={sb.rating}
              reviewers={sb.reviewers}
              key={n}
            />
            ))}
          </>
        );
        return <Dg key={i} />;
      })}
    </div>
  );
};

export default GridShopProduct;
