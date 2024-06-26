

String.prototype.log = function () {
  console.log(this);
}

Array.prototype.log = function () {
  console.log(this);
}

Number.prototype.log = function () {
  console.log(this);
}


String.prototype.toFirstUpper = function () {
  return this[0].toUpperCase() + this.substring(1)
}

Array.prototype.clearDoubles = function () {
  return this.filter((item, index) => this.indexOf(item) === index);
}


Number.prototype.toDouble = function () {
  return (this * 2).log()
}

const arr = [1, 2, 2, 3, 4, 4];
const firstLine = 'Just line';
const lowerText = 'maksim'

firstLine.log()
arr.log()
lowerText.toFirstUpper().log()
arr.clearDoubles().log()

arr[2].toDouble()
