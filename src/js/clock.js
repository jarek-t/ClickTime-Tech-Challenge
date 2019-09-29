class Clock {
    constructor() {
        this.displaySlots = {
            'hours': document.getElementById('hours'),
            'minutes': document.getElementById('minutes'),
            'seconds': document.getElementById('seconds'),
        }
        console.log(this.displaySlots)
        
        this.updateDisplay()
        setTimeout(() => this.updateDisplay(), 1000)
    }

    get time() {
        //epoch current time
        let ect = Date.now()

        //seconds since yesterday (86,400 seconds in one day)
        let ssy =
            ect - 86400 * Math.floor(ect/86400)

        //minutes since yesterday
        let msy = Math.floor(ssy/60)

        return {
            'seconds': ssy - 60 * msy,
            'minutes': Math.floor(msy - currentHours * 60),
            'hours': Math.floor(msy/60)
        }
    }

    updateDisplay() {
        let currentTime = this.time

        Object.keys(this.displaySlots).forEach(
            ds => this.displaySlots[ds].innerHtml = currentTime[ds] )
    }
}

module.exports = Clock