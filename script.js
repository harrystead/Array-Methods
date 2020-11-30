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

var numbers = [1, 3, 6, 8, 11];

var lucky = numbers.filter(function(number) {
  return number > 2;
});

//The filter() method creates an array filled with all array elements that pass a test (provided as a function).

var ages = [1, 2, 3, 4, 5];

var ageRange = ages.some(function(age) {
    console.log(age >= 2)
})
//The some() method checks if any of the elements in an array pass a test (provided as a function).


