module.exports = function toReadable (number) {
    let numArray = ('' + number).split('');
    console.log(numArray);
    let name = {
        0 : 'zero',
        1 : 'one',
        2 : 'two',
        3 : 'three',
        4 : 'four',
        5 : 'five',
        6 : 'six',
        7 : 'seven',
        8 : 'eight',
        9 : 'nine',
        10 : 'ten',
        11 : 'eleven',
        12 : 'twelve',
        13 : 'thirteen',
        14 : 'fourteen',
        15 : 'fifteen',
        16 : 'sixteen',
        17 : 'seventeen',
        18 : 'eighteen',
        19 : 'nineteen',
        20 : 'twenty',
        30 : 'thirty',
        40 : 'forty',
        50 : 'fifty',
        60 : 'sixty',
        70 : 'seventy',
        80 : 'eighty',
        90 : 'ninety',
        100 : 'hundred'
    }
  
    if (numArray.length >= 1 && numArray.length <= 2) {
     return toReadableTwo(name, numArray, number, 1 , 0);
    }
    else {
      if (numArray.length == 3){
        if (numArray[1] == '0' && numArray[2] == '0') {
          return name[numArray[0]] + ' ' + name[100];
        }
        else {
          let number2 = +([numArray[1], numArray[2]]).join('');
          
          return name[numArray[0]] + ' ' + name[100] + ' ' + toReadableTwo(name, numArray, number2, 2, 1  );
        }
      }
    }
}

function toReadableTwo(name, numArray, number, i, j) {
    if (name[number]) {
      return name[number];
    }
    if (numArray.length == 2 || numArray.length == 3) {
      return name[numArray[j]*10] + ((numArray[i] == '0') ? '' : ' ' + name[numArray[i]]);
    }
}
