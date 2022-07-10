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

//user input searches for player, split input into first name and last name values for searching
var searchButton = $('#searchButton');
searchButton.on('click', function() {

    userNameInput = $('input[id="userInput"]').val();
    searchName = [];
    searchName = userNameInput.split(' ');
    console.log("Player First Name: " + searchName[0]);
    console.log("Player Last Name: " + searchName[1]);
    searchFirstName = searchName[0];
    searchLastName = searchName[1];
    

// api to fetch user input to match player name, fetch playerID for getting portrait
playerUrl = 'https://data.nba.net/data/10s/prod/v1/2020/players.json';

fetch(playerUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.league.standard)
    console.log(data.league.standard[0].firstName)

    //match user search to player name in API, get desired info
    for (i = 0; i < data.league.standard.length; i++) {
        var firstName = data.league.standard[i].firstName
        var lastName = data.league.standard[i].lastName
        if (searchFirstName.toUpperCase() === firstName.toUpperCase() && searchLastName.toUpperCase() === lastName.toUpperCase()) {
            console.log(firstName + " " + lastName)
            playerID = data.league.standard[i].personId
            console.log(playerID)
            //display player headshot
            playerHeadshot = document.getElementById("playerHeadshot")
            src = 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/' + playerID + '.png'
            playerHeadshot.src = src

        }
    }

  })


  return false;
})