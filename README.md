# jsx-site

Building a web app (restaurant) to get experience with some new tools.<br>
Uses:<br>
Hyper<br>
Webpack<br>
Gulp<br>
SASS<br>

## Startup

Download or clone the repository.<br>
`npm install`
`npm run watch`

Recommend using Node 8.4.0 if there are issues.

## May 29

Not done yet. Webpack is spitting out some errors and I still plan to add features on the front end and a few tricks. <br>
Security issue in Axios was flagged today. <br>

There are inconsistencies in formatting (single vs double quotes and semicolons). Been fiddling with Linter, hopefully not a breaking issue.

## May 30

Added some fake data to the globalState file which then populates the location and Reviews, SeasonalMenu and QuoteGenerator components.<br>
The way this works:<br>
-Each component has has a variable assigned to it containing the data bites you might need in objects or arrays of objects.<br>
-Keys match up with JS object inside a div. Ex: {this.state.someID}<br>
-Load actions for the arrows (called down from Hyperapp) and use JS logic so that they work properly.<br>
-This needs to be debugged before it is ready.

## May 31

Almost done. Few more things to clean up.
