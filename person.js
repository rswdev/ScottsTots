const Finding = require('./finding')

class Person{
    constructor(name,location){
        this.name = name
        this.location = location
        this.findings = []
    }

    find(cafe){
        const finding = new Finding(this,cafe)

        this.findings.push(finding)

        return finding
    }
}

module.exports = Person
