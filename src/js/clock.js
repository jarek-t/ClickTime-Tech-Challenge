class Clock {
    constructor(coordinator) {
        this.coordinator = coordinator
        
        this.startingTimeInfo

        if (localStorage.startingTime) {
            let date = new Date(Number.parseInt(localStorage.startingTime))
            
            if (date instanceof Date) 
                this.startingTimeInfo = date
            else delete localStorage.startingTime
        }
        
        this.currentTimeInfo = new Date()

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

        this.nullTime = {'hours': '--', 'minutes': '--', 'seconds': '--'}

        this.updateDisplay()
    }

    get currentTime() { 
        this.currentTimeInfo = new Date()
        return this.formattedTime(this.currentTimeInfo) 
    }

    get startingTime() 
        { return this.startingTimeInfo ? this.formattedTime(this.startingTimeInfo) : undefined }   

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

    get elapsedTime() {
        if (!this.startingTimeInfo || !this.startingTimeInfo.getTime) 
            return undefined

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

            et[t] = elapsed.length >= 2 ? elapsed : "0" + elapsed
        })
        
        return et
    }

    get timezone() {
        if (!localStorage.startingTime) return undefined

        let offset = this.startingTimeInfo.getTimezoneOffset()

        offset = 0 - offset == 0 - -offset ? '+ ' : '- ' + offset  

        return 'UTC ' + offset
    }

    updateDisplay() {
        let times = {
            'starting': this.startingTime,
            'current': this.currentTime,
            'elapsed': this.elapsedTime
        }
        
        Object.keys(times).forEach(t => {
            if (!times[t]) times[t] = this.nullTime

            let targetTime = this.displaySlots[t]

            Object.keys(targetTime).forEach(
                ts => targetTime[ts].innerHTML = times[t][ts] )
        })        

        setTimeout(() => this.updateDisplay(), 1000)
    }

    start() {
        this.startingTimeInfo = new Date()
        localStorage.setItem("startingTime", this.currentTimeInfo.valueOf())
    }

    stop() {
        let meta

        if (this.startingTimeInfo) {
            meta = {
                'starting': this.startingTimeInfo,
                'ending': this.currentTimeInfo,
                'elapsed': this.elapsedTime
            }

            this.pastElapses.push(meta)
            delete localStorage.startingTime
            delete this.startingTimeInfo
        }

        return meta
    }
}

module.exports = Clock