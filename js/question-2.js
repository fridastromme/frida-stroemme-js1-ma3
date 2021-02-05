// Question 2 
// Sjekk ut lessonen om denne en gang til : )))))

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const gamesContainer = document.querySelector(".games");

async function getGames() {
    const response = await fetch(url);
    const results = await response.json();
    gamesContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
        if (i === 8) {
            break;
        }

        gamesContainer.innerHTML += `<div class="games">${games[i]}</div>`
    }
}
getGames();