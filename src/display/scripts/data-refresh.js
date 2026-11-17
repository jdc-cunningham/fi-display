let timer = null;

const pulse = () => {
  const change = document.getElementById("change");
  const aprGrowth = calcTotalAprGain();
  netWorth.innerText = usdFormatter.format(netWorthCalc + (-1 * aprGrowth));
  totalDebt.innerText = usdFormatter.format(totalDebtCalc + (-1 * aprGrowth));
  change.innerText = usdFormatter.format(-1 * aprGrowth);
  clearTimeout(timer);
  timer = setTimeout(pulse, 5000);
};


timer = setTimeout(pulse, 5000);
