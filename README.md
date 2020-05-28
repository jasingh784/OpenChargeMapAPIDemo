# OpenChargeMapAPIDemo
Simple Demo page using Open Charge map api to find nearest EV charging locations

This is a simple project using the Open Charge map api, found here https://openchargemap.org/site/develop/api. Clicking on the "Find EV Charge Stations" Button will make a call to the api and return the 10 nearest Electric Vehicle(EV) charging stations. 

The api uses the users current location to find nearest charging stations. It does this with geo location API. More information on Geolocation API can be found here https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API. Geolocation api returns an json object containing the users location. I extract the longitude and latitude from this object and attach them to the query url. 

The api call is made using promises and the fetch method. More information on fetch() can be found here https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch. This returns a json object with 10 of the nearest charging stations. Currently I have not added any error checking on the api call. If the api call does not return a good result the script crashes. 

I then extract the data from the json object and using DOM to make html elements to display the data on the page. 

I used bootstrap to do some very simple stying on the page. 
