let birthdayEl = document.querySelector(".birthday");
let submitButtonEl = document.querySelector("#submit-button");
let filmResultsEl = document.querySelector("#filmResults");

// Get input date when submit button clicked
submitButtonEl.addEventListener("click", function(event){
    event.preventDefault();
    let birthdayDate = birthdayEl.value;
    filmResultsEl.innerHTML = "";
    
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=7d8c2f046707227f388808b36dce76d5&primary_release_date.gte=" + birthdayDate + "&primary_release_date.lte=" + birthdayDate)
    .then(response => response.json())
    .then(data => {
        console.log(birthdayDate);
        console.log(data);

    for (let i = 0; i < 3; i++) {
        let filmTitle = data.results[i].title;
        let popularity = data.results[i].popularity;
        let releaseDate = data.results[i].release_date;
        let posterUrl = "https://image.tmdb.org/t/p/original/"
        let posterLink = data.results[i].poster_path;
        let fullPoster = "";

        if (posterLink == null) {
            fullPoster = "/../assets/images/No_Image_Available.jpg";
        } else {
            fullPoster = posterUrl + posterLink;

        }
        filmResultsEl.innerHTML += `<h2>${filmTitle}</h2>
        <p>${popularity}</p>
        <p>${releaseDate}</p>
        <img class="movie-image" src="${fullPoster}">
        `;
        
    }
    
 })
});









