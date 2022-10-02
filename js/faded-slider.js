(() => {
    
    items = [
        sliderItem1=document.querySelector('[slide-item-1]'),
        sliderItem2=document.querySelector('[slide-item-2]'),
        sliderItem3=document.querySelector('[slide-item-3]'),
    ]

    let span = document.querySelector('[dynamic-span]');

    spanInners = [
        "konstrukcje stalowe",
        "specjaliści w swoim fachu",
        "wiedza i doświadczenie"
    ]
       
    actualSlide = 0;
    lastSlide = items.length - 1;

    const nextSlide = () => { 
        
        let nextSlide = actualSlide + 1;
        nextSlide > 2 ? nextSlide = 0 : nextSlide;

        let prevSlide = actualSlide + 2;
        prevSlide === 3 ? prevSlide = 0 : prevSlide;
        prevSlide === 4 ? prevSlide = 1 : prevSlide;

        items[actualSlide].classList.add("fadeout");
        items[nextSlide].classList.remove("invisible");
        items[nextSlide].classList.remove("fadein");
        items[prevSlide].classList.add("invisible");
        items[prevSlide].classList.replace("fadeout", "fadein");
        
        actualSlide < lastSlide ? actualSlide++ : actualSlide = 0;

        span.innerHTML = spanInners[actualSlide];
    }

    setInterval(nextSlide, 5000);

})();