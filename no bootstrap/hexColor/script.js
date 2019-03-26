(function(){

    // define the array containing the hex code digits
    const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

    // get all the elements from dom
    const hexBtn = document.querySelector('.hexBtn');
    const bodyBcg = document.querySelector('body');
    const hex = document.querySelector('.hex');

    // add click event listener
    hexBtn.addEventListener('click', getHex);

    // event listener function
    function getHex(){
        let hexCol = '#';

        // repeat 6 times and get a random digit from hexNumber array
        for (let i=0; i<6; i++){
            let random = Math.floor(Math.random()*hexNumbers.length);
            hexCol += hexNumbers[random];
        }

        // apply the hex color
        bodyBcg.style.backgroundColor = hexCol;
        hex.innerHTML = hexCol;
    }
})();