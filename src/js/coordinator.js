// Class :: Updates UI, handles time tracking & date structuring
const Clock = require('./clock')
// Class :: Validates and stores recorded times
const Entries = require('./entries')
// Function Collection :: Contains geolocator & entry DOM injection
const entryMaker = require('./helpers/new-entry')

class Coordinator {
    constructor() {
        // Unordered list of entries' list items
        this.historyTable = document.getElementById('history-table')

        this.clock = new Clock(this)
        this.entries = new Entries(this)

        // Starts the timer
        document.getElementById('start-timer').addEventListener('click',
            () => this.clock.start() )

        // Stops the timer
        document.getElementById('stop-timer').addEventListener('click', () => {
            let entrySource = this.clock.stop()
            entryMaker.data(entrySource, this)
        })

        // Resets history, any current time is perserved
        document.getElementById('history-reset-button')
            .addEventListener('click', () => this.reset())

        // Attaches all saved entries to the DOM
        this.entries.all.forEach(
            e => this.historyTable.appendChild(entryMaker.dom(e)) )
    }

    // Submits an entry for validation, adds it to the DOM
    // (should be further developed for security)
    newEntry(source) {
        this.entries.newEntry(source)
        this.historyTable.appendChild(entryMaker.dom(source))
    }

    // Resets entries & clears their DOM elements
    reset() {
        this.entries.reset()

        let historyHeader = document.getElementById('history-headers')
        this.historyTable.removeChild(historyHeader)

        this.historyTable.innerHTML = ''
        this.historyTable.appendChild(historyHeader)
    }
}

module.exports = Coordinator