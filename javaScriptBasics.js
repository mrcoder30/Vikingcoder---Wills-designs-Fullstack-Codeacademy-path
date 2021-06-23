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