const { rl } = require('./rl')

const pythagoras_theorem = {
  prompt: "Indiquer les valeurs des côtés connus du triangle :",

  async main() {
    rl.setPrompt(this.prompt)
    rl.prompt()
    await rl.on("line", (userAnswer) => {
      const values = this.readAnswer(userAnswer);
      this.answer(values);
      rl.close()
    })
  },
  readAnswer(answerAsString){
    const answerAsArray = answerAsString.split(' ');
    if(answerAsArray.length !==2 || isNaN(answerAsArray[0]) || isNaN(answerAsArray[1]) ) 
      return false
    else return answerAsArray
  },
  answer(numbers){
    if(!numbers)
    return console.error("Donner uniquement les valeurs des deux cotés. Exemple : 3 4");
    
    console.log(`La longueur du troisième côté est : ${this.calcul(parseFloat(numbers[0]), parseFloat(numbers[1]))}`)

  },

  calcul(firstValue, secondValue){
    return Math.sqrt(firstValue**2+secondValue**2)
  }

}
module.exports = { pythagoras_theorem }