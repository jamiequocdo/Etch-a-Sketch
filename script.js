
let maxSquares = ""
const gridSize = document.getElementById("gridSize")

//?gridSize eventListener needs to delete old grid before making a new one.
gridSize.addEventListener("click", () => {
    //Bringing maxSquares outside of eventListener complicated so must bring the function of
    //creating grid inside event listener
    maxSquares = parseInt(prompt("What grid do you want?"));
    createGrid(maxSquares);
})

console.log("maxSquares outside eventListener", maxSquares);



function createGrid(maxSquares) {
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
