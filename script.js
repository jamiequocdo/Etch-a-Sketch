//prompt from user for how big of grid a person wants.  start with 1



let maxSquares = ""

const gridSize = document.getElementById("gridSize");
gridSize.addEventListener("click", createGrid);

function createGrid() {

    //removes old grid
    const gridSquares = document.querySelectorAll(".squareStyle"); //add this
    gridSquares.forEach(child => { //add this
        child.remove(); //add this
    })

    maxSquares = parseInt(prompt("How big is the grid?"));
    const squared = document.getElementById("div-container");
    const computedStyle = window.getComputedStyle(squared);
    const heightSquared = parseInt(computedStyle.getPropertyValue("height"));
    const widthSquared = parseInt(computedStyle.getPropertyValue("width"));
    
    for (let i = 0; i < maxSquares * maxSquares; i++) {
        let square = document.createElement("div");
        square.classList.add("squareStyle");
        square.style.height = (heightSquared / maxSquares) + "px"
        square.style.width = (widthSquared / maxSquares) + "px";
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "white";
        
        })
    squared.appendChild(square);
}

} 
