
var buttonColours =["red", "blue", "green", "yellow" ];


alert("hello");
function nextSequence(){
    var randomNumber= math.floor(math.randomNumber()*4);
    var randomChosenColour =buttonColours[randomNumber];
    var gamePattern =[];
    gamePattern.push(randomChosenColour);
    console.log("Game pattern: " + gamePattern);



}

nextSequence();