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

//This allows Shader button to change mouseover to only do shading from black to white
const shaderButton = document.getElementById("shaderButton");
shaderButton.addEventListener("click", toggleShaderSquares)
function toggleShaderSquares () {
    const allSquares = document.querySelectorAll(".squareStyle");
    allSquares.forEach(element => {
        let redValue = 0;
        let greenValue = 0;
        let blueValue = 0;
        element.addEventListener("mouseover", () => {
            redValue += 10;
            greenValue += 10;
            blueValue += 10;
            let rgbNames = [redValue, greenValue, blueValue];
            element.style.backgroundColor = `rgb(${rgbNames[0]}%, ${rgbNames[1]}%, ${rgbNames[2]}%)`;
            console.log(rgbNames);
        })
    })
}
    