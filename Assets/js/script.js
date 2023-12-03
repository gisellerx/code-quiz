var startBtn = document.getElementById("start-btn")
var introSectionEl = document.getElementById("intro-section")
var timerEl = document.getElementById("timer")
var questionSectionEl = document.getElementById("question-section")
var timeEl = document.getElementById("title")

var questionsArray = [
    {
        title: "q 1",
        choices: ["a", "b", "c", "d"],
        answer: "d"
    },
    {
        title: "q 2",
        choices: ["a", "b", "c", "d"],
        answer: "d"
    },
    {
        title: "q 3",
        choices: ["a", "b", "c", "d"],
        answer: "d"
    },
    {
        title: "q 4",
        choices: ["a", "b", "c", "d"],
        answer: "d"
    },
    {
        title: "q 5",
        choices: ["a", "b", "c", "d"],
        answer: "d"
    }
]

var timeLeft = questionsArray.length * 15

// Hide intro section
// Start the timer
// Show the questions
// Data structure for storing questions and choices?

var setIntervalId = 0;
    
function startQuiz() {
    introSectionEl.setAttribute("class", "hide")
    questionSectionEl.removeAttribute("class")
    countDown()
}

function countDown() {

}

startBtn.addEventListener("click", startQuiz)