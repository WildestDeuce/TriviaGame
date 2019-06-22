//variables and functions

$(document).ready(function () {
    var timer = 20;
    var timerDIv = $("#count-down");
    timerDIv.html(`${timer}`);
})
var running = false
var intervalId;
var endTime = 20

$("#startbutton").on("click",countDown)


    
//call funtion countDown somwhere in code 
function countDown() {
    //set timer 
    timer = 20;
    //in not running set to true, clear the interval and start decrement function
    if (!running) {
        intervalId = setInterval(decrement, 1000);
        running = true;
        $("#count-down").text(timer)
    }
};
function decrement() {
    //counts timer down
    timer--;
    //adds to html
$("#count-down").text(timer); 
        // if time runs out, run stop function, show in html time ran out and add score to out of time
        if (timer === 0) {
            //stop();
            endTime++;
            clear();
            //timedOut();
            console.log("out of time!");
        }
    
};

function clear() {

    $("#ptrivia").empty()
    clearInterval(intervalId)
}

//for ()
//questions [i].choices [questions [i].answer]'

//every question in pink box of array .append to pink box
/*var questions =
    [
        {
            question: "What is a pregnant goldfish called?", // A Twit
            choices: ["A float", "A crank", "A tramp", "A twit"];
            answer: 3
        },

        {
            question: "Whos is the legendary Benedictine monk whom invented champagne?"  //Dom Perignon
            choices: ["Perrier Jouet", "Dom Perignon", "Armand De Brignac", "Louis Roederer"];
            answer: 1
        },
        {

            question: "This the largest fresh water lake in the world", //Lake Superior
            choices: ["Lake Superior", "Lake Victoria", "Loch Ness", "Lake Bikal"]
            answer: 0
        },
        {
            question: "Who was the first actor to play James Bond in the movie series?" //Sir Sean Connery
            choices: ["Roger Moore", "Daniel Craig", "Sean Connery", "Pierce Brosnan"]
            answer: 2
        },
        {
            question: "What is a lexicon?" //A Dictionary
            choices: ["A dictionary", "An hourglass", "A pocketwatch", "A boat"]
            answer: 0
        },
        {    
            question: "This fighter has a career record of 49 wins ZERO losses."; //Rocky Marciano
            choices: ["Floyd Mayweather", "Muhammad Ali", "Rockey Marciano", "Sugar Ray Leonard"]
            answer: 2
        },
        {
            question: "What percent of an egg's weight is its shell?"; //12%
            choices: ["9%", "10%", "11%", "12%"]
            answer: 3
        },
        {
            question: "What is melissaphobia?"; //The fear of bees
            choices: ["Fear of clouds", "Fear of bees", "Fear of words", "Fear of fear"]
            answer: 1
        },    
    
        {
            question: "Who was the first baseball player to have his jersey retired?" //Lou Gehrig 
            choices: ["Mickey Mantle", "Babe Ruth", "Ted Williams", "Lou Gehrig"]
            answer: 3
        }    
        {
            qeustion: "This is the Greek God of dreams" //Morpheus
            choices: ["Morpheus", "Demeter", "Dionysus", "Chiron"]
            answer: 1

        }


        
    ]






// phobia round
/*var phobiaTrivia = [];
phobiaTrivia[0] = "What is barophobia?"; // The fear of gravity
phobiaTrivia[1] = "What is pogonophobia?"; // The fear of beards
phobiaTrivia[2] = "What is phobophobia?"; //The fear of cheese
phobiaTrivia[3] = "What is chiroptophobia?"; //The fear of bats
phobiaTrivia[4] = "What is atelophobia?"; //The fear of imperfection
phobiaTrivia[5] = "What is ablutophobia?"; //The fear of bathing
phobiaTrivia[6] = "What is melissaphobia?"; //The fear of bees
phobiaTrivia[7] = "What is automatonophobia?"; //The fear of vantriliquist dummies
phobiaTrivia[8] = "What is cynophobia?"; //The fear of dogs
phobiaTrivia[9] = "What is nyctophobia?"; //The fear of the dark*/

//function for round one

function randTrivia() {
    $("#button").on("click")

    var roundOneTrivia = Math.floor(Math.random() * (questions.length));
    $("#ptrivia").text() = questions[roundOneTrivia];
}

//function for round two

function phobiaTrivia() {
    $("#button").on("click")

    var roundTwoTrivia = Math.floor(Math.random() * (phobiaTrivia.length));
    $("#ptrivia").text() = phobiaTrivia[roundTwoTrivia];
}

/*if (randTrivia = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
    Reset(mins);
    Reset(secs);
}

/*else (phobiaTrivia = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]) {
    Reset(mins);
    Reset(secs);

}*/









