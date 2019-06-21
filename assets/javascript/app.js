//variables and functions

$(document).ready(function () {
    var timer = 120;
    var timerDIv = $("#count-down");
    timerDIv.html(`${timer}`);
})

function countDown() {
    //set timer 
    timer = 120;
    //in not running set to true, clear the interval and start decrement function
    if (!running) {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        running = true;
    }
};
function decrement() {
    //counts timer down
    timer--;
    //adds to html
    $(timerDIv).html(`${timer}`); {
        // if time runs out, run stop function, show in html time ran out and add score to out of time
        if (timer === 0) {
            stop();
            endTime++;
            clean();
            timedOut();
            console.log("out of time!");
        }
    };
};

function clean() {

    $("#")

}


/*function countdown() {
    timer = 120;
    timerDIv.html(``)
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
}*/

//array for trivia questions
var questions =
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
        }
        {

            question: "This the largest fresh water lake in the world", //Lake Superior
            choices: ["Lake Superior", "Lake Victoria", "Loch Ness", "Lake Bikal"]
            answer: 0
        }
        {
            question: "Who was the first actor to play James Bond in the movie series?" //Sir Sean Connery
            choices: ["Roger Moore", "Daniel Craig", "Sean Connery", "Pierce Brosnan"]
            answer: 2
        }
    ]
        

"What do you call someone who shoes horses"; //A Ferrier
; //Sir Sean Connery
"What percent of an egg's weight is its shell?"; //12%
"This is antonym of the word 'synonym'"; //Antonym
"What is melissaphobia?"; //The fear of bees
"What is a lexicon?"; // A Dictionary
"This fighter has a career record of 49 wins ZERO losses."; //Rocky Marciano
]




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

/*else (phobiaTrivia = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]) {
    Reset(mins);
    Reset(secs);

}*/









