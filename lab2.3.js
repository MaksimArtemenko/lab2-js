const callWithContext = (context, callback) => {
  callback.call(context);
};


const person = {
  name: 'John',
  age: 30
};

function happyBirthday() {
  const date = new Date().toLocaleDateString();
  console.log(`Today is ${date}! Happy birthday ${this.name}. You are now ${this.age}!`);
}

callWithContext(person, happyBirthday); 