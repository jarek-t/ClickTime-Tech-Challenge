const Clock = require('./clock')
const Entries = require('./entries')

class Coordinator {
    constructor() {
        this.clock = new Clock()

        this.entries = new Entries()
    }
}

module.exports = Coordinator