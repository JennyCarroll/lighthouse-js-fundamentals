const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

/* or you could do it with a for statement (instead of while) and a ternary operator (instead of if else)

const chorus = "Let's dance!";
let repeat = 0;
for (let repeat = 0; repeat < 10; repeat++) {
  repeat === 5 ? console.log("*change key*") : console.log(chorus);
  }
console.log("Until the sun comes up!"); */
