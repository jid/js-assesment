exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return str.match(/[0-9]/g) ? true : false
  },

  containsRepeatingLetter: function(str) {
    return str.match(/a{2,}|b{2,}|c{2,}|d{2,}|e{2,}|f{2,}|g{2,}|h{2,}|i{2,}|j{2,}|k{2,}|l{2,}|m{2,}|n{2,}|o{2,}|p{2,}|r{2,}|s{2,}|t{2,}|u{2,}|v{2,}|w{2,}|x{2,}|y{2,}|z{2,}|A{2,}|B{2,}|C{2,}|D{2,}|E{2,}|F{2,}|G{2,}|H{2,}|I{2,}|J{2,}|K{2,}|L{2,}|M{2,}|N{2,}|O{2,}|P{2,}|R{2,}|S{2,}|T{2,}|U{2,}|V{2,}|W{2,}|X{2,}|Y{2,}|Z{2,}/g) ? true : false
  },

  endsWithVowel: function(str) {
    return str.match(/[eyuioaEYUIOA]$/g) ? true : false
  },

  captureThreeNumbers: function(str) {
    let matches = str.match(/[0-9]{3}/g)
    return matches ? matches[0] : false
  },

  matchesPattern: function(str) {
    return str.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/g) ? true : false
  },

  isUSD: function(str) {
    return str.match(/^\$\d{1,3},?(\d{3},?)*(\.\d{2})?$/g) ? true : false
  }
};
