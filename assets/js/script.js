const cristianYoutubeId = "440656126246-0of53l90ad1v9hg6v1strg68kdm7uadf.apps.googleusercontent.com";
const cristianYoutubeKey = "AIzaSyB9bVlqEMXWP5P9PzhhouoGLloX2-sOy6A";

const cristianMovieKey = "7d8c2f046707227f388808b36dce76d5";

fetch("https://api.themoviedb.org/3/movie/550?api_key=7d8c2f046707227f388808b36dce76d5")
.then(response => response.json())
.then(data => console.log(data));

fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=5&key=AIzaSyB9bVlqEMXWP5P9PzhhouoGLloX2-sOy6A")
.then(response => response.json())
.then(data => console.log(data))

