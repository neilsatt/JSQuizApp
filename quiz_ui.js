// Object Literal
var QuizUI = {
    
    /* Show final score or create UI */
    displayNext: function () {
        if (quiz.hasEnded()) {
            this.displayScore();
        } else {
            this.displayQuestion();
            this.displayChoices();
            this.displayProgress();
        }
    },
    
    
    /* Gets question and inserts into page */
    displayQuestion: function() {
        this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
    },
    
    /* 
       Add choices/possible answers from the choices array  
       Using their IDs to add them to the page, using the loop
       Prints out the number of choices for each main question
    */
    displayChoices: function() {
        var choices = quiz.getCurrentQuestion().choices;

        for(var i = 0; i < choices.length; i++) {
            this.populateIdWithHTML("choice" + i, choices[i]); // choice ID
            this.guessHandler("guess" + i, choices[i]); // add click handler and guess ID
        }
    },
    
    /* Shows Game Over text along with users score and num of questions */
    displayScore: function() {
        var gameOverHTML = "<h1>Game Over</h1>";
        gameOverHTML += "<h2> Your score is: " + quiz.score + " out of "+ quiz.questions.length +"</h2>";
        this.populateIdWithHTML("quiz", gameOverHTML); // add html to quiz ID
    },
    
    /* Find element by ID and add html into it  */
    populateIdWithHTML: function(id, text) {
        var element = document.getElementById(id);
        element.innerHTML = text;
    },
    
     /*
      Find button by ID
      Once clicked, the guess method gets called on the quiz and a choice gets added
     
     */
    guessHandler: function(id, guess) {
        var button = document.getElementById(id);
        button.onclick = function() {
            quiz.guess(guess); // check if answer is correct 
            QuizUI.displayNext(); // Game over or next question
        }
    },
    
    /* Displays which question out of total num of questions */
    displayProgress: function() {
        var currentQuestionNumber = quiz.currentQuestionIndex + 1;
        // add html to progress ID 
        this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
    }
    
    
};
