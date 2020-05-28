 //first get the users location. this is done using HTML's geolocation api
                //first check if geoloaction is supported
                //if so, get the user's location using getCurrentPosition method,
                //getCurrentPosition returns a json object to the function specified in the parameter
                //in this case it will pass the json object to myFunction
                function getLocation() {
                    if (navigator.geolocation) {       
                        navigator.geolocation.getCurrentPosition(myFunction);      
                    } else {
                        alert("Geolocation is not supported by your browser")
                    }
                }
    
                //myfunction gets the longitude and latitude from the position object passed into it
                //then it attaches the longitude and latitude to the baseurl to create the query url
                //the query url is then passed into our fetch function and gets outputed as a json object
                function myFunction(position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
    
                    console.log(position);
                    console.log(latitude);
                    console.log(longitude);
    
                    const baseUrl = 'https://api.openchargemap.io/v3/poi/?output=json&countrycode=US&maxresults=10&includecomments=true';
                    const queryUrl = baseUrl + '&longitude=' + longitude + '&latitude=' + latitude;
                    console.log(queryUrl);
                    fetch(queryUrl)
                        .then((resp) => resp.json())
                        .then((data) => createEement(data))
                }
                //getting the data from the json data object. using a foor loop to get data
                //from each of the locations in the object. Then putting that information inside a div
                //then appending that div to the page to display the results.  
                function createEement(data) {
                    console.log(data);
                    let x = 0;
                    for (x = 0; x < data.length; x++) {
                        const address = data[x].AddressInfo.AddressLine1;
                        const town = data[x].AddressInfo.Town;
                        const state = data[x].AddressInfo.StateOrProvince;
                        const zipCode = data[x].AddressInfo.Postcode;
                        const phoneNumber = data[x].AddressInfo.ContactTelephone1;
                        const relatedURL = data[x].AddressInfo.RelatedURL;
                        
                        const resultsDiv = document.getElementById("results_div");
                        let div = document.createElement("div");
        
                        if (resultsDiv) {
                            console.log('resultsDiv');
                        }
                        div.innerHTML = `${address} <br> ${town}, ${state} ${zipCode} 
                                            <br> ${phoneNumber} <br>`;

                        div.classList.add("col-md-3");  
                        div.classList.add("top-buffer");    
                        
                        let button = document.createElement("button");

                        button.classList.add("btn");
                        button.classList.add("btn-info");
                        button.innerHTML = "Visit Website";
                        div.appendChild(button);
        
                        resultsDiv.appendChild(div);
                    }
                    
                }