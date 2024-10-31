let color = 'black';
let click = false;

document.addEventListener('DOMContentLoaded', function() {
  createBoard(128);

  document.body.addEventListener('click', function(e) {
    if(e.target.tagName != 'BUTTON') {
      click = !click;
      if(click) {
        let draw = document.querySelector('#draw');
        draw.textContent = 'you can draw'
      } else {
        let draw = document.querySelector('#draw');
        draw.textContent = 'you cant draw'
      }
    } 
  })

  let selectBtn = document.querySelector('#select');
  selectBtn.addEventListener('click', function() {
    let size = getSize();
    createBoard(size)
  });

  let blueBtn = document.querySelector('#blue').addEventListener('click', function(e) {
    setColor(e.target.id);
  });

  let grayBtn = document.querySelector('#gray').addEventListener('click', function(e) {
    setColor(e.target.id);
  });

  let greenBtn = document.querySelector('#green').addEventListener('click', function(e) {
    setColor(e.target.id);
  });

  let redBtn = document.querySelector('#red').addEventListener('click', function(e) {
    setColor(e.target.id);
  });

  let YellowBtn = document.querySelector('#yellow').addEventListener('click', function(e) {
    setColor(e.target.id);
  });

  let ligthBlueBtn = document.querySelector('#lblue').addEventListener('click', function(e) {
    setColor(e.target.id);
  });

  let blackBtn = document.querySelector('#black').addEventListener('click', function(e) {
    setColor(e.target.id);
    console.log(e.target.id)
  });

  let eraseBtn = document.querySelector('#erase').addEventListener('click', function(e) {
    setColor(e.target.id);
  });

  let resetBtn = document.querySelector('#reset').addEventListener('click', resetBoard)
})

function createBoard(size) {
  let board = document.querySelector('.board');
  let message = document.querySelector('#message');
  board.style.display = 'grid';
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

 let numOfDivs = size * size;

 for(let i = 0; i < numOfDivs; i++) {
  let div = document.createElement('div');
  div.addEventListener('mouseover',colorDiv)
  board.appendChild(div)
 }
}

function getSize() {
 let input = prompt('What will be the size of the board?')
 let message = document.querySelector('#message');
 if(input === '') {
  message.textContent = 'Please enter a number.';

 } else if(input < 1 || input > 256){
  message.textContent = 'Please enter a number between 1 and 256.'
 } else {
  message.textContent = 'Now you play!! Enjoy!'
  return input;
 }
}

function setColor (colorChoice) {
  color = colorChoice;
}

function colorDiv() {
 if(click) {

  if(color === 'black') {
    this.style.backgroundColor = 'black';
   } else if(color === 'blue') {
    this.style.backgroundColor = 'blue';
   } else if(color === 'gray') {
    this.style.backgroundColor = 'gray';
   } else if(color === 'red') {
    this.style.backgroundColor = 'red';
   } else if(color === 'yellow') {
    this.style.backgroundColor = 'yellow';
   } else if(color === 'green') {
    this.style.backgroundColor = 'green';
   } else if(color === 'lblue') {
    this.style.backgroundColor = 'lightblue'
   } else if(color === 'erase') {
    this.style.backgroundColor = 'white';
   }
 } 
}

function resetBoard() {
  let divs = document.querySelectorAll('div');
  divs.forEach((div) => div.style.backgroundColor = 'white');
}