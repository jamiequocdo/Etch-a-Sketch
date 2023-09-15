const maxSquares = 16;

for (let i = 0; i < maxSquares; i++) {
    const squared = document.getElementById("boxOfDivs");
    let square = document.createElement("div");
    square.classList.add("squareStyle");
    squared.appendChild(square);
} 

const squared = document.getElementById("boxOfDivs");

squared.addEventListener("mouseover", () => {
    squared.classList.add("hoverDiv");
    console.log("hovering")

})