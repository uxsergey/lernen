/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const adv = document.querySelectorAll('.promo__adv img'),
        promo = document.querySelector('.promo__bg'),
        gener = promo.querySelector('.promo__genre'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        cheсkbox = addForm.querySelector('[type="checkbox"]'),
        movieList = document.querySelector('.promo__interactive-list');

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = addInput.value;
        const favorite = cheсkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`; // Удаление лишних символов
            }

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }

        addForm.reset();
    });

    const makeChange = () => {
        promo.style.cssText = 'background:url("img/bg.jpg") top center/cover no-repeat;';
        gener.textContent = 'драмма';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    // movieDB.movies.sort();
    const deletAdv = (arr) => {
        arr.forEach((item) => {
            item.remove();
        });
    };


    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach(
            (film, i) => {
                movieList.innerHTML +=
                    `<li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                    </li>`;
            });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }

    deletAdv(adv);
    makeChange();
    sortArr(movieDB.movies);
    createMovieList(movieDB.movies, movieList);
});