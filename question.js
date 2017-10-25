// Question Prototype 

// Constructor 
/* 
    Takes in text of the question, choices array, and correct answer 
*/
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices; // correct and incorrect answer 
    this.answer = answer;
}

// See if user's choice is the correct one 
Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
};