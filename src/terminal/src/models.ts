export interface CreditCard {
  name: string,
  balance: number,
  minDue: number,
  dueDate: number,
  isClosed: number, // boolean 0 or 1
  apr: number,
  limit: number
};

export interface Loan {
  name: string,
  amount: number,
  balance: number,
  minDue: number,
  dueDate: number,
  isClosed: number, // boolean 0 or 1
  apr: number
};

export interface Cash {
  name: string,
  amount: number
};

// this is interesting because of depreciation
// eBay based values that change in my case old camera lenses or old computers
export interface Asset {
  name: string,
  value: number
};

// stock not sure how to handle this
// would need look up current value similar to asset
// you would need complex data recording for gains
// in my immediate future I'm more concerned about saving
// cash than stock, although I would like to buy some
// as a way to hide money from myself
export interface Stock {
  name: string,
  shares: number
};

export interface Crypto {
  name: string,
  qty: number
};
