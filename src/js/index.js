import '../scss/index.scss'
require.context('./../../assets')

const Coordinator = require('./coordinator')

const coordinator = new Coordinator()

if (localStorage) {
    console.log("We can continue")
}
else {
    console.log("This isn't going to work out")
}