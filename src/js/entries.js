
const entryValidator = require('./helpers/entry-validators')

class Entries {
    constructor(coordinator) {
        this.all = []

        if (localStorage.entries) {
            try { this.all = JSON.parse(localStorage.entries) }
            catch (e) { delete localStorage.entries }
        }
        this.all.forEach(e => {
            e.starting = new Date(e.starting)
            e.ending = new Date(e.ending)
        })

        this.coordinator = coordinator

        this.fieldValidation = {
            "userLat": entryValidator.lat,
            "userLng": entryValidator.lng,
            "starting": entryValidator.date,
            "ending": entryValidator.date,
            "elapsed": entryValidator.time
        }
    }

    newEntry(source) {
        let allValid = false

        if (source instanceof Object) {
            let newEntry = {}
            let allValid = true
    
            let allFields = Object.keys(this.fieldValidation)
    
            allFields.forEach(field => {
                if ( source[field]
                     && 
                    this.fieldValidation[field](source[field]) ) 
                
                { newEntry[field] = source[field] }
    
                else {allValid = false; console.log(field, source[field])}
            })
    
            if (allValid) {
                console.log('cool')
                this.all.push(newEntry)
                localStorage.setItem('entries', JSON.stringify(this.all))
            }
        }
        return allValid
    }

    reset() {
        this.all = []
        delete localStorage.entries
    }
}

module.exports = Entries
