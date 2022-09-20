exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {
    const tmp = num.toString(2)
    return parseInt(tmp.substr(tmp.length-bit, 1))
  },

  base10: function (str) {
    return parseInt(str, 2)
  },

  convertToBinary: function (num) {
    let test = num.toString(2)
    while(test.length<8){
      test = '0'+test
    }
    return test
  },

  multiply: function (a, b) {
    return +(a * b).toFixed(4)
  }
};
