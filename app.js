// import functions and grab DOM elements
const btn1 = document.getElementById('btn1');

const shell1 = document.getElementById('shell1');
const shell2 = document.getElementById('shell2');
const shell3 = document.getElementById('shell3');
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
btn1.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
});