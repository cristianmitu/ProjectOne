fetch("https://api.themoviedb.org/3/movie/550?api_key=7d8c2f046707227f388808b36dce76d5")
.then(response => response.json())
.then(data => console.log(data))