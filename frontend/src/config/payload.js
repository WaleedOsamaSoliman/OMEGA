export const payload = {
  theme: "dark",
  customer: {
    id: 0,
    name: "",
    balance: 0,
  },
  receit: {
    info: {
      paymentMethod: "cash",
      discountPercent: 0,
      discountMoney: 0,
      additionalMoney: 0,
      notes: [],
      totalBefore: 0,
      totalAfter: 0,
    },
  },
};

Object.freeze(payload);
