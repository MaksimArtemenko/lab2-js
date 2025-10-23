const values = (f, low, high) => {
  const result = [];
  for (let i = low; i <= high; i++) {
    result.push(f(i));
  }
  return result;
};


const square = (x) => x * x;
console.log(values(square, 1, 5)); 

const double = (x) => x * 2;
console.log(values(double, 0, 3)); 