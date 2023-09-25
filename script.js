//Does .type property fit into this code?
const singleColorButton = document.getElementById("singleColorButton");
const eraserButton = document.getElementById("eraserButton");
const clearButton = document.getElementById("clearButton");
const colorPicker = document.getElementById("colorPicker");
const gridValue = document.getElementById("gridValue");
const outputValue = document.getElementById("outputValue");
const squared = document.getElementById("div-container");
const colorPreview = document.getElementById("colorPreview")

let maxSquares = "";
let isMouseDown = false;

document.body.addEventListener("mousedown", () => {
    isMouseDown = true;
});

document.body.addEventListener("mouseup", () => {
    isMouseDown = false;
});

function resetGrid() {
    const gridSquares = document.querySelectorAll(".squareStyle");
    gridSquares.forEach(child => { 
        child.remove(); 
    })
}
//Creates new grid of squares.  If one present, deletes old, makes new.
function createGrid() {
    resetGrid();
    outputValue.textContent = `${gridValue.value} x ${gridValue.value}`
    maxSquares = gridValue.value;
    const computedStyle = window.getComputedStyle(squared);
    const heightSquared = parseInt(computedStyle.getPropertyValue("height"));
    const widthSquared = parseInt(computedStyle.getPropertyValue("width"));
    for (let i = 0; i < maxSquares * maxSquares; i++) {
        let square = document.createElement("div");
        square.classList.add("squareStyle");
        square.style.height = (heightSquared / maxSquares) + "px"
        square.style.width = (widthSquared / maxSquares) + "px";
        square.addEventListener("mouseover", () => {
            if (isMouseDown) {
                square.style.backgroundColor = "black";    
            }
        })    
    squared.appendChild(square);

    }
}

//Single Color button - Automatically black.
colorPicker.addEventListener("input", () => {
    const allSquares = document.querySelectorAll(".squareStyle");
    colorPreview.style.backgroundColor = colorPicker.value;
    allSquares.forEach(square => {
        square.addEventListener("mouseover", () => {
            if (isMouseDown) {
                square.style.backgroundColor = colorPicker.value;
            }
        })
    })
})

//Rainbow Collor: Mouseover square elements now changes color to a random color
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
            if (isMouseDown) {
            let rgbValues = [];
            rgbNames.forEach(value => {
                value = Math.floor(Math.random() * 255);
                rgbValues.push(value);
            })
            element.style.backgroundColor = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`
            }
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
            if (redValue <100 && isMouseDown) {
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

gridValue.addEventListener("input", () => {
    outputValue.textContent = `${gridValue.value} x ${gridValue.value}`;
    maxSquares = gridValue.value;
    createGrid();
})

clearButton.addEventListener("click", () => {
    let allSquares = document.querySelectorAll(".squareStyle");
    allSquares.forEach(square => {
            square.style.backgroundColor = "white";
    })
});

eraserButton.addEventListener("click", () => {
    let allSquares = document.querySelectorAll(".squareStyle");
    allSquares.forEach(square => {
        square.addEventListener("mouseover", () => {
            if (isMouseDown) {
                square.style.backgroundColor = "white";
            }
        })
    })
})

createGrid();
