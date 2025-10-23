const average = (...args) => {
  if (args.length === 0) {
    return 0;
  }
  const sum = args.reduce((acc, val) => acc + val, 0);
  return sum / args.length;
};


console.log(average(1, 2, 4, 5)); 
console.log(average(10, 50));      
console.log(average());    