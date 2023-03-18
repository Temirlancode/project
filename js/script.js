import tabs from './modules/tabs'
import cards from './modules/cards'
import calc from './modules/calc'
import form from './modules/form'
import modal from './modules/modal'
import slider from './modules/slider'
import timer from './modules/timer'
import { openModal } from './modules/modal'

window.addEventListener('DOMContentLoaded', () => {
    const setTimerId = setTimeout(() => openModal('.modal', setTimerId), 50000);



    tabs('.tabheader__items', '.tabheader__item', '.tabcontent', 'tabheader__item_active');
    cards();
    calc();
    form(setTimerId, '.modal', 'form');
    modal('[data-modal]', '.modal', setTimerId );
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        currCounter: '#current',
        totalCounter: '#total',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'

    });
    timer('.timer', '2023-03-27');

    
    

    
    
    

    



    


    // showSlides(slideIndex);

    // if(slides.length < 10) {
    //     totalId.textContent = `0${slides.length}`
    // } else {
    //     totalId.textContent = slides.length
    // }

    // function showSlides(n) {
    //     if(n > slides.length) {
    //         slideIndex = 1;
    //     };

    //     if(n < 1) {
    //         slideIndex = slides.length;
    //     };

    //     slides.forEach(item => {
    //         item.classList.add('hide');
    //         item.classList.remove('show', 'fade');
    //     })

    //     slides[slideIndex-1].classList.add('show', 'fade');
    //     slides[slideIndex-1].classList.remove('hide');

    //     if(slides.length < 10) {
    //         currId.textContent = `0${slideIndex}`
    //     } else {
    //         currId.textContent = slideIndex
    //     }
    // }

    // function plusIndex(n) {
    //     showSlides(slideIndex += n)
    // }

    // prev.addEventListener('click', () => {
    //     plusIndex(-1);
    // })

    // next.addEventListener('click', () => {
    //     plusIndex(1)
    // })
    
}) 
