var startEL = document.querySelector(".select");
var timeEL = document.querySelector(".time");
var scoreEL = document.querySelector(".score");
var questionEL = document.querySelector(".question-container");
var answer1 = document.querySelectorAll(".answer-1");
var answer2 = document.querySelectorAll(".answer-2");
var answer3 = document.querySelectorAll(".answer-3");
var answer4 = document.querySelectorAll(".answer-4");

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

// startEL.addEventListener(click, );