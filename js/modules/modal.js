function openModal(modalSelector, setTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show', 'anim');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    if(setTimerId) {
        clearInterval(setTimerId);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show', 'anim');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, setTimerId) {
    // modal

    const btn = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);


    btn.forEach(item => {
        item.addEventListener('click', () => openModal(modalSelector, setTimerId));
    });

    modal.addEventListener('click', (e) => {
        if (e.target == modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => { // Событие keydown происходит при нажатии клавиши, а keyup – при отпускании.
        if (e.code == 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });


    function showModalByScroll() {
        if (document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, setTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {openModal};
export {closeModal};