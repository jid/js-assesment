exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve, reject) => {
      resolve(value)
    })
  },

  manipulateRemoteData: function(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          data.people.sort((a, b) => {
            return a.name.localeCompare(b.name)
          })
          
          resolve(data.people.map(val => val.name))
        })
        .catch((err) => reject(err))
    })
  }
};
