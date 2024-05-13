
var movies = [
    { title: "The Dark Knight", genre: "action" },
    { title: "Inception", genre: "action" },
    { title: "Forrest Gump", genre: "drama" },
    { title: "Pulp Fiction", genre: "drama"},
    { title: "The Hangover", genre: "comedy"},
    { title: "Superbad", genre: "comedy" }
];

function filterMovies() {
    var selectedGenre = document.getElementById("genre").value;
    

    var filteredMovies = movies.filter(function(movie) {
        return (selectedGenre === "all" || movie.genre === selectedGenre);
    });

    displayMovies(filteredMovies);
}

function displayMovies(movies) {
    var movieList = document.getElementById("movieList");
    movieList.innerHTML = "";

    if (movies.length === 0) {
        movieList.innerHTML = "<p>No movies found</p>";
    } else {
        movies.forEach(function(movie) {
            movieList.innerHTML += "<p>" + movie.title + "<br> Genre: " + movie.genre +  "</p>";
        });
    }
}


displayMovies(movies);