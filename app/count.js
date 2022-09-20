exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function(start, end){
    let canceled = false
    let tick = start

    console.log(tick)
    tick++

    const interval = setInterval(function() {
      if(tick <= end){
        console.log(tick)
        tick++
      }
    }, 100)

    return {
      cancel: function(){
        canceled = true
        clearInterval(interval)
      }
    }
  }
};
