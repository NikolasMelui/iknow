const slow = x => new Promise((resolve) => setTimeout(() => resolve(x), 2000));


const memoizationDecorator = (func) => {
  const cache = new Map();
  return (x) => new Promise(async (resolve) =>
    cache.has(x) ? (
      console.info('Getting from cache'),
      resolve(cache.get(x))
    ) : (
        console.info('Caching...'),
        result = await func(x),
        cache.set(x, result),
        resolve(result)

      ))
}

const faster = memoizationDecorator(slow);

(async () => {
  try {
    console.time("Slow");
    console.log(`Slow - ${await slow(1)}`);
    console.timeEnd("Slow");
    console.time("Fast: first tick");
    console.log(`Fast: first tick - ${await faster(2)}`);
    console.timeEnd("Fast: first tick");
    console.time("Fast: next tick");
    console.log(`Fast: next tick - ${await faster(2)}`);
    console.timeEnd("Fast: next tick");
    console.time("Fast: next tick");
    console.log(`Fast: next tick - ${await faster(2)}`);
    console.timeEnd("Fast: next tick");
    console.time("Fast: next tick");
    console.log(`Fast: next tick - ${await faster(2)}`);
    console.timeEnd("Fast: next tick");
  } catch (error) {
    console.error(error);
  }
})();
