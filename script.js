const slideritems = document.querySelectorAll('.slider-item');

let sliderActive = 1;

if (slideritems) {
    slideritems.forEach((slider,index)=> {
        if (index === 0) {
            slider.setAttribute("data-show", "show");
        } else {
            slider.setAttribute("data-show", "hidden");
        }
    })
    setInterval(() => {
        slideritems.forEach((slider, index) => {
            if(sliderActive === index) {
                slider.setAttribute("data-show", "show");
            } else {
                slider.setAttribute("data-show", "hidden");
            }
        });

        if(sliderActive === slideritems.length - 1 ) {
            sliderActive = 0;
        } else {
            sliderActive++;
        }

    }, 5000)
}