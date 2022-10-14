const FIZZ = 'fizz'
const BUZZ = 'buzz'

function fizzbuzz (number) {
  if (this.isFizz(number)) {
    return FIZZ
  }

  if (this.isBuzz(number)) {
    return BUZZ
  }
  return number
}

function isFizz (number) {
  return number === 3
}

function isBuzz (number) {
  return number === 5
}