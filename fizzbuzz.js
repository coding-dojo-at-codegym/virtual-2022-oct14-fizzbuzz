const FIZZ = 'fizz'

function fizzbuzz (number) {
  if (this.isFizz(number)) {
    return FIZZ
  }
  return number
}

function isFizz (number) {
  return number === 3
}