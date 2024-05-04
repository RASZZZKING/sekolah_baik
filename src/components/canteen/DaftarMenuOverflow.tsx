"use client"
import { FunctionComponent, useState } from "react";
import ButtonPilihMenu from "../utils/moleculs/ButtonPilihMenu";

interface DaftarMenuOverflowProps {
    data: KatCan2[]
    title: string
}
 
const DaftarMenuOverflow: FunctionComponent<DaftarMenuOverflowProps> = ({data, title}) => {
    const [activeCat, setActiveCat] = useState<string>(title);

    return ( 
        <div className="mt-2 flex gap-2 whitespace-nowrap overflow-x-auto max-w-full">
          <ButtonPilihMenu
            title={title}
            activeCat={activeCat === title}
            setActiveCat={setActiveCat}
            isStart={true}
            isEnd={false}
          />
          {data.map((cb, index) => (
            <ButtonPilihMenu
              key={index}
              title={cb.name}
              activeCat={activeCat === cb.name}
              setActiveCat={setActiveCat}
              isStart={false}
              isEnd={index + 1 === data.length}
            />
          ))}
        </div>
     );
}
 
export default DaftarMenuOverflow;