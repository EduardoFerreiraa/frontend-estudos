// Fetch endpoint /movies
let movies = {
    movie1: {
        title: "A Origem",
        year: 2010,
        isFavorite: true,
        genre: "Ficção Científica",
        director: "Christopher Nolan",
    },
    movie2: {
        title: "Um sonho de liberdade",
        year: 1994,
        isFavorite: true,
        genre: "Drama",
        runtime: 142,
    },
    movie3: {
        title: "The Godfather",
        year: 1972,
        isFavorite: false,
        genre: "Crime",
    },
};
export function showMovies(movies) {
    // movies.movie1.title = "Teste";
    console.log(movies);
}
showMovies(movies);
