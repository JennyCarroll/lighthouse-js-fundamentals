function multiply(a, b) {
  return a * b;
}

const result = multiply(2, 4);

console.log(result);

let T = 50;

while (T <= 50 && T >= 0) {
  if (T === 50) {
    console.log(
      "Orbiter transfers from ground to internal power (T-50 seconds)"
    );
  } else if (T === 31) {
    console.log(
      "Ground launch sequencer is go for auto sequence start (T-31 seconds)"
    );
  } else if (T === 16) {
    console.log("Activate launch pad sound suppression system (T-16 seconds)");
  } else if (T === 10) {
    console.log("Activate main engine hydrogen burnoff system (T-10 seconds)");
  } else if (T === 6) {
    console.log("Main engine start (T-6 seconds)");
  } else if (T === 0) {
    console.log("Solid rocket booster ignition and liftoff! (T-0 seconds)");
  } else {
    console.log(`T-minus ${T} seconds`);
  }
  T--;
}

/*
 * Programming Quiz: Find my Seat (4-8)
 *
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0
 * The last row-seat combination will be 25-99
 *
 * Things to note:
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should use a nested `for` loop'
 * - Your code should produce the expected output, as explained above
 */

// Write your code here
for (let row = 0; row <= 25; ++row) {
  for (let seat = 0; seat <= 99; ++seat);
  console.log(`${row}-${seat}`);
}

/*loopy lighthouse
First, create a new .js file inside your lighthouse-js-fundamentals directory on Vagrant and open it in VS Code.*/
for (let num = 100; num <= 200; ++num) {
  if (num % 3 === 0 && num % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (num % 3 === 0) {
    console.log("Loopy");
  } else if (num % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(num);
  }
}
