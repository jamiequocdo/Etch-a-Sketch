let maxSquares = "";

const gridSize = document.getElementById("gridSize");
gridSize.addEventListener("click", createGrid);

//Creates new grid of squares.  If one present, deletes old, makes new.
function createGrid() {

    const gridSquares = document.querySelectorAll(".squareStyle");
    gridSquares.forEach(child => { 
        child.remove(); 
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
        //This changes the square from black to white. this should be default
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "white";
        })
    squared.appendChild(square);

    }
}
//Mouseover square elements now changes color to a random color
const rainbowButton = document.getElementById("rainbowButton");
rainbowButton.addEventListener("click", toggleRainbowSquares);
function toggleRainbowSquares() {
    const allSquares = document.querySelectorAll(".squareStyle");
    allSquares.forEach(element => {
        let redValue = ""
        let greenValue = "";
        let blueValue = "";
        let rgbNames = [redValue, greenValue, blueValue];
        let rgbValues = [];
        rgbNames.forEach(value => {
            value = Math.floor(Math.random() * 255);
            rgbValues.push(value);
        })
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`
        })
    })
}


        /*
        This changes square to a random color continuously.  still need to have it so when rainbow button pressed, it occurs
        square.addEventListener("mouseover", () => {
            */

    /* for 10% increase in shading, still need to create a maximum to 100%. also need to have this only trigger when shader button pressed
        let redValue = 0;
        let greenValue = 0;
        let blueValue = 0;

        square.addEventListener("mouseover", () => {
            
            redValue += 10;
            greenValue += 10;
            blueValue += 10;
            console.log(redValue);
            let rgbNames = [redValue, greenValue, blueValue];
            square.style.backgroundColor = `rgb(${rgbNames[0]}%, ${rgbNames[1]}%, ${rgbNames[2]}%)`; */

            /*rgbNames.forEach(value => {
                if (value <= 255) {
                value += 10;
                rgbValues.push(value);
                }
                console.log(rgbValues);
            })*/