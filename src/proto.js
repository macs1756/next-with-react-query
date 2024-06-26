

String.prototype.log = function () {
  console.log(this);
}

Array.prototype.log = function () {
  console.log(this);
}

String.prototype.toFirstUpper = function () {
  return this[0].toUpperCase() + this.substring(1)
}

const arr = [1, 2, 3, 4];
const firstLine = 'Just line';
const lowerText = 'maksim'

firstLine.log()
arr.log()
lowerText.toFirstUpper().log()

