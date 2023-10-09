//TODO Draw a diagram of how each function works (To understand what is going on with the program)
const singleColorButton = document.getElementById("singleColorButton");
const rainbowButton = document.getElementById("rainbowButton");
const shaderButton = document.getElementById("shaderButton");
const eraserButton = document.getElementById("eraserButton");
const clearButton = document.getElementById("clearButton");
const colorPicker = document.getElementById("colorPicker");
const gridValue = document.getElementById("gridValue");
const outputValue = document.getElementById("outputValue");
const squareContainer = document.getElementById("squareContainer");
const colorPreview = document.getElementById("colorPreview")

let maxSquares = "";
let isMouseDown = false;
let currentMode = "color";

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
    squareContainer.style.setProperty("--max-squares", maxSquares);
    for (let i = 0; i < maxSquares * maxSquares; i++) {
        let square = document.createElement("div");
        square.classList.add("squareStyle");
        square.addEventListener("mouseover", changeColor);
        square.addEventListener("mousedown", changeColor); 
    squareContainer.appendChild(square);
    }
}

colorPicker.addEventListener("input", () => {
    setCurrentMode("color");
    colorPreview.style.backgroundColor = colorPicker.value;
})
//Rainbow Collor: Mouseover square elements now changes color to a random color
rainbowButton.addEventListener("click", () => {
    setCurrentMode("rainbow");
});

shaderButton.addEventListener("click", () => {
    setCurrentMode("shader");
})

eraserButton.addEventListener("click", () => {
    setCurrentMode("eraser");
})

function setCurrentMode(newMode) {
    activateNewMode(newMode);
    currentMode = newMode;
}

function activateNewMode(newMode) {
    if (currentMode === "color") {
        const allButtons = document.querySelectorAll(".active");
        allButtons.forEach (button => {
            button.classList.remove("active");
        })
    }
    if (currentMode === "rainbow") {
        rainbowButton.classList.remove("active");
    } else if (currentMode === "shader") {
        shaderButton.classList.remove("active");
    } else if (currentMode === "eraser") {
        eraserButton.classList.remove("active");
    };

    if (newMode === "rainbow") {
        rainbowButton.classList.add("active");
    } else if (newMode === "shader") {
        shaderButton.classList.add("active");
    } else if (newMode === "eraser") {
        eraserButton.classList.add("active");
    };
}



function changeColor(e) {
    if (e.type === "mouseover" && !isMouseDown) return;
    if (currentMode === "color") {
        e.target.style.backgroundColor = colorPicker.value
    } else if (currentMode === "rainbow") {
        randomR = Math.floor(Math.random() * 256);
        randomG = Math.floor(Math.random() * 256);
        randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (currentMode === "shader") {
        increaseShadeColor(e);
    } else if (currentMode === "eraser") {
        e.target.style.backgroundColor = "rgb(255, 255, 255)";
    }
}


gridValue.addEventListener("input", () => {
    outputValue.textContent = `${gridValue.value} x ${gridValue.value}`;
    maxSquares = gridValue.value;
    squareContainer.style.setProperty("--max-squares", maxSquares);
    createGrid();

    
})

clearButton.addEventListener("click", () => {
    let allSquares = document.querySelectorAll(".squareStyle");
    allSquares.forEach(square => {
            square.style.backgroundColor = "white";
    })
});

//Function for when currentMode = "shader";
function increaseShadeColor(e) {
    const clickedElement = e.target
    const computedStyle = getComputedStyle(clickedElement);
    const backgroundColor = computedStyle.backgroundColor;
    const rgbMatch = backgroundColor.match(/\d+/g);
    if (rgbMatch) {
        const redValue = Math.min(parseInt(rgbMatch[0]) + 25, 255);
        const greenValue = Math.min(parseInt(rgbMatch[1]) + 25, 255);
        const blueValue = Math.min(parseInt(rgbMatch[2]) + 25, 255);

        clickedElement.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    }
};

window.onload = () => {
    currentMode = "color"
}

createGrid();