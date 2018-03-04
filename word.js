var Letter = require('./letter.js');

var displayWord = "";

function Word(wordTarget) {
    this.letters = [];
    this.fullWord = [];
    this.correctGuesses = [];
    this.wordTarget = wordTarget;
    this.wordCorrect = false;

    this.getLetters = function () {
        displayWord = "";
        for (var i = 0; i < wordTarget.length; i++) {
            var targetLetter = new Letter(this.wordTarget[i]);
            this.letters.push(targetLetter);
            this.fullWord.push(targetLetter.letter);
            let renderBlanks = targetLetter.letterShow();
            let combineWord = renderBlanks.toString();
            displayWord = displayWord.concat(combineWord + " ");
            if (i === wordTarget.length - 1) {
                console.log(displayWord);
            }
        }

    };

    this.checkGuess = function(guess) {
        displayWord = "";

        for (var j = 0; j < this.letters.length; j++) {
            var word = this.letters[j];
            word.checkLetter(guess);

            let renderBlanks = word.letterShow();
            let combineWord = renderBlanks.toString();

            displayWord = displayWord.concat(combineWord + " ");
            if (j === wordTarget.length - 1) {
                console.log(displayWord);
            }

        }
};

this.rightOrWrong = function(guess) {
    if (this.fullWord.includes(guess)) {
        return true;
    } else {
        return false;
    }
}


};

module.exports = Word;