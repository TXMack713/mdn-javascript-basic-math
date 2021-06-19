let finalResult;

let evenOddResult;

// Add your code here

let num1 = 3;
let num2 = 9;
let firstResult = num1 + num2;
let num3 = 8;
let num4 = 4;
let secondResult = num3 - num4;
finalResult = firstResult * secondResult;

evenOddResult = finalResult % 2;

// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
let finalResultCheck =
  finalResult === 48 ? `Yes, well done!` : `No, it is ${finalResult}`;
para1.textContent = `Is the finalResult 48? ${finalResultCheck}`;
let para2 = document.createElement('p');
let evenOddResultCheck =
  evenOddResult === 0
    ? 'The final result is even!'
    : 'The final result is odd. Hrm.';
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);
