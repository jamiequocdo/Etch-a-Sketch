//prompt from user for how big of grid a person wants.  start with 1



const maxSquares = 16;

for (let i = 0; i < maxSquares * maxSquares; i++) {
    const squared = document.getElementById("div-container");
    const computedStyle = window.getComputedStyle(squared);
    const heightSquared = parseInt(computedStyle.getPropertyValue("height"));
    const widthSquared = parseInt(computedStyle.getPropertyValue("width"));
    let square = document.createElement("div");
    square.classList.add("squareStyle");
    square.style.height = (heightSquared / maxSquares) + "px"
    square.style.width = (widthSquared / maxSquares) + "px";
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "white";
    
    })
    squared.appendChild(square);
} 
