/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

function createCounter(n: number): () => number {
  return function () {
    return n++;
  };
}

// ============================================================ //

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

async function sleep(millis: number): Promise<void> {
  setTimeout(function () {}, millis);
  clearTimeout();
}

let t = Date.now();
sleep(5000).then((s) => {
  console.log(Date.now() - t);
});
