(function(){

    // get the elements
    const sendBtn = document.querySelector('#sendBtn');
    const messageIn = document.querySelector('#messageIn');
    const messageOut = document.querySelector('#messageOut');

    // add event listener to the button click
    sendBtn.addEventListener('click', sendMsg);

    // send message function (event listener)
    function sendMsg(){

        // get the input content
        let content = messageIn.value;

        // check if the content was empty
        if (content === ''){
            // for empty input, display an alert showing an error processing
            alert('Please Enter Valid Value. Current Value Is Empty.');
        }
        else {
            // for valid input, set it on the output and clear the input
            messageOut.innerHTML = content;
            messageIn.value = '';
        }
    }
})();