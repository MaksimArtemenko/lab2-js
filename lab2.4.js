const createCounter = () => {
  let value = 0; 

  return {
    increment: () => {
      value += 1;
    },
    getValue: () => {
      return value;
    }
  };
};


const counter1 = createCounter();
counter1.increment();
counter1.increment();
console.log(counter1.getValue()); 

const counter2 = createCounter(); 
counter2.increment();
console.log(counter2.getValue()); 
console.log(counter1.getValue()); 