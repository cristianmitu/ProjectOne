
let birthdayEl = document.querySelector(".birthday");
let submitButtonEl = document.querySelector("#submit-button");
let modalImageEl = document.querySelector("#modal-image");
let movieTitleEl = document.querySelector(".card-title");
let modalDateEl = document.querySelector(".modal-title");
let filmOverviewEl = document.querySelector("#film-overview");
let previousSearchesEl = document.querySelector("#cards-section");
let event1El = document.querySelector("#event-1");
let event2El = document.querySelector("#event-2");
let event3El = document.querySelector("#event-3");


let oldFilms = [];
let oldFilmsLocalStorage = JSON.parse(localStorage.getItem('oldFilms'));

if (oldFilmsLocalStorage !== null) {
  for (let i = 0; i < oldFilmsLocalStorage.length; i++) {
    oldFilms.push(oldFilmsLocalStorage[i]);
    
  }
} 

previousSearchesEl.innerHTML = "";

// Add localstorage data to previous searches
    for (let i = 0; i < oldFilms.length; i++) {
      previousSearchesEl.innerHTML +=
      `<div class="card previous-cards" style="width: 18rem; style="height 600">
        <img class="card-img-top" style="height: 350px" src="${oldFilms[i].image}" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">${oldFilms[i].date}</p>
          </div>
        <div class="card-body">
          <p class="card-text">${oldFilms[i].filmOverview}</p>
        </div>
        <div>
          <p class="card-text">Important dates in history:</p>
        </div>
        <div>
          <p class="card-text">${oldFilms[i].event1Year}: ${oldFilms[i].event1}</p>
        </div>
        <div>
            <p class="card-text">${oldFilms[i].event2Year}: ${oldFilms[i].event2}</p>
          </div>
          <div>
            <p class="card-text">${oldFilms[i].event3Year}: ${oldFilms[i].event3}</p>
          </div>
      </div>`
    }


// Get input date when submit button clicked
submitButtonEl.addEventListener("click", function(event){
    event.preventDefault();
    let birthdayDate = birthdayEl.value;
    let month = birthdayDate.substring(5,7);
    let day = birthdayDate.substring(8,10);
    let aaa = "";
    let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;

    getData();
    async function getData(){


    let response = await fetch( url,
        {
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2ZTI4YWQ4MmYzM2RjNmNlNDVlMDE0YjQ2NTg0NjUxNiIsImp0aSI6ImZiMTU1MTYzZTQxMzRmMGU1NWYyZmYzMThmZTNiOWRmM2UxOGU2NzI4NjFiYzJjZGIxMjkyNDljMzRjYThhYWNkMGZlZDVjOWZmYTliN2U2IiwiaWF0IjoxNjc1MjY5MTI4LjI5NDU1MSwibmJmIjoxNjc1MjY5MTI4LjI5NDU1NCwiZXhwIjozMzIzMjE3NzkyOC4yOTIxMSwic3ViIjoiNzE4ODI4OTQiLCJpc3MiOiJodHRwczovL21ldGEud2lraW1lZGlhLm9yZyIsInJhdGVsaW1pdCI6eyJyZXF1ZXN0c19wZXJfdW5pdCI6NTAwMCwidW5pdCI6IkhPVVIifSwic2NvcGVzIjpbImJhc2ljIl19.OLPvx1h_2YCBeHFiEYO4wvsIavsi6l6JB6BuydWi9zwXZwWqjKDDI_y2ZLsHIl__0JVUbGmdBTUwuneKRp-my3cyGAjH9pTPM-FqMxwJlSZsSlu8ysu_LWUyO85ouOZ2MvgmWnyB4QQJDGuYujCfa2UzFEgIpCKut97ITgoetgHq6i-8UolZuH45NJc2dMMBGdgS60DPPFh2IH53C5F2ie6Vu6NJA93zJXH5xVps4EKwV7Gk_zvnkIf-TbYXgvIXlpeP-Cx9_L08yn8PUuSv0vqc1lTfU5qDWAUO5R47DDCp0C09E8Tv-U-2gc6XEmxSnKNTS82b0QsUqZcs-8G-5VdO1YzzmiE6CjkIB2V7ckbwpn7C39IsWe_i6NrhNC_z0F-ftIQ6oLEZEexgrDk47BBD9vVZpn7eEYc4DjnEuzvlEfPZAdZGLdV_ajmXIZu3u3rmGRWKbV2hhZOjJ5oo8IaI1RfZc-Cf6c3GaVobUZDtwwESBV0n941BYRfio1_I-I3vWb3aXodC0R1_ADmGla9Qwv7ueH6mvFwz0Ac50-X29X80xj_BE2BJ0E890SY-QzfxzCIOBwhSqYOOiWeJn_qcP3fYLCrB25XBPt99wEDZFHclQf8eFxCX_7pAHEEQfcFdyJh713IQtHFULcqRp8YonxUXW7el7YUWj-Jg_nc',
                'Api-User-Agent': 'Class Project (cnwanneka@gmail.com)'
            }
        }
    )
      

    .then(response => response.json())
    .then(data => aaa = data);
        let event1 = aaa.events[0].text;
        let event2 = aaa.events[1].text;
        let event3 = aaa.events[2].text;
        let event1Year = aaa.events[0].year;
        let event2Year = aaa.events[1].year;
        let event3Year = aaa.events[2].year;
        console.log(aaa);
        
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
      event1El.textContent = event1Year + ": " + event1;
      event2El.textContent = event2Year + ": " + event2;
      event3El.textContent = event3Year + ": " + event3;

  
      let currentFilm = {
        title: filmTitle,
        image: fullPoster,
        date: releaseDate,
        filmOverview: overview,
        event1Year: event1Year,
        event2Year: event2Year,
        event3Year: event3Year,
        event1: event1,
        event2: event2,
        event3: event3,
      };
      console.log(currentFilm);
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
          <img class="card-img-top" style="height: 350px" src="${oldFilms[i].image}" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">${oldFilms[i].date}</p>
          </div>
          <div class="card-body">
            <p class="card-text">${oldFilms[i].filmOverview}</p>
          </div>
          <div>
            <p class="card-text">Important dates in history:</p>
          </div>
          <div>
            <p class="card-text">${oldFilms[i].event1Year}: ${oldFilms[i].event1}</p>
          </div>
          <div>
            <p class="card-text">${oldFilms[i].event2Year}: ${oldFilms[i].event2}</p>
          </div>
          <div>
            <p class="card-text">${oldFilms[i].event3Year}: ${oldFilms[i].event3}</p>
          </div>
        </div>`
        localStorage.setItem('oldFilms', JSON.stringify(oldFilms));
      }
    
 })
      }
    
    
      
});

