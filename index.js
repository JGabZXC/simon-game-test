// $('.start').on("click", function() {
//     alert("GOT CLICKED");
// });

let buttonColours = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userPattern = [];

let level = 0;
let start = false;

$('.start').on("click", function() {
    level++;
    $(this).addClass("disable");
    $('.level-title').removeClass("disable");
    $('.level-title').text("Level " + level);
    start = true;
}); 

$('.btn').on("click", function() {
        let self = $(this);
        let userChosenButton = self.attr("id");
        userPattern.push(userChosenButton);
        self.addClass("pressed");
        setTimeout(function () {
            self.removeClass("pressed");
        }, 100);
});

function nextSequence() {
    level++;
    $('.level-title').text = "Level " + level;

    let randomNumber = Math.floor(Math.random() * 4);
    let chosenNumber = buttonColours[randomNumber];
    gamePattern.push(chosenNumber);
}

function clear() {
    gamePattern = [];
    userPattern = [];
}

function start() {
    
}