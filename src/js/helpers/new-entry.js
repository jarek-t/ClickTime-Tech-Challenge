let data = (source, coordinator) => {
    if (!source instanceof Object) return undefined

    // let destination = coordinator.entries
    source.userLat = true
    source.userLng = true
    
    if (navigator.geolocation) {
        
        let success = loc => {
            source.userLat = loc.coords.latitude
            source.userLng = loc.coords.longitude

            coordinator.newEntry(source)
        }
    
        let fail = () => { 
            window.alert("Couldn't access your location to complete the entry") 

            coordinator.newEntry(source)
        }
        
        pos = navigator.geolocation.getCurrentPosition(success, fail)
    }
    else coordinator.newEntry(source)

    return source
}

module.exports.data = data

let toText = (source, joinWith) => {
    source.forEach(s => {
        s = s.toString()
        s = s.length > 1 ? s : "0" + s
    })

    return source.join(joinWith)
}

let dateToText = date => {
    if (!date || !date instanceof Date) return undefined

    dateMembers = [
        date.getMonth(),
        date.getDate(),
        date.getFullYear().toString().substr(-2)
    ]

    timeMembers = [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
    ]

    return toText(dateMembers,"/") + " - " + toText(timeMembers,":")
}

let coordsToDisplay = source => {
    if (!source || !source instanceof Object) return undefined
    
    let coords = document.createElement('h1')
    
    if (Number.isFinite(source.userLat) && Number.isFinite(source.userLng)) {
        let link = document.createElement('a')
        
        link.href = 'https://google.com/maps/place/'+source.userLat+','+source.userLng
        link.target = '_blank'
        
        link.innerHTML = source.userLat.toPrecision(7) + ', ' + source.userLng.toPrecision(7)
        coords.appendChild(link)
    }
    else coords.innerHTML = 'No Data'

    return coords.innerHTML
}

let dom = source => {
    if (!source instanceof Object) return undefined

    let entry = document.createElement('li')
    entry.class = 'time-entry'

    let temp = document.createElement('h5')
    temp.innerHTML = toText(Object.values(source.elapsed), ":")
    entry.appendChild(temp)

    temp = document.createElement('h5')
    temp.innerHTML = dateToText(source.starting)
    entry.appendChild(temp)

    temp = document.createElement('h5')
    temp.innerHTML = dateToText(source.ending)
    entry.appendChild(temp)

    temp = document.createElement('h5')
    temp.innerHTML = coordsToDisplay(source)
    entry.appendChild(temp)

    return entry
}

module.exports.dom = dom