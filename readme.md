# Higginbotham's Race Timer
##### Click Time Intern Tech Challenge

This is a Javascript app built with Webpack that records times
and coordinates for Professor Higginbotham's "Race Around the World". 

#### Notes
- Time is recorded on a 24 hour clock for maximum utility.
- Clear history does not reset any running timer

#### Tech
- Development
- - [Install NPM if you haven't already](https://www.npmjs.com/get-npm)
- - `npm i` from repository root
- - `npm run srv` - host a dev server on port 9000
- - `npm run build` - output app to ./dist
- Javascript
- - *function colection* :: helpers/entry-validator: collection of entry validation functions
- - *function colection* :: helpers/new-entry: Contains geolocator & entry DOM injection
- - *class* :: clock: handles UI updates & time/date tracking + formatting
- - *class* :: entries: validates & stores entries
- - *class* :: coordinator: organizes classes & functions, connects buttons
 - SASS
 - - Styles are seperated by purpose then placed caled in index.scss
 - - All shared colors, fonts, and base classes are in "assets.scss" ue to small project size

#### To-Do (hypothetical)
 - Better staggered SCSS loading
 - Re-arrange timer area for correct cursor transitions
 - Time Zones/Location
 - - Record start & stop locations
 - - Display time zone differences
 - - Associate times/elapsed distances for analysis of regional travel conditions


