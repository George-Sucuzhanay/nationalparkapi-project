// For purposes of practicing installing node and having a dotenv file for the apikey and url
// would be best for security purposes

let button = document.getElementById("myBtn").addEventListener('click', getText)

function getText () {
  fetch("https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=YOUR_API_KEY")
    .then(response => {
      return (response.json())
    })
    .then(data => {
      console.log(data.data[0].activities)
      for(let i = 0; i < data.data[0].activities.length; i++){
        for(let j= 0; i< data.data[0].activities.length; i++){
          console.log(data.data[0].activities[j].name)
          $('#actlist').append(`<div class="col-4 actlist">${data.data[0].activities[i].name}</div>`);
        }
      }
    })
    //   for (let cards of data.data[0].activities) {
    //    Create a div with the class .pokemon and append it to the #pokelist
    //     console.log(cards.name);
    //     $('actlist').append(`<div class="col-4 cards">${cards.name}</div>`);
        
    //   }
    // })
    .then(error => {
      console.log(error)
    })
      // for (let acts of data.activities.name) {
        //Create a div with the class .pokemon and append it to the #pokelist
      //   console.log(data.activities.name[1]);
      //   $('#actlist').append(`<div class="col-4 pokemon">${acts.activities.name[1]}</div>`);
        
      // }
}

getText()

  
