/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
testMe(); // what order should these log out? Howdy or Partnah first?

/* CHALLENGE 2 */

function delayedGreet() {
  console.log('Welcome');
}
setTimeout(delayedGreet, 3000);
// Uncomment the following line to check your work!
delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  console.log('Goodbye');  
}
setTimeout(helloGoodbye, 3000)
console.log('Hello');
// Uncomment the following line to check your work!
helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */
var interval = null;
function brokenRecord() {
  interval = setInterval(function(){ console.log("Hi"); }, 1000);
}
function endCode() {
  clearInterval(interval);
}

// Uncomment the following line to check your work!
brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat() {
  // ADD CODE HERE
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(func,interval,duration) {
  // ADD CODE HERE
  interval = interval*1000;
  duration = duration*1000;
  var intervalDuration = setInterval(func, interval);
  setTimeout(() => {
    clearInterval(intervalDuration)
  }, duration);
}

// Uncomment the following lines to check your work!
function theEnd() {
  console.log('This is the end!');
}
function sayHi() {
  console.log('say Hi');
}
everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
everyXsecsForYsecs(sayHi, 1, 5); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!very 2 seconds, for 20 seconds): This is the end!
