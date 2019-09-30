
const entryValidator = require('./helpers/entry-validators')

class Entries {
    constructor() {
        // mutable storage of all entries
        this.all = []

        // read entries or delete unparsable data
        if (localStorage.entries) {
            try { this.all = JSON.parse(localStorage.entries) }
            catch (e) { delete localStorage.entries }
        }

        // restore dates to their Date prototype
        this.all.forEach(e => {
            e.starting = new Date(e.starting)
            e.ending = new Date(e.ending)
        })

        // index of entry component validators
        this.fieldValidation = {
            "userLat": entryValidator.lat,
            "userLng": entryValidator.lng,
            "starting": entryValidator.date,
            "ending": entryValidator.date,
            "elapsed": entryValidator.time
        }
    }

    // validate all fields for a potential new entry or ignore it
    newEntry(source) {
        let allValid = false

        if (source instanceof Object) {
            let newEntry = {}
            let allValid = true
            
            // check field validity with our member function index
            Object.keys(this.fieldValidation).forEach(field => {
                if ( source[field]
                     && 
                    this.fieldValidation[field](source[field]) ) 
                
                newEntry[field] = source[field]
    
                else allValid = false
            })
            
            // update mutable & persistent storage with any valid entry
            if (allValid) {
                this.all.push(newEntry)
                localStorage.setItem('entries', JSON.stringify(this.all))
            }
        }
        return allValid
    }

    // reset entry history
    reset() {
        this.all = []
        delete localStorage.entries
    }
}

module.exports = Entries
