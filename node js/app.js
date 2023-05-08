const {mutiplication_table} = require('./multiplication')
const {pythagoras_theorem} = require('./pythagoras_theorem')
const {remarkable_identity} = require('./remarkable_identity')

console.clear()
try {
  //mutiplication_table.main();
  //pythagoras_theorem.main();
  remarkable_identity.main()
}
catch (error) { console.error(error) }
