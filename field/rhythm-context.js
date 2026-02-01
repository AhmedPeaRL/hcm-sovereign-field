export function createRhythmContext(config) {
  let tick = 0;

  setInterval(() => {
    tick++;
  }, config.rhythmTickMs);

  return {
    now: () => tick,
    listen: fn => fn(tick)
  };
}
