const netWorth = document.getElementById("net-worth");
const totalDebt = document.getElementById("total-debt");
const cash = document.getElementById("cash");
const credit = document.getElementById("credit");
const otherCash = document.getElementById("other-cash");

// set values
const netWorthCalc = financeValues.cash + (-1 * financeValues.creditCardsDebt) + (-1 * financeValues.loans);
netWorth.innerText = usdFormatter.format(netWorthCalc);
const totalDebtCalc = (-1 * financeValues.creditCardsDebt) + (-1 * financeValues.loans);
totalDebt.innerText = usdFormatter.format(totalDebtCalc);
cash.innerText = usdFormatter.format(financeValues.cash);
credit.innerText = usdFormatter.format(financeValues.creditCardsAvail);
const otherCashCalc = financeValues.cash + financeValues.assets;
otherCash.innerText = usdFormatter.format(otherCashCalc);
