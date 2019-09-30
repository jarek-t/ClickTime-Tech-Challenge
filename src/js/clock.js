class Clock {
    constructor() {
        // both used to calculate elapsed time & record entries
        this.currentTimeInfo
        this.startingTimeInfo

        // check localStorage for pre-existing timer
        if (localStorage.startingTime) {
            // try to parse existing starting time
            let date = new Date(Number.parseInt(localStorage.startingTime))
            
            // either set the time or delete the erroneous time
            if (date instanceof Date) 
                this.startingTimeInfo = date
            else delete localStorage.startingTime
        }
        
        // used to control the time on each of the three clock displays
        this.displaySlots = {
            'starting': {
                'hours': document.getElementById('starting-hours'),
                'minutes': document.getElementById('starting-minutes'),
                'seconds': document.getElementById('starting-seconds')
            },
            'current': {
                'hours': document.getElementById('current-hours'),
                'minutes': document.getElementById('current-minutes'),
                'seconds': document.getElementById('current-seconds')
            },
            'elapsed': {
                'hours': document.getElementById('elapsed-hours'),
                'minutes': document.getElementById('elapsed-minutes'),
                'seconds': document.getElementById('elapsed-seconds')
            },
        }
        
        // establish null time template
        this.nullTime = {'hours': '--', 'minutes': '--', 'seconds': '--'}
        // recursively start the clocks
        this.updateDisplay()
    }

    // updates the current time objects, return pre-formatted data
    get currentTime() { 
        this.currentTimeInfo = new Date()
        return this.formattedTime(this.currentTimeInfo) 
    }

    // returns pre-formatted starting time info or undefined
    get startingTime() 
        { return this.startingTimeInfo ? this.formattedTime(this.startingTimeInfo) : undefined }   

    // formats time info
    formattedTime(time) {
        console.log(time)
        let timeInfo = {
            'seconds': time.getSeconds(),
            'minutes': time.getMinutes(),
            'hours': time.getHours()
        }

        Object.keys(timeInfo).forEach(t => {
            let formatted = timeInfo[t].toString()

            formatted = formatted.length == 2 ? 
                formatted : ("0" + formatted)

            timeInfo[t] = formatted
        })

        return timeInfo
    }

    // returns undefined or calculates elapsed time
    get elapsedTime() {
        if (!this.startingTimeInfo || !this.startingTimeInfo.getTime) 
            return undefined

        // elapsed time in seconds
        let elapsed = (this.currentTimeInfo.getTime() - this.startingTimeInfo.getTime())/1000
        
        // hours with parseInt for rounding
        let hours = Number.parseInt(elapsed/3600)

        // et populated by functions for compatibility with time objects
        let et = {
            getHours: () => hours,
            // minutes via calculation with hours
            getMinutes: () => Number.parseInt(Number.parseInt(
                (elapsed - (hours * 3600)) / 60 )),
            // seconds via a remainder from elapsed
            getSeconds: () => Number.parseInt(elapsed % 60)
        }

        return this.formattedTime(et)
    }

    // return the timezone as "UTC (-||+) $T"
    get timezone() {
        if (!localStorage.startingTime) return undefined

        let offset = this.startingTimeInfo.getTimezoneOffset()

        offset = 0 - offset == 0 - -offset ? '+ ' : '- ' + offset  

        return 'UTC ' + offset
    }


    // update all three DOM clocks (recursive)
    updateDisplay() {
        let times = {
            'starting': this.startingTime,
            'current': this.currentTime,
            'elapsed': this.elapsedTime
        }
        
        // update clocks' headings' spans with the null time or the relevant time
        Object.keys(times).forEach(t => {
            if (times[t] === undefined) times[t] = this.nullTime

            let targetTime = this.displaySlots[t]

            Object.keys(targetTime).forEach(
                ts => targetTime[ts].innerHTML = times[t][ts] )
        }) 

        setTimeout(() => this.updateDisplay(), 1000)
    }

    // start timer by if one isn't runninng
    start() {
        if (!this.startingTimeInfo) {
            // Clocks will update on next second
            this.startingTimeInfo = new Date()

            localStorage.setItem("startingTime", this.currentTimeInfo.valueOf())
        }
    }

    // stops timer if one is running
    stop() {
        let meta

        if (this.startingTimeInfo) {
            //compose record (starting & ending times are Date prototypes)
            meta = {
                'starting': this.startingTimeInfo,
                'ending': this.currentTimeInfo,
                'elapsed': this.elapsedTime
            }

            // reset timer values
            delete localStorage.startingTime
            delete this.startingTimeInfo
        }

        return meta
    }
}

module.exports = Clock