// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
    
        let pickedPlanet = pickPlanet(listedPlanets);

        // params for addDesitnation document, name, diameter, star, distance, moons, imageUrl
        addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
    });

    let form = document.querySelector('form')
    form.addEventListener("submit", function (event) {


        const pilotName = document.querySelector('input[name=pilotName]').value;
        const copilotName = document.querySelector('input[name=copilotName]').value;
        const fuelLevel = document.querySelector('input[name=fuelLevel]').value;
        const cargoMass = document.querySelector('input[name=cargoMass]').value;
        const list = document.getElementById('faultyItems');
        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
        event.preventDefault()
    })

});