import { SquaresFour } from "@phosphor-icons/react/dist/ssr";
import { FunctionComponent } from "react";

interface ButtonCatProps {
    
}
 
const ButtonCat: FunctionComponent<ButtonCatProps> = () => {
    return ( 
        <div className="btn btn-block disabled">
        <SquaresFour weight="fill" size={22} className="text-color-primary" />
        <div className="text-lg font-semibold">All Categories</div>
      </div>
     );
}
 
export default ButtonCat;