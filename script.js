var searchFirstName
var searchLastName

//fetching from NBA API
/*
nbaUrl = ' https://www.balldontlie.io/api/v1/season_averages?season=2018&players';

fetch(nbaUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
  })
  */

var searchButton = $('#searchButton');
searchButton.on('click', function() {

    userNameInput = $('input[id="userInput"]').val();
    searchName = [];
    searchName = userNameInput.split(' ');
    console.log("Player First Name: " + searchName[0]);
    console.log("Player Last Name: " + searchName[1]);
    searchFirstName = searchName[0];
    searchLastName = searchName[1];

playerUrl = 'https://data.nba.net/data/10s/prod/v1/2020/players.json';

fetch(playerUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.league.standard)
    console.log(data.league.standard[0].firstName)

    for (i = 0; i < data.league.standard.length; i++) {
        var firstName = data.league.standard[i].firstName
        var lastName = data.league.standard[i].lastName
        if (searchFirstName === firstName && searchLastName === lastName) {
            console.log(firstName + " " + lastName)
        }
    }

  })


  return false;
})