let birthdayEl = document.querySelector(".birthday");
let submitButtonEl = document.querySelector("#submit-button");
let modalImageEl = document.querySelector("#modal-image");
let movieTitleEl = document.querySelector(".card-title");
let modalDateEl = document.querySelector(".modal-title");
let filmOverviewEl = document.querySelector("#film-overview");
let previousSearchesEl = document.querySelector("#cards-section");

let oldFilms = [];
let oldFilmsLocalStorage = JSON.parse(localStorage.getItem('oldFilms'));

if (oldFilmsLocalStorage !== null) {
  for (let i = 0; i < oldFilmsLocalStorage.length; i++) {
    oldFilms.push(oldFilmsLocalStorage[i]);
    
  }
} 

previousSearchesEl.innerHTML = "";

    for (let i = 0; i < oldFilms.length; i++) {
      previousSearchesEl.innerHTML +=
      `<div class="card previous-cards" style="width: 18rem;">
        <img class="card-img-top" src="${oldFilms[i].image}" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">${oldFilms[i].filmOverview}</p>
        </div>
      </div>`
    }


// Get input date when submit button clicked
submitButtonEl.addEventListener("click", function(event){
    event.preventDefault();
    let birthdayDate = birthdayEl.value;
    
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=7d8c2f046707227f388808b36dce76d5&primary_release_date.gte=" + birthdayDate + "&primary_release_date.lte=" + birthdayDate)
    .then(response => response.json())
    .then(data => {
        console.log(birthdayDate);
        console.log(data);

    let filmTitle = data.results[0].title;
    let overview = data.results[0].overview;
    let releaseDate = data.results[0].release_date;
    let posterUrl = "https://image.tmdb.org/t/p/original/"
    let posterLink = data.results[0].poster_path;
    let fullPoster = "";

    if (posterLink == null) {
        fullPoster = "/../assets/images/No_Image_Available.jpg";
    } else {
        fullPoster = posterUrl + posterLink;
    }   

    movieTitleEl.textContent = filmTitle;
    modalImageEl.src = fullPoster;
    modalDateEl.textContent = releaseDate;
    filmOverviewEl.textContent = overview;

    let currentFilm = {
      title: filmTitle,
      image: fullPoster,
      date: releaseDate,
      filmOverview: overview
    };
    oldFilms.unshift(currentFilm);
    
    if (oldFilms.length > 6) {
      oldFilms.pop();
    }
    console.log(oldFilms);
    console.log(oldFilms.length);

    previousSearchesEl.innerHTML = "";

    for (let i = 0; i < oldFilms.length; i++) {
      
      previousSearchesEl.innerHTML +=
      `<div class="card previous-cards" style="width: 18rem;">
        <img class="card-img-top" src="${oldFilms[i].image}" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">${oldFilms[i].filmOverview}</p>
        </div>
      </div>`
      localStorage.setItem('oldFilms', JSON.stringify(oldFilms));
    }
    
 })
});









