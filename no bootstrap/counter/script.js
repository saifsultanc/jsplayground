(function(){

    // get elements from dom
    let counter = document.querySelector('.counter');
    const addCount = document.querySelector('#addCountBtn');
    const lowerCount = document.querySelector('#lowerCountBtn');
    const resetCount = document.querySelector('#resetBtn');

    // count begins at 0
    let count = 0;

    // event for add count click
    addCount.addEventListener('click',incrementCounter);

    function incrementCounter (){
        count++;
        counter.innerHTML = count;
        if(counter.innerHTML>'0'){
            counter.style.color = '#4caf50'
        }
        else if(counter.innerHTML === '0'){
            counter.style.color = 'white';
        }
        counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
    }

    // event for lower count click
    lowerCount.addEventListener('click',decrementCounter);

    function decrementCounter (){
        count--;
        counter.innerHTML = count;
        if(counter.innerHTML<'0'){
            counter.style.color = 'red'
        }
        else if(counter.innerHTML === '0'){
            counter.style.color = 'white';
        }
        counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
    }

    // event for reset count click
    resetCount.addEventListener('click', resetCounter);

    function resetCounter(){
        count = 0;
        counter.innerHTML = count;
        counter.style.color = 'white';
        counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
    }
})();