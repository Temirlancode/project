function slider({container, slide, prevArrow, nextArrow, currCounter, totalCounter, wrapper, field}) {
    // slider

    const slides = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          currId = document.querySelector(currCounter),
          totalId = document.querySelector(totalCounter),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
          width = window.getComputedStyle(slidesWrapper).width,
          dots =[]
    let slideIndex = 1;
    let offset = 0;


    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all'
    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';
    const indicators = document.createElement('ol');
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for(let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-slideTo', i+1);
        indicators.append(dot);
        dots.push(dot);

        if(i === 0) {
            dot.style.opacity = 1
        }
    };
    
    function changeOpacityByDot() {
        dots.forEach(dot => {
            dot.style.opacity = 0.5
        });

        dots[slideIndex-1].style.opacity = 1
    }

    function changeTransformByOffset() {
        slidesField.style.transform = `translateX(-${offset}px)`
    }

    function currIdInner() {
        if(slideIndex < 10) {
            currId.textContent = `0${slideIndex}`
        } else {
            currId.textContent = slideIndex
        }
    }

    function deleteNotDigits(body) {
        return +body.replace(/\D/g, '')
    }


    slidesWrapper.style.overflow = 'hidden';

    if(slides.length < 10) {
        totalId.textContent = `0${slides.length}`;
        currId.textContent = `0${slideIndex}`;
    } else {
        totalId.textContent = slides.length;
        currId.textContent = slideIndex;
    }


    next.addEventListener('click', () => {
        if(offset === deleteNotDigits(width) * (slides.length-1)) {
            offset = 0
        } else {
            offset += deleteNotDigits(width)
        }

        changeTransformByOffset();

        if(slideIndex === slides.length) {
            slideIndex = 1
        } else {
            slideIndex++;
        }

        currIdInner();

        changeOpacityByDot();

    }) 

    prev.addEventListener('click', () => {
        if(offset === 0) {
            offset = deleteNotDigits(width) * (slides.length - 1)
        } else {
            offset -= deleteNotDigits(width)
        }

        changeTransformByOffset();

        if(slideIndex == 1) {
            slideIndex = slides.length
        } else {
            slideIndex--
        }

        currIdInner()

        changeOpacityByDot();

    })

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slideTo');
            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);

            changeTransformByOffset();

            currIdInner();

            changeOpacityByDot();
        })
    });
}

export default slider