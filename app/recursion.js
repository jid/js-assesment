// const { isObject } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName) {
    const arr = []

    if (dirName) {
      if (dirName !== data.dir) {
        data.files.forEach(el => {
          if (typeof el === 'object') {
            arr.push(this.listFiles(el, dirName))
          }
        })
      } else {
        arr.push(this.listFiles(data))
      }

    } else {

      data.files.forEach(el => {
        if (typeof el === 'object') {
          arr.push(this.listFiles(el, dirName))
        }
        else {
          arr.push(el)
        }
      })

    }

    return arr.flat()
  },

  permute: function (arr) {
    const perms = []
    if(!arr?.length)
      return []

    if(arr.length === 1){
      return [arr[0]]
    }

    if(arr.length === 2){
      return [arr[0], arr[1]]
      return [arr[1], arr[0]]
    }

    if(arr.length > 2){
      arr.forEach( (el, idx, arrOrg) => {
        const permTmp = []
        
        // arrOrg.slice(idx).concat([arrOrg.slice(-idx)])

        // permTmp.push(this.permute())
    //     arrOrg.slice(idx,1)
    //     console.log(arrOrg)

        perms.push(permTmp.flat())
      })
    }

    perms.forEach((el, idx) => {
      perms[idx] = el.flat()
    })

    return perms
  },

  fibonacci: function (n) {
    let value = 0

    if (n === 0) {
      value = 0
    } else if (n === 1) {
      value = 1
    } else {
      value += (this.fibonacci(n - 2) + this.fibonacci(n - 1))
    }

    return value
  },

  validParentheses: function (n) {

  }
};
