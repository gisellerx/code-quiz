var startBtn = document.getElementById("start-btn")
var introSectionEl = document.getElementById("intro-section")
var timerEl = document.getElementById("timer")
var questionSectionEl = document.getElementById("question-section")
var titleEl = document.getElementById("title")
// Have to use querySelectorAll bc there is more than one
var choicesEl = document.querySelectorAll(".choices")

var questionIndex = 0
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
    setIntervalId = setInterval(countDown, 1000)
}

function countDown() {
    timerEl.textContent = timeLeft--
    if (timeLeft === 0) {
        clearInterval(setIntervalId)
    }
}

function showQuestions() {
    titleEl.textContent.questionsArray[questionIndex].title

    choicesEl[0].textContent = questionsArray[questionIndex].choices[0]
    choicesEl[1].textContent = questionsArray[questionIndex].choices[1]
    choicesEl[2].textContent = questionsArray[questionIndex].choices[2]
    choicesEl[3].textContent = questionsArray[questionIndex].choices[3]
    
}

function nextQuestion(event) {
    var currentElement = event.target
    if (currentElement.matches("button")) {
        questionIndex++
        showQuestions()
    }
}

startBtn.addEventListener("click", startQuiz)

questionSectionEl.addEventListener("click", nextQuestion)