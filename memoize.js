function memoize(fn) {
  let cache = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (cache[key]) {
      console.log(`Fetching from cache...`);
      return cache[key];
    } else {
      console.log(`Calculating result...`);
      let result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}
function add(a, b) {
  return a + b;
}

let memoized = memoize(add);
console.log(memoized(1, 2));
console.log(memoized(1, 2));
console.log(memoized(1, 2));
console.log(memoized(1, 2));
console.log(memoized(1, 3));
