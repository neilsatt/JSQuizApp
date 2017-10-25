// Quiz Prototype 

// Constructor
/* 
  takes an array of questions 
*/

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0; // first in array
}

/* Check current question against correct answer */
Quiz.prototype.guess = function(answer) {
    if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++; // if it's correct, increment score
    }
    this.currentQuestionIndex++; // go to next question 
};

// Simplifies the process of getting the current question, used above in the guess method
Quiz.prototype.getCurrentQuestion = function() {
    return this.questions[this.currentQuestionIndex]; // returns the index 
};

/* See if we have gone through all of the questions */
Quiz.prototype.hasEnded = function() {
    return this.currentQuestionIndex >= this.questions.length;
};

