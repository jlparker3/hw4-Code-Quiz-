
var questions = [
    {
        prompt: "What does DOM represent?",
        choices: ['Document', 'Object', 'Console', 'Document Object Model'],
        answer: 3
    },
    {
        prompt: "What is the correct syntax to log something to the console?",
        choices: ['console.log', '.consolelog', '.logconsole', 'log.console'],
        answer: 1

    },
    {
        prompt: " What does typeOf:3 return?",
        choices: ['string', 'boolean', 'number', 'none'],
        answer: 2
    },
    {
        prompt: "What does = sign operator represent?",
        choices: ['equals', 'assignment', 'is equal to', 'all of the above'],
        answer: 1
    },
    {
        prompt: " What will inkvoke a function?",
        choices: ['[]', '{}', '()', '.'],
        answer: 2
    },

]





let timeRemaining = questions.length * 15
let timerID
let index = 0
const startButton = document.getElementById('start-button')
const questionContainerElement = document.getElementById('question-container')
startButton.addEventListener('click', startQuiz)

//pat code
// var choiceEl = document.getElementById('choice')
// var feedbackEl = document.getElementById('feedback')

function startQuiz() {

    document.getElementById('start-container').classList.add('hide')
    questionContainerElement.classList.remove('hide')
    nextQuestion()
    startTimer()


}


function nextQuestion() {

    //PATS CODE
    // var currentQuestion = questions[currentQuestionIndex]
    // var titleEl = document.getElementById('question');titleEl.textContent = currentQuestion.title 

    // choiceEl.innerHTML ='';

    // currentQuestion.choices.forEach(function(choice, i){
    //     var optionButton = document.createElement('button')
    //     optionButton.setAttribute('class', 'choice')
    //     optionButton.setAttribute('value', choice)
    //     optionButton.textContent = choice
    //     optionButton.onclick = answerClick
    //     choicesEl.appendChild(optionButton)
    // })

    //original code
    document.getElementById('question').textContent = questions[index].prompt

    for (let i = 0; i < questions[index].choices.length; i++) {
        document.getElementById('choice' + i).textContent = questions[index].choices[i]
        document.getElementById('choice' + i).addEventListener("click", function () {
            index++;
            if(index < questions.length){
                nextQuestion()
                
              //compare function to see if the answer is right or wrong 
            }
            else {
                clearInterval(timerID)
                }
                
          
        })
    }

}
//PATS CODE whole function
// function isAnswerCorrect () {
//     if(this.value !== questions[currentQuestionIndex].answer) {
//         feedbackEl.textContent = "Wrong!"

//     }
//     else {
//         feedbackEl.textContent = "Correct!"
//     }
//     currentQuestionIndex++
//     if(currentQuestionIndex === questions.length) {
//         console.log("Game over")
//         //function to end quiz and prompt to input initals 
//     } else {
//         nextQuestion()
//     }

// }




// function isAnswerCorrect () {
//     answer = questions[index].answer
//     correct = selectedButton.dataset.correct
//     setStatusClass(document.body, correct)
//     Array.from(answerButtonsElement.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct)
//     })
// }


// function removeTime() {
//     secondsRemaining -= 15;
// }

function startTimer() {
    timerID = setInterval(function () {
        timeRemaining--;
        document.getElementById('timer').textContent = timeRemaining

    }, 1000)
}

startButton.onclick = startQuiz;

// //LEFT TODO
// deduct time if answer is incorrect
// highscore page
//make sure all my questions show




//high score page 

// function highScore() {
//     clearInterval (timerID)
//     high
//     document.getElementById('viewhighscore-container').classList.add('hide')
//     banner.textContent = "High Scores"
//     questions.textContent = localStorage.getItem("user") + ":" + localStoarge.getItem("score")

//     document.getElementById('clearbtn').addEventListener("click", function () {
//         localStorage.clear()
//         questions.textContent = " ";
//     })
// }






/*
PSEUDO CODE

 function startQuiz
       when the start quiz button is clicked, will load next page with the 1st question
       timer has to start when the quiz starts set to 2 minutes
           if/ else statement to decrement time when user gets question wrong
       
   
   fuction nextQuestion
        user chooses answer each option is clickable, and the next button will advance the page to the next question
        have to delete previous question and answer
        generate new question and answer choices
        for loop to iteriate through questions 
        use on-click on answers set it equal to boolean true or false 

   highscores
       will save users highscore in local storage
       allow user to input name
       submit button


*/