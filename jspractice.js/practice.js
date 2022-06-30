// Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

// const text ="amanda";
// const text2 = "ANISIMOVA";
// console.log(text.toUpperCase());
// console.log(text2.toLowerCase());
// console.log(text[0]);
// console.log(text2.slice(2));

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("john") == "John");

// console.log(ucFirst("john"));

// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false. The function must be case-insensitive:

// const text = "AMANDA";
// console.log(text.toLowerCase());
// console.log(text.includes("MAN"));
// console.log(text.includes("k"));
// console.log(text.includes("abc") || text.includes("MAN"));

function checkSpam(str) {
  const lowerStr = str.toLowerCase();

  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

console.log(checkSpam("buy ViAgRA now")); // == true;
console.log(checkSpam("free xxxxx")); // == true;
console.log(checkSpam("innocent rabbit")); // == false;

// console.log(checkSpam("free xxxx"));

// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength. The result of the function should be the truncated (if needed) string.

function truncate(str, maxlength) {
  const strLength = str.length;

  const strMax = str.slice(0, maxlength - 1);

  if (strLength > maxlength) return strMax + "…";
  else return str;
}

console.log(truncate("Hi everyone!", 20)); // = "Hi everyone!"

/* const text = "amanda";
const text2 = "ANISIMOVA";

console.log(text.length);
console.log(text.slice(0, 3));
console.log(truncate(text, 3)); */

/* Extract the money
We have a cost in the form "$120". 
That is: the dollar sign goes first, and then the number.
Create a function extractCurrencyValue(str) 

that would extract the numeric value from such string and return it. */

function extractCurrencyValue(str) {
  return str.slice(1, str.length + 1);
}

console.log(extractCurrencyValue("$3000"));

/* const text2 = "ANISIMOVA";
console.log(text2.slice(1, text2.length + 1));

console.log(extractCurrencyValue("$3000")); */

/* Sum numbers from the visitor
Create a script that prompts the visitor to enter two numbers and then shows their sum. */

const question1 = +prompt("Enter your first number.", "");
const question2 = +prompt("Enter your second number.", "");
const total = question1 + question2;
console.log("Your total is " + total + ",");

/* 
Why 6.35.toFixed(1) == 6.3?


According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up. */

console.log("(6.35).toFixed(20) = " + (6.35).toFixed(20));
console.log("(63.5).toFixed(20) = " + (63.5).toFixed(20));
console.log(Math.round(6.35 * 10) / 10);

/* Beacause there is a loss from (6.35).toFixed(20)
 which has a outcome of 6.34999999999999964473,
since 63.5 has no precision loss, we can round it then divide it by 10 afterwards.  */

/* Repeat until the input is a number

Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
The resulting value must be returned as a number.

The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null. */

function readNumber() {
  let inputNum;

  do {
    inputNum = prompt("Please enter a number.", 0);
  } while (!isFinite(inputNum));

  if (inputNum === null || inputNum === "") return null;

  return +inputNum;
}

alert(`Result: ${readNumber()}`);

/*
- vaild number: return a number
- not number: prompts a number
- eneter empty line: return null
- press cancel: return null */

/* console.log(!isFinite("kk"));
console.log(isFinite(2)); */



/* An occasional infinite loop

This loop is infinite. It never ends. Why? */

Because the conditioon will never be false,

i will never equal to 10, since the addon was "o.2". 





/* A random number from min to max

The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

Write the function random(min, max) to generate a random floating-point number from min to max (not including max). */

function random(min, max) {
  return min + Math.random() * (max - min);
}


/* A random integer from min to max
Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

Any number from the interval min..max must appear with the same probability. */


function randomInteger(min,max){

    const rand = min + Math.random() * (max + 1 - min);

    return Math.floor(rand);



}

/* 
What will be the result for these expressions?
5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n" */

true
false
true
true
false
false
false


/* if (a string with zero)

Will alert be shown? */ Y E S 

/* The name of JavaScript

Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”  */



const input = prompt(`What is the “official” name of JavaScript?`, "");
const ans1 = 'You don’t know? ECMAScript!'
const ans2 = 'Right!'


if (input !== 'ECMAScript'){
    console.log(ans1);
  }
  else {
    console.log(ans2);
  };

/* Show the sign
Using if..else, write the code which gets a number via prompt and then shows in alert:
* 1, if the value is greater than zero,
* -1, if less than zero,
* 0, if equals zero.
In this task we assume that the input is always a number. */


const input = prompt('what is your number', "")

if(input > 0){
  alert(1);
}
else if(input <0){
  alert(-1);
}
else if(input == 0){
  alert(0)
}

/* 
Rewrite 'if' into '?'
Rewrite this if using the conditional operator '?':

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} */



const result = (a + b < 4) ? 'Below' : 'Over'

alert(result);


/*
Rewrite 'if..else' into '?'
Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines. */


/* let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = ''; 
} */


const message = (login == 'Employee') ? 'Hello' :
(login == 'Director') ? 'Greetings':
 (login == '') ? 'No login':
 '';

 alert(message)

/* What's the result of OR?
What is the code below going to output?

alert( null || 2 || undefined ); */

2


/* What's the result of OR'ed alerts?
What will the code below output?

alert( alert(1) || 2 || alert(3) ); */

1
2



/* What is the result of AND?
What is this code going to show?

alert( 1 && null && 2 ); */

null


/* What is the result of AND'ed alerts?
What will this code show?

alert( alert(1) && alert(2) ); */

1

/* The result of OR AND OR
What will the result be?

alert( null || 2 && 3 || 4 ); */

3

/* Check the range between
Write an if condition to check that age is between 14 and 90 inclusively.

“Inclusively” means that age can reach the edges 14 or 90. */


if (age >= 14 && age <= 90)

/* Check the range outside
Write an if condition to check that age is NOT between 14 and 90 inclusively.

Create two variants: the first one using NOT !, the second one – without it. */


if (!(age >= 14 && age <=90))
if (age < 14 || age > 90)

/* A question about "if"
Which of these alerts are going to execute?

What will the results of the expressions be inside if(...)? */

first, -1
third, 1


/* Check the login
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:
* If it equals “TheMaster”, then show “Welcome!”,
* Another string – show “Wrong password”,
* For an empty string or cancelled input, show “Canceled” */

let userName = prompt("Who's there?", "");

if (userName === "Admin"){
  
  
  let userPassword = prompt("Password?", "");

  if (userPassword === "TheMaster"){
    alert("Welcome!");}
    else if (userPassword === "" || userPassword === null){
      alert("Canceled")
    }
    else{
      alert("Wrong password");
    }}
  else if (userName === "" || userName === unll){
    alert("Canceled");
  }
  else{
    alert("I don't know you");
  }
 

  /* Last loop value
What is the last value alerted by this code? Why? */

1

/* Which values does the while loop show?
For every loop iteration, write down which value it outputs and then compare it with the solution.

Both loops alert the same values, or not?
1. The prefix form++i:
 let i =0;while(++i <5)alert( i );
2. The postfix formi++
. let i =0;while(i++<5)alert( i ); */

1. > 1, 2, 3, 4
2. > 1, 2, 3, 4, 5

/* Which values get shown by the "for" loop?
For each loop write down which values it is going to show. Then compare with the answer.
Both loops alert same values or not?
1. The postfix form:
 for(let i =0; i <5; i++)alert( i );
2. The prefix form:
 for(let i =0; i <5;++i)alert( i ); */

1. > 0, 1, 2, 3, 4
2. > 0, 1, 2, 3, 4

/* Output even numbers in the loop
Use the for loop to output even numbers from 2 to 10. */

for (i=2; i<=10; i++){
  if(i % 2 == 0){
    alert ( i ); 
  }
}

/* Replace "for" with "while"
Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` ); } */


 let i = 0;
 while (i < 3) {
   alert( `number ${i}!` );
   i++;
 } 

/* Repeat until the input is correct
Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task. */

let answer;
do { answer = prompt("enter a number greater than 100!", 0);} while (answer <= 100 && answer);

/* 
Write the code which outputs prime numbers in the interval from 2 to n.
For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value. */

let n = 10;

nextPrime:
for (i=2; i <= n; i++){
  for (j =2; j < i; j++){
    if (i % j == 0) continue nextPrime;

  }
  alert ( i );
}

