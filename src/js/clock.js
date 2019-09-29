class Clock {
    constructor() {
        self.displaySlots = {
            'hours': document.getElementById('hours'),
            'minutes': document.getElementById('minutes'),
            'seconds': document.getElementById('seconds'),
        }
        
        setTimeout(() => self.updateDisplay(), 1000)
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
        let currentTime = self.time

        Object.keys(self.displaySlots).forEach(
            ds => self.displaySlots[ds].innerHtml = currentTime[ds] )
    }
}