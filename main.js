const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
}

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = getRandomColor();
  });

  square.addEventListener('mouseout', () => {
    square.style.backgroundColor = 'lightgray';
  });
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const button = document.querySelector('#gridButton');

button.addEventListener('click', () => {
  const squaresPerSide = prompt('Enter the number of squares per side (maximum 100):');
  // Rest of the code for validation and generating a new grid
});

if (squaresPerSide) {
    const gridSize = parseInt(squaresPerSide, 10);
    if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
      // Rest of the code for generating a new grid
    } else {
      alert('Invalid input! Please enter a number between 1 and 100.');
    }
  }

  container.innerHTML = '';

  function generateGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
      }
    }
  }