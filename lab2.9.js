const personDetails = {
  name: 'Peter',
  showDetails: function(city, country) {
    console.log(`${this.name} lives in ${city}, ${country}.`);
  }
};

const otherPerson = {
  name: 'Anna'
};


console.log('--- call ---');
personDetails.showDetails.call(otherPerson, 'Paris', 'France'); 


console.log('--- apply ---');
const detailsArray = ['Berlin', 'Germany'];
personDetails.showDetails.apply(otherPerson, detailsArray); 


console.log('--- bind ---');
const showDetailsForAnna = personDetails.showDetails.bind(otherPerson);
showDetailsForAnna('Kyiv', 'Ukraine'); 


const showDetailsForAnnaInUSA = personDetails.showDetails.bind(otherPerson, 'New York', 'USA');
showDetailsForAnnaInUSA(); 