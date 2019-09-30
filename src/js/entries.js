
const entryVaidator = require('./helpers/entry-validators')

class Entries {
    constructor(coordinator) {
        this.all = []

        console.log(localStorage.entries)
        if (localStorage.entries) {
            try {
                let pastEntries = JSON.parse(localStorage.entries)
                this.all = pastEntries ? pastEntries : this.all
            }
            catch (e) { }//delete localStorage.entries }
        }

        this.coordinator = coordinator

        this.fieldValidation = {
            "lat": entryVaidator.lat,
            "lng": entryVaidator.lng,
            "starting": entryVaidator.date,
            "starting": entryVaidator.date,
            "elapsed": entryVaidator.time
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
    
                else {allValid = false; console.log(field)}
            })
    
            if (allValid) {
                console.log('cool')
                this.all.push(newEntry)
                localStorage.setItem('entries', JSON.stringify(this.all))
            }
        }
        return allValid
    }  
}

module.exports = Entries
