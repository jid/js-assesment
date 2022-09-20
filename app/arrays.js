exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return arr.indexOf(item)
  },

  sum: function (arr) {
    return arr.reduce((acc, val) => acc + val)
  },

  remove: function (arr, item) {
    while (arr.indexOf(item) !== -1) {
      arr.splice(arr.indexOf(item), 1)
    }
    return arr
  },

  removeWithoutCopy: function (arr, item) {
    while(arr.indexOf(item) !== -1){
      arr.splice(arr.indexOf(item), 1)
    }

    return arr
  },

  append: function (arr, item) {
    arr.push(item)

    return arr
  },

  truncate: function (arr) {
    arr.pop()

    return arr
  },

  prepend: function (arr, item) {
    arr.splice(0, 0, item)

    return arr
  },

  curtail: function (arr) {
    arr.shift()

    return arr
  },

  concat: function (arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function (arr, item, index) {
    arr.splice(index,0,item)
    return arr
  },

  count: function (arr, item) {
    return arr.reduce((acc, val) => {
      return (val === item ? ++acc : acc)
    }, 0)
  },

  duplicates: function (arr) {
    const arrTmp = []
    arr.slice(0, -1).forEach((val, index) => {
      if(arr.indexOf(val, index + 1) !== -1 && arrTmp.indexOf(val) === -1)
        arrTmp.push(val)
    })
    return arrTmp
  },

  square: function (arr) {
    return arr.map(el => el ** 2)
  },

  findAllOccurrences: function (arr, target) {
    const arrTmp = []
    arr.forEach((value, index) => {
      if(value === target)
        arrTmp.push(index)
    })
    return arrTmp;
  }
};
