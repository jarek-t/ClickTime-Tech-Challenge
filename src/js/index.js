//outputs css to our dist folder
import '../scss/index.scss'
//copies assets to dist
require.context('./../../assets')

//handles interactions amongst program logic
const Coordinator = require('./coordinator')
const coordinator = new Coordinator()

//redirects users who can't meet client requirements 
if (!localStorage || !window.navigator.geolocation) {
    //could be implemented more gracefully
    window.alert("Please use a more modern browser for this app")
    window.location = "https://www.clicktime.com/"
}