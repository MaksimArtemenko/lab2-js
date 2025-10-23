const add = (a) => {
  return (b) => {
    return a + b;
  };
};


const add5 = add(5); 
console.log(add5(10)); 
console.log(add5(3));  

console.log(add100(50)); 

console.log(add(7)(8)); 