exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr)
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
    return function(str2){
      return `${str}, ${str2}`
    }
  },

  makeClosures: function(arr, fn) {
    return arr.map( x => {
      return function(){
        return fn(x)
      }
    })
  },

  partial: function(fn, str1, str2) {
    return function(punctuation){
      return fn(str1, str2, punctuation)
    }
  },

  useArguments: function(...args) {
    return [...args].reduce((acc, val) => acc + val)
  },

  callIt: function(fn, ...args) {
    return fn(...args)
  },

  partialUsingArguments: function(fn, ...args) {
    return function(...args2){
      return fn(...args, ...args2)
    }
  },

  curryIt: function(fn) {
    return (arg1) => {
      return (arg2) => {
        return (arg3) => {
          return fn(arg1, arg2, arg3)
        }
      }
    }
  }
};
