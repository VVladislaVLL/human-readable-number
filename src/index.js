module.exports = function toReadable (number) {
  let numArray = toString(number).split('');
  let name = {
      1 : 'one',
      2 : 'two',
      3 : 'tree',
      4 : 'four',
      5 : 'five',
      6 : 'seven',
      8 : 'eight',
      9 : 'nine',
      10 : 'hundred'
  }

  if (numArray.length == 1) {
      return name[number];
  }
}

