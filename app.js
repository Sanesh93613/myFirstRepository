'use strict';
let numberOfFilms;

//Общая база данных(Профиль аккаунта)
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    //Функция сколько просмотренно фильмов
    

    countOfFilms: function () {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        /*Проверка на число*/
        while ( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    //Функиця. кол-во просмотренных фильмов(Оцени мой уровень)(detect personal level)
    rateMyExperience: function () {
        switch (numberOfFilms) {
            case numberOfFilms < 10:
                alert('Просмотренно довольно мало фильмов');
                break;
            case numberOfFilms > 10 && numberOfFilms < 30:
                alert('Вы классический зритель ');
                break;
            case numberOfFilms > 30:
                alert('Вы киноман');
                break;
            default:
                alert('Произошла ошибка');

        }
    },
    //Функция подбора фильмов по жанру 
    writeYourGenres: function (callback) {
        
        for (let i = 1; i < 4; i++) {
            let a = prompt(`Ваш любимый жанр №${i}`);
            if ( a != '' && a != null && isNaN(a)){  
            
            personalMovieDb.genres[i -  1]= a;
            }else {
                i--;
                if(i<0){i=0;}
            }
                
            
            
    

        }
        callback();
    },
    //Функция показа профиля
    showMyDb: function () {
        if (personalMovieDb.privat == false) {
            console.log(personalMovieDb);
        }
    },
    //Функция Оценки фильмов(Запомни мои фильмы)
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', '');
            let b = +prompt('На колько оцените его?', '');
            //Защита от дурака
            if (((a && b) != "") && (a && b) && ((a && b) !== "undefined") && ((a && b) !== "null") && ((a && b) != false) && a.length < 50) {
                personalMovieDb.genres[a] = b;
            } else {
                i--;
                if (i < 0) {
                    i = 0;
                }
            }
        }
    },
    //Функция переключения видимости профиля
    toggleVisibleMyDb:function(){
        if(personalMovieDb.privat == false){
            personalMovieDb.privat = true;
        }else{personalMovieDb.privat = false;}
    },
    //Последнее задание в 4 практике - вывод в консоль массива жанры(genres) через ForEach
    part4:function(){
        personalMovieDb.genres.forEach(function(item, i, arr){
            console.log(`#${i+1} - это ${item}`);
        });
    }



};
personalMovieDb.writeYourGenres(personalMovieDb.part4);


