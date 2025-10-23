const capitalizeProperty = (arr, propName) => {
  return arr.map(obj => ({
    ...obj,
    [propName]: obj[propName].charAt(0).toUpperCase() + obj[propName].slice(1)
  }));
};


const users = [
  { name: 'john', city: 'new york' },
  { name: 'jane', city: 'london' },
  { name: 'alex', city: 'tokyo' }
];

const capitalizedUsers = capitalizeProperty(users, 'name');
console.log(capitalizedUsers);
