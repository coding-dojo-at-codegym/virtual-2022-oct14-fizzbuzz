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

function isDivisible(number, divisibleBy) {
    return number % divisibleBy === 0;
}

function isFizz(number) {
    return isDivisible(number, 3);
}

function isBuzz(number) {
    return isDivisible(number, 5);
}

function isFizzBuzz(number) {
    return isFizz(number) && isBuzz(number);
}
