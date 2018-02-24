var Letter = require('./letter.js');

function Word(wordTarget) {

    this.wordTarget = wordTarget;
    this.wordCorrect = false;
    this.letters = [];

    this.getLetters = function () {
        var displayWord = "";
        for (var i = 0; i < wordTarget.length; i++) {
            var targetLetter = new Letter(this.wordTarget[i]);
            this.letters.push(targetLetter);
            var renderBlanks = targetLetter.letterShow();
            let combineWord = renderBlanks.toString();
            displayWord = displayWord.concat(combineWord + " ");
            if (i === wordTarget.length - 1) {
                showString();
            }
        }

        function showString() {
            console.log(displayWord);
        }
    };

    this.remainingLetters = this.wordTarget.length;

    this.checkGuess = function(guess) {
        for (var j = 0; j < this.letters.length; j++)
        var word = letters[j];
        word.checkLetter(guess);
    }

    this.checkForWin = function () {
        if (this.remainingLetters === 0) {
            this.wordCorrect = true;
        }
    };
};

module.exports = Word;

// var test = new Word("test");
// console.log('--------------------');
// console.log("Underlying Word: " + test.wordTarget);
// test.getLetters();
// console.log("Test array" + test.letters);
// console.log("Letter array: " + test.lettersInWord);
// console.log("Guessed? " + test.wordCorrect);
// console.log('--------------------');
// test.remainingLetters = 0;
// test.checkForWin();
// console.log("Guessed? " + test.wordCorrect);