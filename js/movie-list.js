/*
Daily Coding Challenge: Movie List Challenge
1. Create an array of objects of your 5 favorite movies
a. Each movie object should have the following properties:
    - title, year, genre, description, imdbRating (yeah, you will need to check imdb)
b. Create a function that when called loops through your array and console.logs
the details for each of your movies
c. Create a function that will find a movie by it's title
and then console.logs the details of the movie.
The function should take a movieTitle parameter that lets you search by different titles
files to create: movie-list.html, movie-list.js
*/

let movieList = [
    {title:'Inception', year: 2010, genre:'Adventure', descrpion:'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.', imdbRating:8.8},
    {title:'Martin', year: 1992, genre:'Comedy', descrpion:'Sassy sitcom centering on radio and television personality Martin Payne. Series focuses on his romantic relationship with girlfriend Gina, her best friend Pam and escapades with best friends Tommy and Cole.', imdbRating:7.4},
    {title:'Fresh prince of bel-Air', year: 1990, genre:'Comedy', descrpion:'A streetwise, poor young man from Philadelphia is sent by his mother to live with his aunt, uncle and cousins in their Bel-Air mansion.', imdbRating:8.8},
    {title:'Friends', year: 1994, genre:'Comedy', descrpion:'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.', imdbRating:8.9},
    {title:'The Intouchables', year: 2011, genre:'Biography', descrpion:'After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.', imdbRating:8.5},

];

/****b. Create a function that when called
 * loops through your array and console.logs
* the details for each of your movies */

const movieDetail = movieList.forEach(movie => {
    console.log('Here are the details of the movie:', movie);

  });

 /****c. Create a function that will find a movie by it's title
and then console.logs the details of the movie.****/

let movieTitle = prompt('Enter the title of movie that you want to see the details for :')
const findMovie = movieList.find(movie => {
   return movie.title === movieTitle
});
console.log('Here are the details of the movie you were looking for',findMovie);
