// let birthdayEl = document.querySelector("#birthday");
// let submitButtonEl = document.querySelector("#birthdaySubmit");
// let filmResultsEl = document.querySelector("#filmResults");

// // Get input date when submit button clicked
// submitButtonEl.addEventListener("click", function(event){
//     event.preventDefault();
//     let birthdayDate = birthdayEl.value;
    
//     fetch("https://api.themoviedb.org/3/discover/movie?api_key=7d8c2f046707227f388808b36dce76d5&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&release_date.gte=" + birthdayDate)
//     .then(response => response.json())
//     .then(data => {
//     console.log(data.results[0].title);

//     for (let i = 0; i < 11; i++) {
//         let filmTitle = data.results[i].title;
//         filmResultsEl.innerHTML += `<p>${filmTitle}</p>`;
        
//     }
    
//  })
// });









