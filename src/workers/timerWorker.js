let timeoutId = null;
let isRunning = false;

self.onmessage = function (event) {
  const { activeTask, secondsRemaining, isRunning } = event.data;
  if (!activeTask || !isRunning) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = null;
    return;
  }

  const start = Date.now();
  const endDate = start + secondsRemaining * 1000;

  function tick() {
    const now = Date.now();
    const remaining = Math.max(0, Math.ceil((endDate - now) / 1000));

    self.postMessage(remaining);

    if (remaining <= 0) return;

    timeoutId = setTimeout(tick, 1000);
  }

  if (!timeoutId) tick();
};
