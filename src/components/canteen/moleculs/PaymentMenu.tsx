import { FunctionComponent } from "react";

interface PaymentMenuProps {
    children: React.ReactNode
    title: string
    value: string | number
}
 
const PaymentMenu: FunctionComponent<PaymentMenuProps> = ({children, title, value}) => {
    return ( 
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-0.5">
            {children}
            <p className="font-semibold text-xs">{title}</p>
          </div>
          <div className="btn btn-xs text-accent bg-base-100 border-slate-500">
            {value}
          </div>
        </div>
     );
}
 
export default PaymentMenu;