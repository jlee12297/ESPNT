$("#myButton").click(function () {
    fetch(`https://api.sportsdata.io/v3/mma/scores/json/Fighters?key=2dd3dd371b814059ad24ceadacb22a06`)
        .then(response => response.json())
        .then(data => {
            var nameInput = $('#userInput').val()
            var searchName = nameInput.split(" ")
            var mmaFightersData = null
            for (i = 0; i < data.length; i++) {
                if (data[i].FirstName.toUpperCase() == searchName[0].toUpperCase() && data[i].LastName.toUpperCase() == searchName[1].toUpperCase()) {
                    mmaFightersData = data[i]
                    displaySearchResults(mmaFightersData)
                }
            }
        })
})

function displaySearchResults(data) {
    $('.carousel-slider').css('display', 'none')
    $('footer').css('display', 'none')
    var fighterName = $('<div></div>').addClass('fighter-name')
    $('.search-results-container').append(fighterName)
    fighterName.append(`<h1>${data.FirstName} "${data.Nickname}" ${data.LastName}</h1>`)
    fighterName.append(`<p>Record: ${data.Wins} - ${data.Losses} - ${data.Draws} - ${data.NoContests}</p>`)
    $('.search-results-container').append($('<div></div>').addClass('stat-cards-container'))
    var statCards = $('<div></div>').addClass('stat-cards')
    $('.stat-cards-container').append(statCards)
    statCards.append(`<p>Height: ${data.Height}</p>`)
    statCards.append(`<p>Weight: ${data.Weight}</p>`)
    statCards.append(`<p>Reach: ${data.Reach}</p>`)
    statCards.append(`<p>DOB: ${data.BirthDate}</p>`)
    var statCards = $('<div></div>').addClass('stat-cards')
    $('.stat-cards-container').append(statCards)
    statCards.append(`<p>Knockout Wins : ${data.TechnicalKnockouts}</p>`)
    statCards.append(`<p>Submission Wins : ${data.Submissions}</p>`)
    statCards.append(`<p>Knockout Losses : ${data.TechnicalKnockoutLosses}</p>`)
    statCards.append(`<p>Submission Losses : ${data.SubmissionLosses}</p>`)
    var statCards = $('<div></div>').addClass('stat-cards')
    $('.stat-cards-container').append(statCards)
    statCards.append(`<p>Decision Precentage: ${data.CareerStats.DecisionPercentage}%</p>`)
    statCards.append(`<p>Knockout Precentage: ${data.CareerStats.KnockoutPercentage}%</p>`)
    statCards.append(`<p>Sig Strike Acc: ${data.CareerStats.SigStrikeAccuracy}%</p>`)
    statCards.append(`<p>Sig Strike Per Min: ${data.CareerStats.SigStrikesLandedPerMinute}</p>`)
    statCards.append(`<p>Submission Average: ${data.CareerStats.SubmissionAverage}</p>`)
    statCards.append(`<p>Takedown Average: ${data.CareerStats.TakedownAverage}</p>`)
}