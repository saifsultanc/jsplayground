    (function(){

    // get elements 
    const btns = document.querySelectorAll('.btn');
    const screen = document.querySelector('.screen');
    const equalBtn = document.querySelector('.btn-equal');
    const clearBtn = document.querySelector('.bnt-clear');

    // process of the calculator buttons
    for (let i=0; i<btns.length; i++){
        btns[i].addEventListener('click', function(){
            let number = btns[i].getAttribute('data-num');
            screen.value += number;
        })
    }

    // equal button evaluation
    equalBtn.addEventListener('click', function(){

        if (screen.value === ''){
            alert('input is empty');
        }
        else {
            let value = eval(screen.value);
            screen.value = value;
        }
    })

    // clear button to clear the screen
    clearBtn.addEventListener('click', function(){
        screen.value = ''; 
    })
})();