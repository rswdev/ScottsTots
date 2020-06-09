const Finding = require('./finding')

class Person{
    constructor(name,location){
        this.name = name
        this.location = location
        this.findings = []
    }

    find(cafe,location){
        const finding = new Finding(cafe,this,location)

        this.findings.push(finding)

        return finding
    }
}

module.exports = Person