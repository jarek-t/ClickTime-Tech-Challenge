let data = (source, destination) => {
    if (!source instanceof Object) return undefined
    if (!navigator.geolocation) return false

    let success = loc => {
        source.userLat = loc.coords.latitude
        source.userLng = loc.coords.longitude

        console.log(source)
        destination.newEntry(source)
    }

    let fail = () => 
        { window.alert("Sorry, we couldn't access your location to complete the entry") }
    
    pos = navigator.geolocation.getCurrentPosition(success, fail)
}

module.exports.data = data

let dom = source => {
    if (!source instanceof Object) return undefined

    let entry = document.createElement('li')
    entry.class = 'time-entry'

    return entry
}

module.exports.dom = dom