const Clock = require('./clock')
const Entries = require('./entries')
const entryMaker = require('./helpers/new-entry')

class Coordinator {
    constructor() {
        this.clock = new Clock(this)
        this.entries = new Entries(this)

        document.getElementById('start-timer').addEventListener('click',
            () => this.clock.start() )

        document.getElementById('stop-timer').addEventListener('click', () => {
            let entrySource = this.clock.stop()
            entryMaker.data(entrySource, this.entries)
            
            let dom = entryMaker.dom(entrySource)
        })
    }

    newEntry() {
        let entry = {}
        let elapsed = clock.stop()

        if (elapsed) {

        }
    }


}

module.exports = Coordinator