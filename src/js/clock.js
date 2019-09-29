class Clock {
    constructor() {
        this.startingTimeInfo = new Date()
        this.currentTimeInfo = this.startingTime

        this.displaySlots = {
            'hours': document.getElementById('hours'),
            'minutes': document.getElementById('minutes'),
            'seconds': document.getElementById('seconds'),
        }
        
        this.updateDisplay()
        
    }

    get time() {
        this.currentTimeInfo = new Date()
        
        return {
            'seconds': this.currentTimeInfo.getSeconds(),
            'minutes': this.currentTimeInfo.getMinutes(),
            'hours': this.currentTimeInfo.getHours()
        }
    }

    updateDisplay() {
        let currentTime = this.time
        
        Object.keys(this.displaySlots).forEach(
            ds => this.displaySlots[ds].innerHTML = currentTime[ds] )

        setTimeout(() => this.updateDisplay(), 1000)
    }
}

module.exports = Clock