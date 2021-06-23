console.log('This will print to the console')

//7 fundamental data types in JavaScript: strings, numbers, booleans, null, undefined, symbol, and object.
// variables can be declared with let or const; let = mutable variable, const = set variable.
// can access properties and methods by using the ., dot operator.

/* Arithmetic Operators 

    Add: +
    Subtract: -
    Multiply: *
    Divide: /
    Remainder: %

    if perfomring arithmetic operation on the same variable can shorten using this method *=, /=, +=, -=
    ex. 
    var1 = var1 + 2; 
    can be shortened to 
    var1 += 2;

    This allows you to perform arithmetic in your code
*/
  
console.log(3 + 7) //prints 10 to oonsole
console.log(5 - 2) //prints 3 to console

/*String Concatenation 
You can also add strings. 

can use string interpolation for easier method, must use back ticks `` instead of quotes and ${} to insert variable
ex. 
console.log(`this is an example ${variable1}`);

*/


console.log('Hello' + 'World') // prints helloworld 
console.log('Hello' + ' World') // prints hello world. Spacing must me manually added to your strings within quotes.

/* Properies of strings and the dot operator .
every string has a proper called length we can retreive this data using the dot operator 
*/
console.log('string'.length); // Prints 5 the length of the word string

/*String methods
We call, or use, these methods by appending an instance with:

    a period (the dot operator)
    the name of the method
    opening and closing parentheses

E.g. 'example string'.methodName(). */
//Link to string methods
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

//Built in Javascript Objects 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
//Maths functions for more advance arithmetic
console.log(Math.random()); //prints a random number between 0-1
console.log(Math.floor(Math.random() * 100)); //generates rndom number mulptiples by 100 and rounds to whole number
console.log(Math.ceil(43.8)); //Returns the smallest integer greater than or equal to x.

//Number objects Document link
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number 
console.log(Number.isInteger(2017));

/* conditionals 
  if statements are a type of conditional statement that runs if the condition is true
the layout is
if (condtion){
    block of code
}
if the condition returns as false the block of code is not executed 
*/
if (1 > 0) {
    console.log("since it is true (1 is greater then 0) this line is printed to the console");
};

/* alternatively there is also what is known as an if else statment
it is similar to an else statement, except in this scenario if the original condition evaluates to false
then it moves on to the next block of code and checks if it has a second condition, if none is provided then 
it automatically runs
example below
*/

if (1 > 2) {
    console.log("does not execute since condition evaluates as false");
} else {
    console.log("this line does print since the original condition failed");
}
//example 2
if (1 > 2) { //if this had been true, statement would have printed and the program stops, does not continue to check
    console.log("does not execute since condition evaluates as false");
} else if (1 > 3) { //if this had been true, statement would have printed and the program stops, does not continue to check
    console.log("does not execute since second condition evaluates as false too"); 
} else {
    console.log("this line prints as all previous conditions were evaluated as false")
}

/* Comparison operators
Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is not equal to: !==

Logic operators
the and operator (&&)
the or operator (||)
the not operator (!)
*/

/* sidenote about false value, these items will all act as a false value if checked in condition
- 0
- Empty strings like "" or ''
- null which represent when there is no value at all
- undefined which represent when a declared variable lacks a value
- NaN, or Not a Number
*/

/* Ternary Operator
short hand version of a basic if else statment
example 

if(conditon) {
    block of code 
} else {
    block of code 2
}
 can be reduced using ternary operator such as

condition ? block of code : block of code 2

? seperates condition from possible outcomes
: seperates both possible results 

*/


