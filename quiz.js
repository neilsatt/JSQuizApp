 

// Constructor
/* 
  Quiz constructor takes an array of questions 
*/

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0; // first index in array
}

// Quiz Prototypes -------------------------------------------

/* Check current question against correct answer */
Quiz.prototype.guess = function(answer) {
    if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++; // if it's correct, increment score
    }  // no else, score not incremented if it's wrong
    this.currentQuestionIndex++; // go to next question 
};

// Simplifies the process of getting the current question, used above in the guess method
// instead of using this.questions[this.currentQuestionIndex] every time
// use this.getCurrentQuestion instead
Quiz.prototype.getCurrentQuestion = function() {
    return this.questions[this.currentQuestionIndex]; // returns the most recent index 
};

/* See if we have gone through all of the questions */
Quiz.prototype.hasEnded = function() {
    return this.currentQuestionIndex >= this.questions.length;
};

