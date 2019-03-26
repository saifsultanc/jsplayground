(function(){

    // get the dom elements
    const nextBtn = document.querySelector('.nextBtn');
    const prevBtn = document.querySelector('.prevBtn');
    const container = document.querySelector('.images');

    // image counter begins at 0
    let counter = 0;

    // next button click add listener
    nextBtn.addEventListener('click', nextSlide);
    function nextSlide(){

        // animate the image on next slide load
        container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});

        // increment counter
        counter++;

        // dont let counter go out of bounds
        if (counter>4){
            counter = 0;
        }
        
        // apply the new image at updated counter
        container.style.backgroundImage = `url(img/bcg-${counter}.jpeg)`;
    }

    prevBtn.addEventListener('click', prevSlide);
    function prevSlide(){

        // animate the image on previous slide load
        container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});

        // decrement counter
        counter--;

        // dont let counter go out of bounds
        if (counter<0){
            counter = 4;
        }

        // apply the new image at updated counter
        container.style.backgroundImage = `url(img/bcg-${counter}.jpeg)`;
    }
})();