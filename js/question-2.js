// // Question 2 
// // Sjekk ut lessonen om denne en gang til : )))))

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const gamesContainer = document.querySelector(".games");

 async function getGames() {

     const response = await fetch(url);

     const data = await response.json();

     const games = data.results;

     gamesContainer.innerHTML = "";

     for(let i = 0; i < games.length; i++) {
         const nameContainer = games[i].name;
         const ratingContainer = games[i].rating;
         const tagsContainer = games[i].tags.length;

        if (i === 8) {
             break;
         }

         gamesContainer.innerHTML += `<div class="name">${nameContainer}</div><div class="rating">${ratingContainer}</div><div class="name">${tagsContainer}</div>`
     }
 }

getGames();

try {
    getGames();
}
catch(error){

    const errorMessage = "Could not load games. Try again later."
    gamesContainer.innerHTML += `<h2>${errorMessage}</h2>`;
}
