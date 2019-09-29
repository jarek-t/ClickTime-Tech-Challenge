class Clock {
    constructor() {
        this.startingTimeInfo

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
        
        this.pastElapses = []

        document.getElementById('stop-timer').addEventListener('click',
            () => this.stop() )

        document.getElementById('start-timer').addEventListener('click',
            () => this.start() )

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

        let elapsed = (this.currentTimeInfo.getTime() - this.startingTimeInfo.getTime())/1000
        
        let hours = Number.parseInt(elapsed/3600)
        let et = {
            'hours': hours,
            'minutes': Number.parseInt(Number.parseInt(
                (elapsed - (hours * 3600)) / 60 )),
            'seconds': Number.parseInt(elapsed % 60)
        }
        
        Object.keys(et).forEach(t => {
            elapsed = et[t].toString()

            console.log(elapsed.length)
            et[t] = elapsed.length >= 2 ? elapsed : "0" + elapsed
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

    start() {
        if (!this.startingTimeInfo)
            this.startingTimeInfo = new Date() 
    }

    stop() {
        let meta

        if (this.startingTimeInfo) {
            meta = {
                'starting': this.startingTimeInfo,
                'current': this.currentTimeInfo,
                'elapsed': this.elapsedTime
            }
            this.pastElapses.push(meta)

            this.startingTimeInfo = undefined
        }

        return meta
    }
}

module.exports = Clock