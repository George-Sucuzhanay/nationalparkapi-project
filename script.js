
// For purposes of practicing installing node and having a dotenv file for the apikey and url
// would be best for security purposes

// fetch (url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data.activities);
//     console.log(data.topics);

//     $('#sunrise').text(data.results.sunrise);
//     $('#sunset').text(data.results.sunset);
// });
document.addEventListener('DOMContentLoaded', () => {
  console.log('Page Loaded')
})

let button = document.getElementById("myBtn")


button.onclick = () => {
  console.log('button pressedww')
  fetch("https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=Xl9ulMh0BRyo7Q7dX2vUBdl5uadPjptgOHpnKRL5")
  .then(response => response.json())
  .then(data => {
    //console.log(data);

    // For each Pokemon in the list
    console.log(data.activities.name)
    for (let acts of data.activities.name) {
      //Create a div with the class .pokemon and append it to the #pokelist
      console.log(data.activities.name);
      $('#actlist').append(`<div class="col-4 pokemon">${acts.activities.name}</div>`);
      
    }
});

}
