/* eslint-disable no-redeclare */
/* eslint-disable no unused-vars */
/* eslint-disable no-constant-condition */
// I'm a singlie line comment

/*
And I'm a multi line comment
I can comment out entire blocks of code
*/

// // console.log() is an extremely useful method of checking our output
// // info and log are pretty identical, though log is more commonly used
console.log ('hello');
console.info('hello');
// // error can be used when something goes wrong
console.error('hello');

// // Promt is similar, but takes user input
prompt('Hi, what is your name?');

//variables 
var name = prompt ('Hi, what is your name?');

// console.log can take lots of info as long as they are separated with commas
console.log('users name is:',name);

// The variable can be used in an alert
alert('Hi'+name);

// // string
// // we used strings for text (letters, words, sentences etc)
// // can we single quotes
var string1 = 'code';
console.log(string1); // // Hello

// // or double quotes
var string2 = 'First';

console.log(string2);

// // adding multiple string together is called concatenation
var cfg1 = string1 + '' + string2 + "!";

console.log(cfg1); // Code First!

// // we can also use backticks (bit more advanced but is neater)
var cfg2 = `${string1} ${string2}!`;
console.log(cfg2); // Code First!

// // numbers
// // =========== integers =============
var int1 = 5
console.log(int1);

var sum = int1 + 35;
console.log(sum); // sum === 40

// // ============= floats =============
// // a 'floating decimal' number, or float, has a decimal point
var float1 = 12.3;
var float2 = 145.9876795;

var sumFloat = float1 + float2;
console.log(sumFloat); // 158.2876790000002

// // type coercion
// // if we try to add two numbered strings together
var stringSum = '1' + "2";
console.log(stringSum); //'12'

// // which isn't very useful

// // thankfully, we can convert strings to numbers ...
// // parse
// // resolve (a sentence) into its component parts and describe their syntactic roles
// // analyse (a string or text) into logical syntactic components.

var parsedInteger = parseInt ('1');
// // or
var parsedFloat = parseFloat ('20.33');

console.log(parsedInteger); // 1
console.log(typeof parsedInteger); // Number

console.log(parsedFloat); // 20.33
console.log(typeof parsedFloat); // Number

//booleans
// // true or false

//either true or false
// critical for directing flow of code

var boo1 = true;
console.log(boo1); // boo1 === true

boo1 = false; // value of boo1 is now false, like a lightswitch
console.log(boo1); // boo1 === false

// // null
// // an empty value, normally used to represent an unknown number or object
// // null is a nothing value - an empty placeholder
var nothing = null;
console.log(nothing); // null


// // data types exercise

var tvShow = 'Friends';
var characters = 6;
var rating = 7.5;
var hasShowFinished = true;
// // concatenation
var sentence = tvShow + ' was a show about ' + characters + ' friends. Its ' + hasShowFinished + ' that the show ended, and has a rating od ' + rating;
// // Interpolation
var sentence = `${tvShow} was a show about ${characters} friends. Its ${hasShowFinished} that the show ended, and has a rating od ${rating}`;

// // control flow
// // directs the execution of code depending on the truthy-falsey value of code

if ('some truthy value') {
// // this will run if the value in the () is truthy, not just true
    console.log('I will run');
} else {
    console.log('I will not run');
}

if (0) {
    console.log('I will not run');
} else {
// // This will run if the value in the () is falsey, not just false
    console.log('I will run');
}

// // control flow exercise

alert("I'm having a party, would you like to RSVP?");
var answer = prompt("Yes [y] or No [n]");

if (answer === 'y') {
    alert("Can't wait to see you!")
} else {
    alert("That's a shame. Maybe another time!")
}

// // arrays

// // they can hold mixed data types
var list = ['Jack', 30, true, null];

// // but they're mostly used for storing lists of the same data type
var fruit = ['apple', 'banana', 'pineapple', 'pears'];

console.log(list[0]); // 'Jack'
console.log(list[3]); // null

// // add an item to the end
list.push('Code First Girls');
console.log(list);
// ['Jack', 30, true, null, 'Code First Girls']

// // remove an item from the start
list.shift();
console.log(list);

// // there are many more methods that you will have to research yourselves

// // array exercise

var countries = ["United Kingdom", "France"];
console.log(countries);
countries.shift();
console.log(countries);
countries.splice(1,0,'Germany');
console.log(countries)
var countryList = countries.join(', ');
console.log(countryList);