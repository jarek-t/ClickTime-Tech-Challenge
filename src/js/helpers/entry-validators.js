const lat = userLat =>
    { return !Number.isNaN(userLat) && (userLat <= 90 && userLat >= -90) }

module.exports.lat = lat

const lng = userLng =>
    { return !Number.isNaN(userLng) && (userLng <= 180 && userLng >= -180) }

module.exports.lng = lng

const date = userDate =>
    { return userDate instanceof Date && !isNaN(userDate.valueOf()) }

module.exports.date = date

const time = time => { 
    return time instanceof Object && 
        time.hours && time.minutes && time.seconds
}

module.exports.time = time