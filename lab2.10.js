function callWithLogging(callback, ...args) {
  const timeCalled = new Date().toLocaleString(); 
  console.log(`Ім'я функції: ${callback.name || 'анонімна функція'}`);
  console.log(`Аргументи:`, args);
  console.log(`Час виклику: ${timeCalled}`);
  
 
  const result = callback(...args);
  
  return result; 
}

function add(a, b) {
  return a + b;
}

const sum = callWithLogging(add, 5, 7);
console.log(`Результат виконання: ${sum}`);