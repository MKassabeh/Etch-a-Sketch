const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = "";
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

function randomRgbColor(){
  let r = Math.floor(Math.random() * 256); // Random between 0-255
  let g = Math.floor(Math.random() * 256); // Random between 0-255
  let b = Math.floor(Math.random() * 256); // Random between 0-255
  return 'rgb(' + r + ',' + g + ',' + b + ')';
};


const cells = document.querySelectorAll(".grid-item");



cells.forEach((e)=> {

  e.addEventListener("mouseover", (el) => {

    
    el.target.style.backgroundColor =randomRgbColor();
  
  })
})







