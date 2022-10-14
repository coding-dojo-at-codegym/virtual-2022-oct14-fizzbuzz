const FIZZ = 'fizz';
const BUZZ = 'buzz';

function fizzbuzz(number) {
    if (this.isFizz(number) && this.isBuzz(number)) {
        return 'fizzbuzz';
    } else if (this.isBuzz(number)) {
        return BUZZ;
    } else if (this.isFizz(number)) {
        return FIZZ;
    }
    return number;
}

function isFizz(number) {
    return number % 3 === 0;
}

function isBuzz(number) {
    return number % 5 === 0;
}
