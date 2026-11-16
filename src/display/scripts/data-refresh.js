let timer = null;

const pulse = () => {
  const change = document.getElementById("change");
  const aprGrowth = calcTotalAprGain();
  change.innerText = aprGrowth;
  clearTimeout(timer);
  timer = setTimeout(pulse, 5000);
};


timer = setTimeout(pulse, 5000);
