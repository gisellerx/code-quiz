// Much of the initial code was made while following along to Professor Phil Lloyds video guide
var startBtn = document.getElementById("start-btn")
var introSectionEl = document.getElementById("intro-section")
var timerEl = document.getElementById("timer")
var questionSectionEl = document.getElementById("question-section")
var initialSectionEl = document.getElementById("initial-section")
var titleEl = document.getElementById("title")
// Have to use querySelectorAll bc there is more than one
var choicesEl = document.querySelectorAll(".choices")
var highscoreEl = document.getElementById("highscore-section")
var inputValueEl = document.getElementById("initial-input")
var listEl = document.getElementById("list")

// starts score at 0
var scoreEl = 0
var finalscoreEl = document.getElementById("finalscore-section")

var questionIndex = 0
// these questions in the questions array are taken from the hw requirements example
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

var setIntervalId = 0;
    
// hides intro section
// removes hide class from question section
// starts the countdown
function startQuiz() {
    introSectionEl.setAttribute("class", "hide")
    questionSectionEl.setAttribute("class", "")
    setIntervalId = setInterval(countDown, 1000)
    showQuestions()
}

// Timeleft variable set to lose by 1 every second, and at end of countdown, triggers gameOver()
// function countdown is called by setIntervalId, which is in the startQuiz() function
function countDown() {
    timerEl.textContent = timeLeft--
    if (timeLeft === 0) {
        gameOver()
    }
}

// removes hide class from initial section
// removes hide class from finalscoreEl
// removes hide class from question section
// calculates and reveals score in finalscore section
function gameOver() {
    clearInterval(setIntervalId)
    initialSectionEl.removeAttribute("class")
    finalscoreEl.removeAttribute("class")
    // TA helped with this section for the scoreEl
    finalscoreEl.textContent = `Your final score is:   ${scoreEl}`
    questionSectionEl.setAttribute("class", "hide")
    scoreEl.textContent = score + "/" + questionsArray.length

}

// Checks for questions from the questions array using questionIndex, and checks if it is not null
// If not null, next question needs to be shown
// Title of question is set using titleEl
// Code loops through choices and sets textContent of each choice to corresponding choice in the Array
function showQuestions() {
    var currentQuestion = questionsArray[questionIndex]
    // TA helped with this section for currentQuestion != null
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

// triggered when user clicks a button
// checks if questionIndex is less than questionsArray.length - 1
// if less than, it calls showQuestions(), which show the next question
// otherwise, it calls gameOver() and the initial and question sections are removed
function nextQuestion(event) {
    var currentElement = event.target
    if (currentElement.matches("button")) {
        if (questionIndex < questionsArray.length - 1) {
            questionIndex++
            showQuestions()
        } else {
            gameOver()
            initialSectionEl.setAttribute("class", "")
            questionSectionEl.setAttribute("class", "hide")
        }
    }

    // if (questionIndex === questionsArray.length) {
    //     clearInterval(setIntervalId)
    //     // introSectionEl.setAttribute("class", "")
    //     initialSectionEl.setAttribute("class", "")
    //     questionSectionEl.setAttribute("class", "hide")
    // }

    // adds a point and alerts "Correct!" if answer matches the questionsArray[questionIndex].answer
    // subtracts 10 seconds and alerts "Wrong!" if answer does not match the questionsArray[questionIndex].answer
    if (currentElement.textContent === questionsArray[questionIndex].answer) {
        alert("Correct!")
        scoreEl +=1
    } else {
        timeLeft -= 10
        alert("Wrong!")
    }
}

var initials = {}

// used to save the users intials, score, and time into local storage, and display it on the high scores page
// ideally it will also sort the array by score, and limit it to 5 scores, but while local storage displays multiple scores, only 1 is currently displaying in the high score page
function saveScore() {
    finalscoreEl.setAttribute("class", "hide")
    initialSectionEl.setAttribute("class", "hide")
    highscoreEl.removeAttribute("class")

    // For local storage section, used video guide from James Q Quick youtube video to help improvise the code
    // https://youtu.be/jfOv18lCMmw?si=AWU3sppIrLKhg7Xh
    // https://youtu.be/jfOv18lCMmw?si=HGWVAKrr1AtDLK68 
    if (initials.length !== 0) {
        var finalscore = JSON.parse(window.localStorage.getItem('finalscore')) || []

        var recentScore = {
            user: inputValueEl.value,
            score: scoreEl,
            time: timeLeft
        }

    }
    finalscore.push(recentScore)
    window.localStorage.setItem('finalscore', JSON.stringify(finalscore))

    finalscore.sort ((a, b) => b.recentScore - a.recentScore)

    finalscore.splice(5)


    // temporary solution to show highscores in highscore section
    listEl.innerHTML = recentScore.user + " score: " + recentScore.score + " time: " + recentScore.time

    // Attempt to make scores more like a list. Currently not functioning
    // listEl.innerHTML = recentScore
    //     .map(recentScore => {
    //         return `<li>${recentScore.user} + " " + ${recentScore.score} + " " + ${recentScore.time}</li>`
    //     })
    //     .join("")
}

// View Highscores still doesn't work
// function viewHighscores() {
//     introSectionEl.setAttribute("class", "hide")
//     highscoreEl.removeAttribute("class")
// }

function deleteScores() {
    localStorage.clear()
    location.reload()
}

function goBack() {
    location.reload()
}

startBtn.addEventListener("click", startQuiz)

questionSectionEl.addEventListener("click", nextQuestion)

initialSectionEl.addEventListener("onclick", saveScore)

// introSectionEl.addEventListener("click", viewHighscores)

highscoreEl.addEventListener("onclick", deleteScores)

highscoreEl.addEventListener("onclick", goBack)






