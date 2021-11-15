
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

let button = document.getElementById("myBtn").addEventListener('click', getText)

function getText () {
  fetch("https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=Xl9ulMh0BRyo7Q7dX2vUBdl5uadPjptgOHpnKRL5")
    .then(response => {
      return (response.json())
    })
    .then(data => {
      console.log(data.data[0].activities)
    })
    //   for (let cards of data.data[0].activities) {
    //     //Create a div with the class .pokemon and append it to the #pokelist
    //     console.log(cards.name);
    //     $('actlist').append(`<div class="col-4 cards">${cards.name}</div>`);
        
    //   }
    // })
    .then(error => {
      console.log(error)
    })
  //     // for (let acts of data.activities.name) {
  //     //   //Create a div with the class .pokemon and append it to the #pokelist
  //     //   console.log(data.activities.name[1]);
  //     //   $('#actlist').append(`<div class="col-4 pokemon">${acts.activities.name[1]}</div>`);
        
  //     // }
}

getText()

  