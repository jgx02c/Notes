// JS notes from W3 schools

// Arrays

const cars = ["Saab", "Volvo", "BMW"]
const numbers = [1, 3, 5, 7];

//To push elements us .push

cars.push("Toyota")
numbers.push(9)

// new Array(iterable)
// The method new array is used to create an empty array
// with a pre-determined size or if you need to Initialize 
// an array with multiple elements in a single step

let arr1 = new Array(5); // [empty × 5]
let arr2 = new Array(1, 2, 3); // Creates an array [1, 2, 3]
let arr3 = new Array(5).fill(0); // [0, 0, 0, 0, 0]

// As compared to 

let arr4 = [5];         // [5] 

// array.at(index)
// lets you see whats at the placeholder
// **The at() method is supported in all modern browsers since March 2022**
// **The at() method was introduced in ES2022 to solve this problem.**

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);

//Get the last element of fruits:
let fruitNegative = fruits.at(-2);

// Concat joints two or more arrays

const arr5 = ["Cecilie", "Lone"];
const arr6 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);

// array.join(separator)
// The join() method returns an array as a string
// The join() method does not change the original array

let text1 = fruits.join();
let text2 = fruits.join(" and ");

// array.slice(start, end)
// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.

const citrus = fruits.slice(1, 3);
const myBest = fruits.slice(-3, -1);

// array.splice(index, count, item1, ....., itemX)
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

fruits.splice(2, 0, "Lemon", "Kiwi");

// array.copyWithin(target, start, end)
// The copyWithin() method copies array elements to another position in an array
// The copyWithin() method overwrites the existing values
// The copyWithin() method does not add items to the array

fruits.copyWithin(2, 0, 2);

// array.copyWithin(target, start, end)
// The copyWithin() method copies array elements to another position in an array.
// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.

// Copy to index 2, all elements from index 0:
fruits.copyWithin(2, 0);

// Copy to index 2, the elements from index 0 to 2:
fruits.copyWithin(2, 0, 2);

/*
array.every(function(currentValue, index, arr), thisValue)

The every() method executes a function for each array element.
The every() method returns true if the function returns true for all elements.
The every() method returns false if the function returns false for one element.
The every() method does not execute the function for empty elements.
The every() method does not change the original array
*/

// Create an Array
const ages = [32, 33, 16, 40];

// Create a Test Function
function checkAge(age) {
  return age > 18;
}

// Are all ages over 18?
ages.every(checkAge);

/*
array.fill(value, start, end)

The fill() method fills specified elements in an array with a value.
The fill() method overwrites the original array.
*/

// Fill all the elements with a value:
fruits.fill("Kiwi");

// Fill the last two elements:
fruits.fill("Kiwi", 2, 4);


/*
array.filter(function(currentValue, index, arr), thisValue)

The filter() method creates a new array filled with elements that pass a test provided by a function.
The filter() method does not execute the function for empty elements.
The filter() method does not change the original array.
*/

const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

/*
array.find(function(currentValue, index, arr),thisValue)
Use .find() for unsorted or small arrays, or when simplicity is more important than performance.
Use binary search for large, sorted arrays where performance is critical.
*/

