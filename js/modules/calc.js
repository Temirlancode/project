function calc() {
    //calc

    const totalCallory = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ratio;

    if(localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if(localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }


    function calcTotal() {
        if(!sex || !height || !weight || !age || !ratio) {
            totalCallory.textContent = '____';
            return;
        }

        if(sex === 'female') {
            totalCallory.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            totalCallory.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function initLocalSettings(selector, active) {
        const elements = document.querySelectorAll(`${selector} div`);
        elements.forEach(elem => {
            elem.classList.remove(active);
            if(elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(active);
            }
            if(elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(active);
            }
        });
    }

    initLocalSettings('#gender', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big', 'calculating__choose-item_active');

    function getStaticInfo(parent, active) {
        const elements = document.querySelectorAll(`${parent} div`);

        document.querySelector(parent).addEventListener('click', (e) => {
            if(e.target.classList.contains('calculating__choose-item')) {
                if(e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }
    
                console.log(sex, ratio);
    
                elements.forEach(element => {
                    element.classList.remove(active);
                });
    
                e.target.classList.add(active);
    
                calcTotal();
            }
        });
    }

    getStaticInfo('#gender', 'calculating__choose-item_active');
    getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active');

    function getDynamicInfo(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            if(input.value.match(/\D/g)) {
                input.style.border = '1px red solid';
            } else {
                input.style.border = 'none';
            }
            switch(input.getAttribute('id')) {
            case 'height':
                height = +input.value;
                break;
            case 'weight':
                weight = +input.value;
                break;
            case 'age':
                age = +input.value;
                break;
            }
            calcTotal();
        });

    }

    getDynamicInfo('#height');
    getDynamicInfo('#weight');
    getDynamicInfo('#age');

}

export default calc;