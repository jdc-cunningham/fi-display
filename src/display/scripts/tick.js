let i = 0;
const curSec = new Date().getSeconds();
const curMsec = parseInt((60 - curSec).toString() + '000');

const ticker = () => {
  i++;

  if (i > 60) {
    i = 0;
  }

  console.log('tick');

  if (i % 5 === 0) {
    postMessage('5 second tick');
    setTimeout(ticker, 1000);
  }
};

setTimeout(ticker, curMsec);
