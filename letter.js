var Letter = function(letterInput) {
    this.letter = letterInput;
    this.display = false;

    this.letterShow = function() {
        if(this.letter == ' '){
            this.display = true;
            return ' ';
        } else if(this.display === false){
            return ' _ ';
        } else {
            return this.letter;
        }
    };

    this.checkLetter = function(userGuess) {
        if(userGuess === this.letter) {
            this.display = true;
            return this.display;
        }
    }
};

module.exports = Letter;

// var A = new Letter("a");
// console.log('--------------------');
// console.log("Underlying Character: " + A.letter);
// console.log("Guessed? " + A.display);
// console.log('--------------------');
// A.checkLetter("b");
// console.log("Guessed? " + A.display);
// console.log(A.letterShow());