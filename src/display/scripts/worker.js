if (window.Worker) {
  const workerTicker = new Worker('./tick.js');

  workerClock.onmessage = (event) => {
    console.log(event.data);
  };
}
