const colors = require ('colors')
const Person = require('./person')
const Cafe = require('./cafe')

const eren = new Person('Eren Mercan', 'Şişli')
const cafe = new Cafe('Petra Roasting Co', 'Beşiktaş')

eren.find(cafe, 'Bostanlı')
eren.find(cafe, 'Bayraklı')
eren.find(cafe, 'Alsancak')


function printFinding(finding){

console.log(`${colors.blue(finding.person.name)}(${colors.bgRed.white(finding.person.location)}) found ${colors.blue(finding.cafe.name)} in ${colors.bgRed.white(finding.cafe.location)} as the closest 'available' coffee shop.`)
}

function printFindingHistory(person){
person.findings.forEach(printFinding)
}
printFindingHistory(eren)




