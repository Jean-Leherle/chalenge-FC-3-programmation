const {mutiplication_table} = require('./multiplication')
const {pythagoras_theorem} = require('./pythagoras_theorem')

console.clear()
try {
  //mutiplication_table.main();
  pythagoras_theorem.main();
}
catch (error) { console.error(error) }
