const Clock = require('./clock')
const Entries = require('./entries')

class Coordinator {
    constructor() {
        self.clock = new Clock()

        self.entries = new Entries()
    }
}

module.exports = Coordinator