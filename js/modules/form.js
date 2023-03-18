import { openModal, closeModal } from "./modal";
import { postData } from "../services/services";


function form(setTimerId, modalSelector, formSelector) {
    //forms

    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Мы с вами скоро свяжемся',
        fail: 'Что-то пошло не так'
    }


    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);
            
            const json = JSON.stringify(Object.fromEntries(formData.entries()))

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.fail)
            }).finally(() => {
                form.reset();
            })
            // axios.post('http://localhost:3000/requests', Object.fromEntries(formData.entries()))
            //     .then(data => {
            //         console.log(data.data);
            //         showThanksModal(message.success);
            //         statusMessage.remove();
            //     }).catch(() => {
            //         showThanksModal(message.fail)
            //     }).finally(() => {
            //         form.reset();
            //     })
        })
    }

    forms.forEach((item) => {
        bindPostData(item)
    });

    function showThanksModal(message) {
        const modal = document.querySelector(modalSelector);
        const modalDialog = document.querySelector('.modal__dialog');

        modalDialog.classList.add('hide');
        openModal('.modal', setTimerId);
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class='modal__content'>
            <div data-close class="modal__close">&times;</div>
            <div class="modal__title">${message}</div>
        </div>
        `;
        modal.append(thanksModal);

        setTimeout(() => {
            thanksModal.remove();
            modalDialog.classList.add('show');
            modalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000)
    }

}

export default form;