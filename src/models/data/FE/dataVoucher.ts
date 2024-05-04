const formatDateTime = (year: number, month: number, day:number, hour:number, minute:number) => {
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedHour = hour < 10 ? `0${hour}` : hour;
  const formattedMinute = minute < 10 ? `0${minute}` : minute;

  return `${year}-${formattedMonth}-${formattedDay}T${formattedHour}:${formattedMinute}`;
};

export const dataVoucher: DataVocher = {
  data: [
    {
      id: 1,
      name: "Back to School",
      type: "percent",
      amount: 10,
      description: "Get 10% discount on canteen purchases",
      category: "discount",
      stock: 100,
      expired: 1649998800,
    },
    {
      id: 2,
      name: "Lunch Special",
      type: "slice",
      amount: 5,
      description: "Get 5K cashback on canteen purchases",
      category: "cashback",
      stock: 50,
      expired: 1649998800,
    },
    {
      id: 3,
      name: "Happy Hour",
      type: "percent",
      amount: 15,
      description: "Get 15% discount on canteen purchases",
      category: "discount",
      stock: 75,
      expired: 1649998800,
    },
    {
      id: 4,
      name: "Weekend Treat",
      type: "slice",
      amount: 8,
      description: "Get 8K cashback on canteen purchases",
      category: "cashback",
      stock: 30,
      expired: 1649998800,
    },
    {
      id: 5,
      name: "Healthy Choices",
      type: "percent",
      amount: 20,
      description: "Get 20% discount on canteen purchases",
      category: "discount",
      stock: 60,
      expired: 1649998800,
    },
    {
      id: 6,
      name: "Snack Attack",
      type: "slice",
      amount: 3,
      description: "Get 3K cashback on canteen purchases",
      category: "cashback",
      stock: 45,
      expired: 1649998800,
    },
    {
      id: 7,
      name: "Midweek Madness",
      type: "percent",
      amount: 12,
      description: "Get 12% discount on canteen purchases",
      category: "discount",
      stock: 80,
      expired: 1649998800,
    },
    {
      id: 8,
      name: "Coffee Break",
      type: "slice",
      amount: 2,
      description: "Get 2K cashback on canteen purchases",
      category: "cashback",
      stock: 25,
      expired: 1649998800,
    },
    {
      id: 9,
      name: "Sweet Tooth",
      type: "percent",
      amount: 25,
      description: "Get 25% discount on canteen purchases",
      category: "discount",
      stock: 90,
      expired: 1649998800,
    },
    {
      id: 10,
      name: "Tea Time",
      type: "slice",
      amount: 4,
      description: "Get 4K cashback on canteen purchases",
      category: "cashback",
      stock: 35,
      expired: formatDateTime(2024, 5, 6, 8, 0),
    },
  ],
};
