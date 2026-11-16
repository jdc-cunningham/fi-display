const netWorth = document.getElementById("net-worth");
const totalDebt = document.getElementById("total-debt");
const cash = document.getElementById("cash");
const otherCash = document.getElementById("other-cash");

// set values
const netWorthCalc = financeValues.cash + (-1 * financeValues.creditCardsDebt) + (-1 * financeValues.loans);
netWorth.innerText = usdFormatter.format(netWorthCalc);
const totalDebtCalc = financeValues.creditCardsDebt + financeValues.loans;
totalDebt.innerText = usdFormatter.format(-1 * totalDebtCalc);
cash.innerText = usdFormatter.format(financeValues.cash);
const otherCashCalc = financeValues.cash + financeValues.creditCardsAvail + financeValues.assets;
otherCash.innerText = usdFormatter.format(otherCashCalc);
