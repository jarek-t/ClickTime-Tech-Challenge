class Clock {
    constructor() {
        this.startingTimeInfo = false

        this.currentTimeInfo = this.startingTime

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
        
        this.updateDisplay()
    }

    get currentTime() {
        this.currentTimeInfo = new Date()
        
        
        let timeInfo = {
            'seconds': this.currentTimeInfo.getSeconds(),
            'minutes': this.currentTimeInfo.getMinutes(),
            'hours': this.currentTimeInfo.getHours()
        }

        Object.keys(timeInfo).forEach(t => {
            let formatted = timeInfo[t].toString()

            formatted = formatted.length == 2 ? 
                formatted : ("0" + formatted)

            timeInfo[t] = formatted
        })

        return timeInfo
    }

    get startingTime() {
        return this.startingTimeInfo ? 
            this.formattedTime(this.startingTimeInfo) : this.nullTime
    }

    formattedTime(time) {
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

    get elaspedTime() {
        if (!this.startingTimeInfo) return this.nullTime

        let et = {}

        let ct = this.currentTime
        let st = this.startingTime
        
        Object.keys(ct).forEach(t => {
            let elapsed = (Number.parseInt(ct[t]) - Number.parseInt(st[t])).toString()
            et[t] = elapsed.length == 2 ? elapsed : "0" + elapsed
        })

        return et
    }

    get timezone() {
        let offset = this.startingTimeInfo.getTimezoneOffset()

        offset = 0 - offset == 0 - -offset ? '+ ' : '- ' + offset  

        return 'UTC ' + offset
    }

    get nullTime() 
        { return {'hours': '--', 'minutes': '--', 'seconds': '--'} }

    updateDisplay() {
        let times = {
            'starting': this.startingTime,
            'current': this.currentTime,
            'elapsed': this.elaspedTime
        }
        

        Object.keys(times).forEach(t => {
            let targetTime = this.displaySlots[t]

            Object.keys(targetTime).forEach(
                ts => targetTime[ts].innerHTML = times[t][ts] )
        })        

        setTimeout(() => this.updateDisplay(), 1000)
    }
}

module.exports = Clock