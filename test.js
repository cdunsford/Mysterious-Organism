const groceries = arrayOfObjects => {

    let foodItems = [];
    let foodItemsJoined = '';

    arrayOfObjects.forEach(element => {

        foodItems.push(element.item);

        
    });

    

    if(foodItems.length === 2) {
        foodItemsJoined = foodItems.join(' and ');
    }
    else if(foodItems.length > 2) {

        foodItemsJoined = foodItems.join(', ');
        let n = foodItemsJoined.lastIndexOf(',');

        // slice the string in 2, one from the start to the lastIndexOf
        // and then replace the word in the rest
        foodItemsJoined = foodItemsJoined.slice(0, n) + foodItemsJoined.slice(n).replace(',', ' and');


    }
    else {
        foodItemsJoined = foodItems.join('');

    }
    return foodItemsJoined;

};

console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
// returns 'Carrots, Hummus, Pesto and Rigatoni'

console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
// returns 'Bread and Butter'

console.log(groceries( [{item: 'Cheese Balls'}] ));
// returns 'Cheese Balls'



/* const subLength = (myString, mySingleChar) => {

    let positionID1 = -1;
    let positionID2 = -1;
    let positionID3 = -1;
    let lengthID = 0;

    positionID1 = myString.indexOf(mySingleChar);
    if(positionID1 > 0 && myString.length > positionID1) {positionID2 = myString.indexOf(mySingleChar,positionID1 +1)};
    if(positionID2 > 0 && myString.length > positionID2) {positionID3 = myString.indexOf(mySingleChar,positionID2 + 1)};

    //return 0 if no other occurence of the character is found in the string
    if(positionID2 === -1) {
        lengthID = 0;
        
    }
    else if(positionID3 != -1) {
        lengthID = 0;
        
    }
    else {
        const slicedString = myString.slice(positionID1, positionID2 + 1);
        lengthID = slicedString.length;
    }

    return lengthID;
   

};

console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0 */

/* // Write function below
const factorial = myNum => {

    let total = 0;

    let arrayOfNums = [];

    for (let index = myNum; index > 0; index--) {

        arrayOfNums.push(index);
        
        
    }

    total = arrayOfNums.reduce(function(accumulator, currentValue) {
        return accumulator * currentValue;
    });

    return total;

    
};

console.log(factorial(6)); */

/* // Write your code here:
const dogFactory = (name, breed, weight) => {

    return {
      _name: name, 
      _breed: breed, 
      _weight: weight,
      get name() {
        return this._name;
      },
      get breed() {
        return this._breed;
      },
      get weight() {
        return this._weight;
      },
      set name(value) {
        this._name = value;
      },
      set breed(value) {
        this._breed = value;
      },
      set weight(value) {
        this._weight = value;
      }
    };
  };
  
  //dogFactory('Joe', 'Pug', 27);

  console.log(dogFactory('Joe', 'Pug', 27).breed); */