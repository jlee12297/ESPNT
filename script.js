var searchFirstName
var searchLastName


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

    //api site uses this format to fetch player's stats using their NBA ID, which I have saved using the previous API above
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4cb18c9db1msh437e8bcf466e2e6p142b43jsn9e402af4b51d',
        'X-RapidAPI-Host': 'nba-stats4.p.rapidapi.com'
      }
    };

   
   fetch('https://nba-stats4.p.rapidapi.com/per_game_career_regular_season/' + playerID + '', options)
      .then(function(response){
        console.log(response)
        return response.json();
      })   
   // .then(response => response.json())
      .then(function (data) {
        console.log(data);
        var ppg = data.pts_per_game;
        var apg = data.ast_per_game;
        var rpg = data.reb_per_game;
        var orpg = data.oreb_per_game;
        var drpg = data.dreb_per_game;

      })
      .catch(err => console.error(err));


  })

// search button prevent autorefresh
  return false;
})