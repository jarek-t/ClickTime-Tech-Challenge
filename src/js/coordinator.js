const Clock = require('./clock')
const Entries = require('./entries')
const entryMaker = require('./helpers/new-entry')

class Coordinator {
    constructor() {
        this.historyTable = document.getElementById('history-table')

        this.clock = new Clock(this)
        this.entries = new Entries(this)

        document.getElementById('start-timer').addEventListener('click',
            () => this.clock.start() )

        document.getElementById('stop-timer').addEventListener('click', () => this.newEntry())
    }

    newEntry() {
        let entrySource = this.clock.stop()
        entryMaker.data(entrySource, this.entries)
        
        // let dom = 

        this.historyTable.appendChild(entryMaker.dom(entrySource))
    }


}

module.exports = Coordinator