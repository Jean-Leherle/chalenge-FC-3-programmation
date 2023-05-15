const {rl} = require('./rl')

const remarkable_identity = {

  prompt: "Indiquer deux nombres dont vous voulez connaître leur identité remarquable : ",
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
    return console.error("Donner uniquement deux valeurs. Exemple : 3 4");
    const a = parseFloat(numbers[0]);
    const b = parseFloat(numbers[1])
    const results = this.calcul(a, b)
    console.log(`(${a} + ${b})² = ${a}² + 2 x ${a} x ${b} + ${b}² = ${results.addIdentity}`)
    console.log(`(${a} - ${b})² = ${a}² - 2 x ${a} x ${b} + ${b}² = ${results.substractIdentity}`)
    console.log(`(${a} + ${b})(${a} - ${b}) = ${a}² - ${b}² = ${results.addSubstractIdentity}`)
    
  },

  calcul(firstValue, secondValue){
    const addIdentity = (firstValue + secondValue)**2;
    const substractIdentity = (firstValue - secondValue)**2;
    const addSubstractIdentity = firstValue**2 - secondValue**2;
    return {addIdentity, substractIdentity, addSubstractIdentity}
  }

}
module.exports = {remarkable_identity};