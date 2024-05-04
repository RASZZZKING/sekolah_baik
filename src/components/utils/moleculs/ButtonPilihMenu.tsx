"use client"
import { FunctionComponent, SetStateAction } from "react";

interface ButtonPilihMenuProps {
  isStart: boolean;
  isEnd: boolean;
  title: string;
  setActiveCat: React.Dispatch<SetStateAction<string>>
  activeCat: boolean
}
 
const ButtonPilihMenu: FunctionComponent<ButtonPilihMenuProps> = ({isStart, isEnd, title, setActiveCat, activeCat}) => {
    const handleSet = () => {
      setActiveCat(
        title
      )
    }
    return ( 
        <button
              onClick={handleSet}
              className={`btn btn-sm ${isStart && "ms-6"} ${
                activeCat
                  ? "btn-primary"
                  : "border-slate-300 bg-base-100 text-slate-600"
              } ${isEnd && "me-6"} `}
            >
              {title}
            </button>
     );
}
 
export default ButtonPilihMenu;