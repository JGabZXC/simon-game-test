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
    nextSequence();
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

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userPattern[currentLevel]) {
        console.log("success");

        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");

        $('body').addClass("game-over");
        setTimeout(function () {
            $('body').removeClass("game-over");
        }, 200);

        $('.start').removeClass("disable");
        $('.level-title').addClass("disable");

    }   
}

function nextSequence() {
    level++;
    $('.level-title').text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);
    let chosenNumber = buttonColours[randomNumber];
    gamePattern.push(chosenNumber);

    $("#" + chosenNumber).fadeOut(100).fadeIn(100);
    
}

function clear() {
    level = 0;
    gamePattern = [];
    started = false;
}