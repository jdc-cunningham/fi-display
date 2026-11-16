// APR here is the yearly value
// balance: eg. $2,500.00
// APR: eg. 32%
const calcAPRSecGrowth = (balance, apr) => {
  const aprSecond = apr / 31536000; // lol this is silly leap year changes this
  return balance * (aprSecond / 100);
};

const calcElapsedTimeSecs = (lastUpdate) => {
  return ((Date.now() - lastUpdate) / 1000);
};

// these values come from values.js
const calcTotalAprGain = () => {
  let aprSecGain = 0;

  const elapsedTime = calcElapsedTimeSecs(lastUpdated);

  // credit cards
  creditCards.forEach(creditCard => {
    aprSecGain += (calcAPRSecGrowth(creditCard.balance, creditCard.apr) * elapsedTime);
  });

  // loans
  loans.forEach(loan => {
    aprSecGain += (calcAPRSecGrowth(loan.balance, loan.apr) * elapsedTime);
  });

  return usdFormatter.format(aprSecGain);
};
