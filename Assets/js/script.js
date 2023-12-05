var startBtn = document.getElementById("start-btn")
var introSectionEl = document.getElementById("intro-section")
var timerEl = document.getElementById("timer")
var questionSectionEl = document.getElementById("question-section")
var initialSectionEl = document.getElementById("initial-section")
var titleEl = document.getElementById("title")
// Have to use querySelectorAll bc there is more than one
var choicesEl = document.querySelectorAll(".choices")

var scoreEl = 0

var questionIndex = 0
var questionsArray = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within _____.",
        choices: ["a. numbers and strings", "b. curly brackets", "c. parentheses", "d. square brackets"],
        answer: "c. parentheses"
    },
    {
        title: "Arrays in javascript can be used to store _____.",
        choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "d. all of the above"
    },
    {
        title: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["1.commas", "2.curly brackets", "3.quotes", "4.parentheses"],
        answer: "2.curly brackets"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1.Javascript", "2.terminal/bash", "3.for loops", "4.console.log"],
        answer: "4.console.log"
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
    questionSectionEl.setAttribute("class", "")
    setIntervalId = setInterval(countDown, 1000)
    showQuestions()
}

function countDown() {
    timerEl.textContent = timeLeft--
    if (timeLeft === 0) {
        gameOver()
    }
}

function gameOver() {
    clearInterval(setIntervalId)
    initialSectionEl.removeAttribute("class")
    initialSectionEl.textContent = `score:  + ${scoreEl}`
}

function showQuestions() {
    var currentQuestion = questionsArray[questionIndex]
    if (currentQuestion != null) {
        titleEl.textContent = currentQuestion.title

        choicesEl[0].textContent = questionsArray[questionIndex].choices[0]
        choicesEl[1].textContent = questionsArray[questionIndex].choices[1]
        choicesEl[2].textContent = questionsArray[questionIndex].choices[2]
        choicesEl[3].textContent = questionsArray[questionIndex].choices[3]
        // final choice breaks alerts, so I've commented it out.
        // choicesEl[4].textContent = questionsArray[questionIndex].choices[4]
    } 
}

function nextQuestion(event) {
    var currentElement = event.target
    if (currentElement.matches("button")) {
        questionIndex++
        showQuestions()
    }

    if (questionIndex === questionsArray.length) {
        clearInterval(setIntervalId)
        // introSectionEl.setAttribute("class", "")
        initialSectionEl.setAttribute("class", "")
        questionSectionEl.setAttribute("class", "hide")
    }

    if (currentElement.textContent === questionsArray[questionIndex].answer) {
        alert("Correct!")
        scoreEl +=1
    } else {
        timeLeft -= 10
        alert("Wrong!")
    }
}

startBtn.addEventListener("click", startQuiz)

questionSectionEl.addEventListener("click", nextQuestion)




