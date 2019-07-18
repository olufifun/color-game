
var numSquares = 9;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); 
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton")
var mediumButton = document.querySelector("#mediumButton")
var hardButton = document.querySelector("#hardButton")

easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    mediumButton.classList.remove("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        }else {
            squares[i].style.display = "none";
        }
        }
    h1.style.background = "#232323";
});

mediumButton.addEventListener("click", function(){
    easyButton.classList.remove("selected");
    mediumButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        }else {
            squares[i].style.display = "none";
        }
        }
    h1.style.background = "#232323";
});

hardButton.addEventListener("click", function(){
    easyButton.classList.remove("selected");
    mediumButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numSquares = 9;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor
    for (var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        }
    h1.style.background = "#232323";
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDispplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors"

    messageDisplay.textContent = "";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {

        // grab color of clicked square
        var clickedColor = this.style.background;

        //compare clickedColor to pickedColor
        // console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
           this.style.background = "#232323";
           messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    //loop through all the squares
    for (var i = 0; i < squares.length; i++) { 
    //change each color to match picked color
    squares[i].style.background =  color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into arr   
        arr.push(randomColor());       
    }
    //return array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g +  ", " + b + ")";
}