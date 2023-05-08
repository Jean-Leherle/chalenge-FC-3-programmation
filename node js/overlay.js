const overlay = {
  center: (textArray, lineLength, option = '') => {
    for (text of textArray) {
      if (text.length > lineLength) {
        lineLength = text.length + 3
      }
      let line = ""
      if (option === 'cadre') line += '|'
      let numberOfSpace = lineLength - text.length
      for (let i = 0; i < numberOfSpace; i++) {
        line += ' '
        if (i === Math.round(numberOfSpace / 2)) line += text
      }
      if (option === 'cadre') line += '|'
      console.log(line)
    }
    if (option === 'cadre') {
      console.log('-'.repeat(lineLength))
    }
  },//fin de center
  alignLeft: (textArray, startLength) => {
    for (text of textArray) {
      let line = " ".repeat(startLength)
      line += text
      console.log(line)
    }
  }

}
module.exports = { overlay }