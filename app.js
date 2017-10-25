/*
 Create the Quiz Questions 
 Create the Quiz Object
 Create the UI
*/

var questions = [
    // question, choices array, and correct answer 
    new Question("Who wrote the music for \'Star Wars'\?", ["Alex North", 'Alan Silvestri', 'John Williams'], 'John Williams'),
    new Question("Who wrote the music for \'American Beauty'\?", ['Thomas Newman', "Alex North", 'John Barry'], 'Thomas Newman'), 
    new Question("Who wrote the music for \'The Cider House Rules'\?", [ "Alex North", 'Leonard Bernstein', 'Rachel Portman'], 'Rachel Portman'), 
    new Question("Who wrote the music for \'Psycho'\?", ['John Williams', "Bernard  Herrmann", 'Angelo Badalamenti'], "Bernard  Herrmann"),
    new Question("Who wrote the music for \'A Fistful of Dollars'\?", ['Ennio Morricone', "Alex North", 'Lalo Schifrin'] , 'Ennio Morricone'), 
    new Question("Who wrote the music for \'The Pink Panther'\?", ['John Williams', "Henry Mancini", 'Lalo Schifrin'], "Henry Mancini"), 
    new Question("Who wrote the music for \'The Gladiator'\?", ['John Barry',  'John Williams', "Hans Zimmer"], "Hans Zimmer"), 
    new Question("Who wrote the music for \'The Titanic'\?", ['John Williams','Wendy Carlos',  "James Horner"], "James Horner"),
    new Question("Who wrote the music for \'Toy Story'\?", ['Randy Newman', 'Laura Karpman', 'Vangelis'], "Randy Newman"), 
    new Question("Who wrote the music for \'Back to the Future'\?", ['Alan Silvestri', 'Laura Karpman',"Henry Mancini" ], "Alan Silvestri"), 
    
];

// Create the Quiz 
var quiz = new Quiz(questions);

// Render/Display the Quiz questions 
QuizUI.displayNext();