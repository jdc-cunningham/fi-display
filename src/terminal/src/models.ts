interface CreditCard {
  name: string,
  balance: number,
  minDue: number,
  dueDate: number,
  isClosed: boolean,
  apr: number,
  creditLimit: number
};

interface Loan {
  name: string,
  amount: number,
  balance: number,
  minDue: number,
  dueDate: number,
  isClosed: boolean,
  apr: number
};

interface Cash {
  name: string,
  amount: number
};

// this is interesting because of depreciation
// eBay based values that change in my case old camera lenses or old computers
interface Asset {
  name: string,
  value: number
};

// stock not sure how to handle this
// would need look up current value similar to asset
// you would need complex data recording for gains
// in my immediate future I'm more concerned about saving
// cash than stock, although I would like to buy some
// as a way to hide money from myself
interface Stock {
  name: string,
  shares: number
};

interface Crypto {
  name: string,
  qty: number
};
