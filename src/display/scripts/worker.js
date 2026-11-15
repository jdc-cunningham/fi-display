if (window.Worker) {
  const workerTicker = new Worker('./tick.js');

  workerTicker.onmessage = (event) => {
    console.log(event.data);
  };
}
