const memoizedGetGreeting = () => {
  const cache = {};

  return (name) => {
    if (name in cache) {
      console.log(`Повернення з кешу для: ${name}`);
      return cache[name];
    } else {
      console.log(`Обчислення для: ${name}`);
      const result = `Hello, ${name}`;
      cache[name] = result;
      return result;
    }
  };
};


const getGreeting = memoizedGetGreeting();
console.log(getGreeting('Alice')); 
console.log(getGreeting('Bob'));   
console.log(getGreeting('Alice')); 