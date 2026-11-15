let timer = null;

const pulse = () => {
  console.log('pulse');
  clearTimeout(timer);
  timer = setTimeout(pulse, 5000);
};


timer = setTimeout(pulse, 5000);
