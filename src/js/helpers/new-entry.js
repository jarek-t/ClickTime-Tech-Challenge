let data = (source, destination) => {
    if (!source instanceof Object) return undefined

    if (navigator.geolocation) {
        let success = loc => {
            source.userLat = loc.coords.latitude
            source.userLng = loc.coords.longitude
    
            console.log(source)
            destination.newEntry(source)
        }
    
        let fail = () => { 
            window.alert("Couldn't access your location to complete the entry") 
            destination.newEntry(source)
        }
        
        pos = navigator.geolocation.getCurrentPosition(success, fail)
    }
    else destination.newEntry(source)

    return source
}

module.exports.data = data

let dateToText = date => {
    if (!date || !date instanceof Date) return undefined
    let dateStr = ''
    
    dateStr += date.getMonth() + '/' + date.getDate() + '/' +
        date.getFullYear().toString().substr(-2)
    
    
    dateStr += ' ' + date.getHours() + ':' + date.getMinutes() + 
        ':' + date.getSeconds()

    return dateStr
}

let dom = source => {
    if (!source instanceof Object) return undefined

    console.log(source)
    let entry = document.createElement('li')
    entry.class = 'time-entry'

    let temp = document.createElement('h5')
    temp.innerHTML = dateToText(source.elapsed)
    entry.appendChild(temp)

    temp = document.createElement('h5')
    temp.innerHTML = dateToText(source.starting)
    entry.appendChild(temp)

    temp = document.createElement('h5')
    temp.innerHTML = dateToText(source.ending)
    entry.appendChild(temp)


    return entry
}

module.exports.dom = dom