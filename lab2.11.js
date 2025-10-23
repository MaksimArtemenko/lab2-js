const createTimedCache = (func, duration = 10000) => {
  let cache = null;
  let lastCallTime = 0;

  return (...args) => {
    const now = Date.now();
    const argsKey = JSON.stringify(args); 

    if (cache && (now - lastCallTime < duration)) {
        console.log("Повернення результату з кешу.");
        return cache;
    }

    console.log("Обчислення нового результату.");
    const result = func(...args);
    cache = result;
    lastCallTime = now;
    return result;
  };
};


const slowSum = (a, b) => {
    return a + b;
}

const cachedSum = createTimedCache(slowSum);

console.log(cachedSum(5, 3)); 
console.log(cachedSum(5, 3)); 


setTimeout(() => {
    console.log("\nЧерез 11 секунд:");
    console.log(cachedSum(5, 3));
}, 11000);