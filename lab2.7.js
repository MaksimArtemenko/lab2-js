const createArrayChecker = (arr) => {
  return (str) => {
    return arr.includes(str);
  };
};


const fruits = ['apple', 'banana', 'orange'];
const isInFruits = createArrayChecker(fruits);

console.log(isInFruits('apple'));  
console.log(isInFruits('grape')); 