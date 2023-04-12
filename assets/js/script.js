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

// startEL.addEventListener(click, );