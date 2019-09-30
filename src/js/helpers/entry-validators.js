// Confirms a coordinate is potentially valid or unavailable
const coord = userCoords => 
    !Number.isNaN(userCoords) || userCoords === false

// Confirms a latitude is unavailable or valid
const lat = userLat =>
    coord(userLat) || (userLat <= 90 && userLat >= -90)

module.exports.lat = lat

// Confirms a longitude is unavailable or valid
const lng = userLng =>
    coord(userLng) || (userLng <= 180 && userLng >= -180)

module.exports.lng = lng

// Confirms a valid date
const date = userDate =>
    userDate instanceof Date && !isNaN(userDate.valueOf())

module.exports.date = date

// Confirms a valid time
const time = time => time instanceof Object

module.exports.time = time