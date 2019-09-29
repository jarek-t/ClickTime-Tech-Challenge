const coord = userCoord => {
    return typeof userLat === "number" &&

        !isNaN(userCoord) &&

        !Number.isInteger(userLat) ? true : false
}

module.exports.coord = coord

const lat = userLat =>
    { return coord(userlat) && (userLat <= 90 || userLat >= -90) }

module.exports.lat = lat

const lng = userLng =>
    { return coord(userLng) && (userLng <= 180 || userLng >= -180) }


module.exports.lng = lng

const date = userDate =>
    { return userDate instanceof Date && !isNaN(userDate.valueOf()) }

module.exports.date = date

const time = time => { 
    return time instanceof Object && 
        time.hours && time.minutes && time.seconds
}

module.exports.time = time