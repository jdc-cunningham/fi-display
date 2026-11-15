console.log('worker script');

if (window.Worker) {
  console.log('in worker');
  const workerTicker = new Worker('./tick.js');
  console.log('past worker instance');

  workerTicker.onmessage = (event) => {
    console.log(event.data);
  };
}
