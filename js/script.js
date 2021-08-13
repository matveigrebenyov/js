"use strict";

const numberOfFims = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFims,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
/* const a = prompt('один из последних просмотренных фильмов?', ''),
      b = prompt('Нас сколько оцените его?', ''),
      c = prompt('один из последних просмотренных фильмов?', ''),
      d = prompt('Нас сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; */

for (let i =0; i < 2; i++){
    const a = prompt('один из последних просмотренных фильмов?', ''),
          b = prompt('Нас сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    }else {
        console.log('error');
        i--;
    }

}

if (personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
}else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
    console.log('Вы классический зритель');
}else if(personalMovieDB.count >= 30) {
    console.log('Вы киноман');
}else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);




