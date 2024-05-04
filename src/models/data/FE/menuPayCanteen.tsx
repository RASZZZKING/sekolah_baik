import { Wallet, Coins, Tag } from "@phosphor-icons/react/dist/ssr";



export const menuPayCanteen: DataPayMenu = {
  data: [
    {
      title: "Yadpay",
      value: 10_000,
      children: <Wallet size={13} />
    },
    {
      title: "Coins",
      value: 10_000,
      children: <Coins size={13} />,
    },
    {
      title: "Voucher",
      value: "4 Voucher",
      children: <Tag size={13} className="-rotate-90" />,
    },
  ],
};
