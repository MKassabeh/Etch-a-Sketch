let container = document.getElementById("container");

let clear = document.getElementById("gnBtn")

let blackAndWhite = document.getElementById("blAndWh");
// Function to have a random color

function randomRgbColor(){
  let r = Math.floor(Math.random() * 256); // Random between 0-255
  let g = Math.floor(Math.random() * 256); // Random between 0-255
  let b = Math.floor(Math.random() * 256); // Random between 0-255
  return 'rgb(' + r + ',' + g + ',' + b + ')';
};


clear.addEventListener('click', ()=>{ // we only want to add this listener once
    resetSize()
})

function resetSize(){
        
  let number = prompt("What size would you like the grid to be? (1-100)");
  container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  makeRows(number); // call the createGrid function here and pass the number they entered as the argument. 
}


function makeRows(size) {

  
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;


  for (c = 0; c < size*size; c++) {

      let cell = document.createElement("div");
      cell.style.backgroundColor="black"
      container.appendChild(cell);

      cell.addEventListener("mouseover", el => {
        cell.style.backgroundColor = randomRgbColor();     
      })  
      
      blackAndWhite.addEventListener("click", el => {
        clearGrid()
        cell.addEventListener("mouseover", el => {
          if(cell.backgroundColor==="white"){
            cell.style.backgroundColor = "black"
          }else{
            cell.style.backgroundColor = "white"
          }

        })
        
      })
    function clearGrid(){
      clear.addEventListener('click', e=>{
          cell.style.backgroundColor = "black"
      })
    } 

    clearGrid(); 
  };
}


makeRows(16);







