let maxSquares = "";
let isMouseDown = false;

document.body.addEventListener("mousedown", () => {
    isMouseDown = true;
})

document.body.addEventListener("mouseup", () => {
    isMouseDown = false;
})

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
        //TODO Completed Mouseover & MouseDown event but look into the .type property.
        square.addEventListener("mouseover", () => {
            if (isMouseDown) {
                square.style.backgroundColor = "white";
            }
        })

        square.addEventListener("mousedown", () => {
            square.style.backgroundColor = "white";
        })
    squared.appendChild(square);

    }
}
//Mouseover square elements now changes color to a random color
//TODO Make eventListener mouseover AND mousedown
const rainbowButton = document.getElementById("rainbowButton");
rainbowButton.addEventListener("click", toggleRainbowSquares);
function toggleRainbowSquares() {
    const allSquares = document.querySelectorAll(".squareStyle");
    allSquares.forEach(element => {
        let redValue = "";
        let greenValue = "";
        let blueValue = "";
        let rgbNames = [redValue, greenValue, blueValue];
        element.addEventListener("mouseover", () => {
            let rgbValues = [];
            rgbNames.forEach(value => {
                value = Math.floor(Math.random() * 255);
                rgbValues.push(value);
            })
            element.style.backgroundColor = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`
        })
    })
}

//This allows Shader button to change mouseover to only do shading from black to white
//TODO Make eventListener mouseover AND mousedown
const shaderButton = document.getElementById("shaderButton");
shaderButton.addEventListener("click", toggleShaderSquares)
function toggleShaderSquares () {
    const allSquares = document.querySelectorAll(".squareStyle");
    allSquares.forEach(element => {
        let redValue = 0;
        let greenValue = 0;
        let blueValue = 0;
        element.addEventListener("mouseover", () => {
            if (redValue <100) {
                redValue += 10;
                greenValue += 10;
                blueValue += 10;
                let rgbNames = [redValue, greenValue, blueValue];
                element.style.backgroundColor = `rgb(${rgbNames[0]}%, ${rgbNames[1]}%, ${rgbNames[2]}%)`;
                console.log(rgbNames);
            }
            
        })
    })
}

/*
let isMouseDown = false;
console.log(isMouseDown);

window.addEventListener("mousedown", (event) => {
    if(event.button === 0) {
        isMouseDown = true;
        console.log(typeof isMouseDown);
        console.log(isMouseDown);
    }
}) */
