const coord = userCoords => {return !Number.isNaN(userCoords) || userCoords === true}

const lat = userLat =>
    { return coord(userLat) || (userLat <= 90 && userLat >= -90) }

module.exports.lat = lat

const lng = userLng =>
    { return coord(userLng) || (userLng <= 180 && userLng >= -180) }

module.exports.lng = lng

const date = userDate =>
    { return userDate instanceof Date && !isNaN(userDate.valueOf()) }

module.exports.date = date

const time = time => { 
    return time instanceof Object && 
        time.hours && time.minutes && time.seconds
}

module.exports.time = time