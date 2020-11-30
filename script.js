const firstArray = ["hello", "goodbye", "good morning", "good evening"];

//1.
firstArray.forEach(myFunction) 

function myFunction(item){ //item of array
    var sum;
    sum += item; 
    console.log(item)
  }

  //console.log = "hello", "goodbye", "good morning", "good evening";
  //loops through each item in array once.

  //cannot return from a forEach, can from map() function.

  //2.
  firstArray.map(myFunctionTwo)

  function myFunctionTwo(item) {
  var arrayList;
  arrayList += item;
  console.log(item)
}

//.map returns a new array, whereas .forEach doesn’t return anything. 
//Basically, if you want to obtain a modified form of the previous array, you use .map, if you don’t want that, you use .forEach.

var numb = [1, 3, 6, 8, 11];

var lucky = numb.filter(function(number) {
  return number > 2;
});

//The filter() method creates an array filled with all array elements that pass a test (provided as a function).

var ages = [1, 2, 3, 4, 5];

var ageRange = ages.some(function(age) {
    console.log(age >= 2)
})
//The some() method checks if any of the elements in an array pass a test (provided as a function).

var icecream = [2, 5, 6, 8, 9, 9, 9, 456, 77];
var icecreamNum = icecream.every(function(cone){
    console.log(cone >= 6);
})
//return false if one element does not match criteria.

//ternary operator, cleaner version of if statement.
var age = 19;
var canDrive = age > 16 ? 'yes' : 'no';
console.log(canDrive);

//arrow functions
hello = () => {
    return "Hello World!";
  }
  hello = () => "Hello World!";

  let sum = (a, b) => a + b;

  const numbers = [4, 5, 2, 6];

const doubled = numbers.map((number) => {
  return number * 2;
});

//sort - with strings, it is simple.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

//sort - wth numbers -
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});






