'use script';
const contumerUswer = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: contumerUswer,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count >= 0 || personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов!');
} else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
    alert('Вы классический зритель!');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман!');
} else {
    alert('Произошла ошибка!');
}

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

console.log(personalMovieDB);

