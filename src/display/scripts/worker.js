if (window.Worker) {
  console.log('in worker');
  const workerTicker = new Worker('./tick.js');

  workerTicker.onmessage = (event) => {
    console.log(event.data);
  };
}
