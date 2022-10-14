const FIZZ = 'fizz';
const BUZZ = 'buzz';
const FIZZBUZZ = 'fizzbuzz';

function fizzbuzz(number) {
    if (isFizzBuzz(number)) {
        return FIZZBUZZ;
    } else if (isBuzz(number)) {
        return BUZZ;
    } else if (isFizz(number)) {
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

function isFizzBuzz(number) {
    return this.isFizz(number) && this.isBuzz(number);
}
