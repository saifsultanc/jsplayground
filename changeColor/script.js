(function () {

    // get the button and html body
    const colorBtn = document.querySelector('.colorBtn');
    const bodyBcg = document.querySelector('body');

    // define an array of colours
    const colors = ['yellow', 'red', 'green', '#3b5998'];

    // add click event listener to the button
    colorBtn.addEventListener('click', changeColor);

    // event listener function : changeColor
    function changeColor() {
        // get a random index from the array
        let random = Math.floor(Math.random() * colors.length)
        // assign colour value saved on that index to the body
        bodyBcg.style.backgroundColor = colors[random];
    }
})();