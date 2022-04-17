"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
let userRateOfMovie1;
let userRateOfMovie2;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
        lastUsersMovie1 : userRateOfMovie1,
        lastUsersMovie2 : userRateOfMovie2,
    },
    actors: {},
    genres: [],
    privat: false,
};

let lastUsersMovie1 = prompt("Один из последних просмотренных фильмов?", "");
userRateOfMovie1 = prompt("На сколько оцените `${lastUsersMovie1}`?", "от 1 до 10");

let lastUsersMovie2 = prompt("Один из последних просмотренных фильмов?", "");
userRateOfMovie2 = prompt("На сколько оцените `${lastUsersMovie2}`?", "от 1 до 10");

alert(personalMovieDB);
