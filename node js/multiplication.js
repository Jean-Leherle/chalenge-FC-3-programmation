const {rl} = require('./rl')

const mutiplication_table = {

  prompt: "Quelle table de multiplication souhaitez-vous afficher ?",
  async main() {
    rl.setPrompt(this.prompt)
    rl.prompt()
    await rl.on("line", (number) => {
      this.answer(number);
      rl.close()
    })
  },
  answer(value) {
    if (isNaN(value))
      return console.error(`${value} n'est pas un nombre`);

    for (let n = 1; n <= 10; n++) {
      console.log(this.calcul(n, value))
    }
  },
  calcul(firstValue, secondValue) {
    return `${firstValue} x ${secondValue} = ${firstValue * secondValue}`
  }

}
module.exports = {mutiplication_table};