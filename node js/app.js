const { mutiplication_table } = require('./multiplication')
const { pythagoras_theorem } = require('./pythagoras_theorem')
const { remarkable_identity } = require('./remarkable_identity')
const { rl } = require('./rl')
const { overlay } = require('./overlay.js')

parameter = {
  menuLength: 40,
  margin: 10,
  name: "MATHBYPASS",
  version: "v.1.0.",
  famousQuote: "Ideas are bulletproof",
  app: [
    {
      title: "Table de multiplication",
      launcher: mutiplication_table.main
    },
    {
      title: "Théorème de Pythagore",
      launcher: pythagoras_theorem.main
    },
    {
      title: "Identité remarquable",
      launcher: remarkable_identity.main
    }
  ]
}

console.clear()

try {
  //overlay.center([parameter.name+' - '+parameter.version], parameter.menuLength,'cadre')

  overlay.center([
    parameter.name + ' - ' + parameter.version, parameter.famousQuote,],
    parameter.menuLength, 'cadre')
  const textArray = []
  for (let index in parameter.app) {
    const text = parseInt(index) + 1 + " > " + parameter.app[index].title
    textArray.push(text)
  }
  overlay.alignLeft(textArray, parameter.margin)
  quote()
}
//mutiplication_table.main();
//pythagoras_theorem.main();
//remarkable_identity.main()
catch (error) { console.error(error) }

async function quote() {
  let answer =  2//await rl.question('')
  parameter.app[answer - 1].launcher
}

