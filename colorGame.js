var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]
// Math.floor(Math.random() * 6)
var squares = document.querySelectorAll(".square");
var pickedColor = colors[Math.floor(Math.random() * 6)];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {

        // grab color of clicked square
        var clickedColor = this.style.background;

        //compare clickedColor to pickedColor
        if (clickedColor === pickedColor){
            alert ("Correct!");
        } else {
           this.style.background = "#232323";
        }
    });
}