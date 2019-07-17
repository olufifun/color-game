var colors = [
    "RGB(255, 0, 0)",
    "RGB(255, 255, 0)",
    "RGB(0, 255, 0)",
    "RGB(0, 255, 255)",
    "RGB(0, 0, 255)",
    "RGB(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[Math.floor(Math.random() * 6)];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
    
    });
}