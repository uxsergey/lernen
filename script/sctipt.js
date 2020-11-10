"use strict";


const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', '');
const b = prompt('На сколько оцените его?', '');
const c = prompt('Один из последних просмотренных фильмов?', '');
const d = prompt('Сколько фильмов вы уже посмотрели?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

document.write(personalMovieDB)