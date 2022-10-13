'use script';
let contumerUswer;

function start() {
    contumerUswer = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (contumerUswer == '' || contumerUswer == null || isNaN(contumerUswer)) {
        contumerUswer = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: contumerUswer,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?'),
              b = prompt('На сколько оцените его?');
        
        if (a != null && b != null && a !='' && b !='' && a.length <  50) {
            personalMovieDB.movies[a] = b;
            console.log('Done!');
        } else {
            console.log('Error')
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель!');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка!');
    }
}

// detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        return console.log(personalMovieDB);
    }
}
showMyDB();


function writeYourGenres() {
    for(i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);
// while (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
//     alert('Просмотрено довольно мало фильмов!');
//     break;
// }

// while(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     alert('Вы классический зритель');
//     break;
// }

// while(personalMovieDB.count >= 30) {
//     alert('Вы киноман!');
//     break;
// }

// do {
//     alert('Просмотрено довольно мало фильмов!');
//     break;
// } while (personalMovieDB.count >= 0 && personalMovieDB.count < 10); 

// do {
//     alert('Вы классический зритель');
//     break;
// } while (personalMovieDB.count >= 10 && personalMovieDB.count < 30);

// do {
//     alert('Вы киноман!');
//     break;
// } while(personalMovieDB.count >= 30);

// console.log(personalMovieDB);

