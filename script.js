
let url = "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=Xl9ulMh0BRyo7Q7dX2vUBdl5uadPjptgOHpnKRL5"

// For purposes of practicing installing node and having a dotenv file for the apikey and url
// would be best for security purposes

fetch (url)
  .then(response => response.json())
  .then(data => {
    console.log(data.activities);
    console.log(data.topics);

    $('#sunrise').text(data.results.sunrise);
    $('#sunset').text(data.results.sunset);
});