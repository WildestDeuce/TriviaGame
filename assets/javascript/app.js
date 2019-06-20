
//prerequisites
getMinutes();
getSeconds();
setInterval();

//variables and functions
var mins = 2;
var secs = mins * 60;

function countdown() {
    setTimeout('decrement()', 60);
}

function decrement() {
    if (document.getElementById) {
        minutes = $("#minutes");
        seconds = $("#seconds");
    }

    //if less than one minute remaining, display time in seconds
    if (seconds < 60) {
        seconds.value = secs;
    }
    //display minutes and seconds
    else {
        minutes.value = getminutes();
        seconds.value = getseconds();
    }
    //when less than one minute change time red in color
    if (mins < 1) {
        minutes.style.color = "red";
        seconds.style.color = "red";
    }
    //if seconds become 0 alert "time up"
    if (secs = 0) {
        alert("timeup");
        minutes.value = 0;
        seconds.value = 0;
    }

    //if seconds > 0 decrement timer

    else {
        secs--;
        setTimeout('decrement()', 1000);
    }
}

function getminutes() {
    //divide minutes by 60, round down
    mins = Math.floor(secs / 60);
    return mins;

}

function getseconds() {
    //take minutes remaining as seconds away from total seconds remaining
    return secs - Math.round(mins * 60);
}

//array for trivia questions

var randTrivia = [];
randTrivia[0] = "What is a pregnant goldfish called?"; // A Twit
randTrivia[1] = "Whos is the legendary Benedictine monk whom invented champagne?"; //Dom Perignon
randTrivia[2] = "This the largest fresh water lake in the world"; //Lake Superior
randTrivia[3] = "What do you call someone who shoes horses"; //A Ferrier
randTrivia[4] = "Who was the first actor to play James Bond in the movie series?"; //Sir Sean Connery
randTrivia[5] = "What percent of an egg's weight is its shell?"; //12%
randTrivia[6] = "This is antonym of the word 'synonym'"; //Antonym
randTrivia[7] = "Prague is in which country?"; //Prague
randTrivia[8] = "What is a lexicon?"; // A Dictionary
randTrivia[9] = "This fighter has a career record of 49 wins ZERO losses."; //Rocky Marciano
// phobia round
var phobiaTrivia = [];
phobiaTrivia[0] = "What is barophobia?"; // The fear of gravity
phobiaTrivia[1] = "What is pogonophobia?"; // The fear of beards
phobiaTrivia[2] = "What is phobophobia?"; //The fear of cheese
phobiaTrivia[3] = "What is chiroptophobia?"; //The fear of bats
phobiaTrivia[4] = "What is atelophobia?"; //The fear of imperfection
phobiaTrivia[5] = "What is ablutophobia?"; //The fear of bathing
phobiaTrivia[6] = "What is melissaphobia?"; //The fear of bees
phobiaTrivia[7] = "What is automatonophobia?"; //The fear of vantriliquist dummies
phobiaTrivia[8] = "What is cynophobia?"; //The fear of dogs
phobiaTrivia[9] = "What is nyctophobia?"; //The fear of the dark

//function for round one

function randTrivia() {
    $("#button").on("click")

    var roundOneTrivia = Math.floor(Math.random() * (randTrivia.length));
    $("#ptrivia").text() = randTrivia[roundOneTrivia];
}

//function for round two

function phobiaTrivia() {
    $("#button").on("click")

    var roundTwoTrivia = Math.floor(Math.random() * (phobiaTrivia.length));
    $("#ptrivia").text() = phobiaTrivia[roundTwoTrivia];
}

if (randTrivia = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
    Reset(mins);
    Reset(secs);
}

else (phobiaTrivia = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]) {
    Reset(mins);
    Reset(secs);

}









