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
        /*square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "white";
        })*/
        

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "rgb("
        })

    squared.appendChild(square);
    }

} 
let redValue = ""
let greenValue = "";
let blueValue = "";

let rgbValues = [redValue, greenValue, blueValue];
rgbValues.forEach(value => {
    value = Math.floor(Math.random() * 255);
    console.log(value);
})

let randomValue = Math.floor(Math.random() * 255);


/* Rainbow Mouseover
- Mouseover a square, a random color shows is shown
    - Create a button that will trigger the mouse to turn squares into random colors
    - Create EventListener for MouseOver
        - Object needs to be selected with document.getElement
    - Event Listener will pick color using RGB color
        - RGB color needs 3 random numbers
            - produce 3 random numbers
*/