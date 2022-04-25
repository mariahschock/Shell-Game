// import functions and grab DOM elements
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const shell1 = document.getElementById('shell1');
const shell2 = document.getElementById('shell2');
const shell3 = document.getElementById('shell3');

const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
btn1.addEventListener('click', () => {
    shell1.classList.add('reveal');
    shell2.classList.add('reveal');
    shell3.classList.add('reveal');
});

//btn2.addEventListener('click', => {
    //shell1.classList.add('reveal');
    //shell2.classList.add('reveal');
    //shell3.classList.add('reveal');
//})