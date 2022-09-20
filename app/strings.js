exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {
    let count = 1
    const arrStr = [str[0]]

    for (let i = 1; i < str.length; i++) {
      if (str[i - 1] === str[i]) {
        count++;
      } else {
        count = 1
      }

      if (count <= amount) {
        arrStr.push(str[i])
      }
    }

    return arrStr.join('')
  },

  wordWrap: function (str, cols) {
    // let count = 1
    // const arrStr = []

    // for (let i = cols; i < str.length; i += cols) {
    //   if (!(i < str.length)) {
    //     arrStr.push(str.substring((i - cols)))
    //     break
    //   }

    //   arrStr.push(str.substring(i - cols, i))

    //   if (arrStr[i] === ' ')
    //     arrStr[i] = '\n'
    // }

    // return arrStr.join('')
  },

  reverseString: function (str) {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i]
    }
    return reversed
  }
};
