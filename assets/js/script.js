var startEL = document.querySelector(".select");
var timeEL = document.querySelector(".time");
var scoreEL = document.querySelector(".score");
var questionEL = document.querySelector(".question-container");
var answer1 = document.querySelector(".answer-1");
var answer2 = document.querySelector(".answer-2");
var answer3 = document.querySelector(".answer-3");
var answer4 = document.querySelector(".answer-4");
var answersEL = document.querySelector(".answer-container")

var highScores = [];
var score = 0;
var time = 60;
var timerInterval = 0;

var questionOne = {
    question: "What notation indicates an Array",
    answer: "Square Brackets",
    choices: ["Square Brackets", "Parentheses", "Curley Brackets", "Quotation Marks"],
};

var questionTwo = {
    question: "Where do you link a stylesheet to your html file?",
    answer: "Before the closing tag of the head",
    choices: ["Before the closing tag of the body", 
    "In the footer tag", "After the closing tag of the header", 
    "Before the closing tag of the head"],
};

var questionThree = {
    question: "What do you enter to change directories in the terminal/Gitbash?",
    answer: "cd",
    choices: ["pwd", "ls", "cd", "mkdir"],
};

var questionFour = {
    question: "What is not good practice to test or debug your javascript code?",
    answer: "",
    choices: ["console.log()", 
    "inspect/devtools", 
    "add breakpoint in your code in console", 
    "look through each file to find the problem"],
};

var questionFive = {
    question: "",
    answer: "",
    choices: [],
};

var questionSix = {
    question: "",
    answer: "",
    choices: [],
};

var allQuestions = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
    questionFive,
    questionSix
]
    console.log(allQuestions[0].question)
var startQuiz = function(){
    console.log("start function");
    questionEL.classList.toggle("hide");
    answersEL.classList.toggle("hide");
    document.querySelector(".main-screen").classList.toggle("hide");

    questionEL.textContent = allQuestions[0].question;
    answer1.textContent = "1. " + allQuestions[0].choices[0]
    answer2.textContent = "2. " + allQuestions[0].choices[1]
    answer3.textContent = "3. " + allQuestions[0].choices[2]
    answer4.textContent = "4. " + allQuestions[0].choices[3]
    

    // for(i = 0; i < allQuestions.length; i++){
    //     questionEL = allQuestions[i].question

    // }
    startTimer();
};

function startTimer(){
    timerInterval = setInterval(function() {
       time--; 
       timeEL.textContent = "Time: " + time;
       if (timer === 0){
        clearInterval(timerInterval);
       }
    }, 1000);
}

// answer4.addEventListener("click", function(){

// });
startEL.addEventListener("click", startQuiz);