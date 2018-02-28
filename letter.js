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

        }
    }
};

module.exports = Letter;
