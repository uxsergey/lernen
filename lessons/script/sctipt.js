//touchstart Происходит, когда пользователь касается сенсорной поверхности
//touchend Происходит, когда пользователь удаляет точку касания поверхности (убирает палец или стилус с поверхности).
//touchmove Происходит, когда пользователь двигает точку касания по поверхности
//touchleave Происходит, если точка касания была по какой-либо ушла за приделы
//touchcancel Происходит, если точка касания была по какой-либо причине удалена
//touchenter Происходит, когда пользователь зашел на элемент на которыйповешено событие
window.addEventListener('DOMContentLoaded', () => {

    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
        // console.log(e.touches); //touches список всех польцев взаимодействующих с экраном
        // console.log(e.targetTouches); //targetTouches список всех польцев взаимодействующих с Элементом
        // console.log(e.changedTouches); //changedTouches список всех польцев участвующих в текущем событии
    });
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
        //обращение к конкетному   🠑  
        //пальцу
    });
    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
    //     console.log('End');
    // });


});