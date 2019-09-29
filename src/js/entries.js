const entryVaidator = require('./helpers/entry-validators')

class Entries {
    constructor() {
        if (!localStorage.entries) localStorage.entries = {}

        self.fieldValidation = {
            "lat": entryVaidator.lat,
            "lng": entryVaidator.lng,
            "dateInfo": entryVaidator.date
        }
    }

    get entries()
        { return localStorage.entries }

    set entries(e)
        { localStorage.entries = {} }

    newEntry(source) {
        let allValid = false

        if (source instanceof Object) {
            let newEntry = {}
            let allValid = true
    
            let allFields = Object.keys(self.fieldValidation)
    
            allFields.forEach(field => {
                if ( source[field]
                     && 
                    self.fieldValidation[field](source[field]) ) 
                
                { newEntry[field] = source[field] }
    
                else allValid = false
            })
    
            if (allValid)
                self.all.push(newEntry)
        }

        return allValid
    }  
}

module.exports = entries
