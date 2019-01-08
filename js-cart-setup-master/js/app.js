// filter buttons
(function(){

    // select all buttons
    const filterBtn = document.querySelectorAll('.filter-btn');

    // loop over all buttons
    filterBtn.forEach(function(btn){

        // event listener click for all the buttons
        btn.addEventListener('click', function(event) {

            // prevent default action of the button
            event.preventDefault();

            // get the value of the item clicked
            const value = event.target.dataset.filter;

            // select all items
            const items = document.querySelectorAll('.store-item');

            // loop over all the items
            items.forEach(function(item){

                // if the selection is all, display all items
                if (value === 'all'){
                    item.style.display = 'block';
                }
                else {
                    // display only the matching value items as per match
                    if (item.classList.contains(value)){
                        item.style.display = 'block';
                    }
                    // for no match, display nothing
                    else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
})();

// search input
(function(){

    // target search box
    const search = document.getElementById('search-item');

    // add event listener for key input
    search.addEventListener('keyup', function(){

        // user input in the search bar
        let value = search.value.toLowerCase().trim();;

        // get all the store items 
        const items = document.querySelectorAll('.store-item');

        // loop over all items
        items.forEach(function(item){

            // get the type of each item
            let type = item.dataset.item;

            // display matching type and ignore the none matching type
            if (type.startsWith(value)){
                item.style.display = 'block';
            }
            else {
                item.style.display = 'none';
            }
        });

    }); 

})();

// lightbox
(function(){

    // image list array
    let imageList = [];
    // array counter begins at 0
    let counter = 0;

    // get all the lightbox elements as defined on the html
    const images = document.querySelectorAll('.store-img');
    const container = document.querySelector('.lightbox-container');
    const item = document.querySelector('.lightbox-item');
    const closeIcon = document.querySelector('.lightbox-close');
    const btnLeft = document.querySelector('.btnLeft');
    const btnRight = document.querySelector('.btnRight');

    // add all images to the array
    images.forEach(function(img){
        // push the image source of each image on the array
        imageList.push(img.src);
    });

    // open modal - loop over each image
    images.forEach(function(img){
        img.addEventListener('click', function(){
            // show modal
            container.classList.add('show');

            // get source
            let src = event.target.src;
            
            // get index of this source image from the imageList array
            counter = imageList.indexOf(src);

            // show modal with the image
            item.style.backgroundImage = `url(${src})`;
        });
    });

    // close modal
    closeIcon.addEventListener('click', function(){
        // disable model "show"
        container.classList.remove('show');
    });

    // left button click
    btnLeft.addEventListener('click', function(){
        // decrement on counter (left)
        counter--;
        // loop around for out of bounds
        if (counter < 0) {
            counter = imageList.length - 1;
        }
        // show modal with the image
        item.style.backgroundImage = `url(${imageList[counter]})`;
    });

    // right button click
    btnRight.addEventListener('click', function(){
        // increment on counter (right)
        counter++;
        // loop around for out of bounds
        if (counter >= imageList.length) {
            counter = 0;
        }
        // show modal with the image
        item.style.backgroundImage = `url(${imageList[counter]})`;
    });    
})();

// show cart
(function(){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-cart');
    });
})();


// add items to cart
(function(){
    const cartBtn = document.querySelectorAll('.store-item-icon');
    cartBtn.forEach(function(btn){
        btn.addEventListener('click',function(event){
            //console.log(event.target);
            if (event.target.parentElement.classList.contains('store-item-icon')) {
                let fullPath = event.target.parentElement.previousElementSibling.src;
                let pos = fullPath.indexOf('img') + 3;
                let partPath =  fullPath.slice(pos);
                //console.log(partPath);
                const item = {};
                item.img = 'img-cart' + partPath;
                item.name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                item.price = (event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent).slice(2).trim();
                //console.log(item);

                const cartItem = document.createElement('div');
                cartItem.classList.add(
                    'cart-item',
                    'd-flex',
                    'justify-content-between',
                    'text-capitalize',
                    'my-3'
                );

                cartItem.innerHTML = `
                  <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                  <div class="cart-item-text">
      
                    <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                    <span>$</span>
                    <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                  </div>
                  <a href="#" id='cart-item-remove' class="cart-item-remove" onclick="removeItem()">
                    <i class="fas fa-trash"></i>
                  </a>
                </div>
                `;
                        // <a href="#" id='cart-item-remove' class="cart-item-remove" onclick="removeItem()">
                // select cart
                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container');

                cart.insertBefore(cartItem, total);

                // sweet alert message
                swal({
                    title: "Success",
                    text: "Item added to the cart!",
                    icon: "success",
                    button: "Ok",
                });

                showTotals();
            }
        });
    });
})();

//$('#cart-item-remove').click(function(){
function removeItem(){
    const itemRemoved = document.getElementById("cart-item-remove").parentElement.children[1].children[0].textContent;
    document.getElementById("cart-item-remove").parentNode.innerHTML = "";
    showTotals();

    // sweet alert message
    swal({
        title: "\"" + titleCase(itemRemoved) + "\" removed from the cart.",
        text: "",
        icon: "warning",
        button: "Ok",
    });
}

//function removeAll(){
$('#clear-cart').click(function(){

    // get the cart
    const cart = document.getElementById("cart");

    // the last 2 divs are for cart total and formatting
    // count of items to be removed is 2 less than element count on cart
    const countRemove = cart.childElementCount-2;
    // loop and remove each current first child
    for (var i=0; i<countRemove; i++) {
        cart.removeChild(cart.children[0]);
    }

    // update totals (will be computed to 0)
    showTotals();

    // sweet alert message
    swal({
        title: "Clear Cart Success",
        text: "There are no items in your cart now.",
        icon: "info",
        button: "Ok",
    });
});

function showTotals(){
    const total = [];
    const items = document.querySelectorAll(".cart-item-price");

    items.forEach(function(item) {
        total.push(parseFloat(item.textContent));
    });

    const totalMoney = total.reduce(function(total,item){
        total += item;
        return total;
    },0);
    const finalMoney = totalMoney.toFixed(2);
    //console.log(finalMoney);

    document.getElementById('cart-total').textContent = finalMoney;
    document.querySelector('.item-total').textContent = finalMoney;
    document.getElementById('item-count').textContent = total.length;
}

// credits : https://stackoverflow.com/questions/32589197/capitalize-first-letter-of-each-word-in-a-string-javascript/32589256
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }

// testing code (unused)
/*// clear cart
(function(){
    const cartInfo = document.getElementById('clear-cart');
    const cart = document.getElementById('cart');
    const total = document.querySelector('.cart-total-container');
})();

// delete item
/*(async function(){
    /*if (document.getElementById('cart-total').textContent != "0.00") {
        const cartTrashBtn = document.querySelector('.store-item-icon-remove');
        cartTrashBtn.addEventListener('click',function(event){
        })();
    }*/
    /*const cartBtn = document.querySelectorAll('.store-item-icon-remove');
    console.log(cartBtn);
    //})();*/
    /*jQuery('#cart-item-remove').on('click',  (function() {
        console.log('selected');
    })); */
    /*$('.cart-item-remove').click(function(){
        console.log("The paragraph was clicked.");
      });*/
    /*const trashItem = document.querySelector('.cart-item-remove');
    const cart = document.getElementById('cart');
    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('hide-cart');
    });*/
    /*const cartRemoveBtn = document.querySelector('.cart-item-remove');
    cartRemoveBtn.forEach(function(btn){
        btn.addEventListener('click',function(event){
            console.log('delete clicked');
        })();
    })();*/
    /*const element = document.querySelector('.cart-item-remove');
    if (element!=null)
    element.addEventListener('click', function(){
        console.log('hello');
        element.parentNode.removeChild(element);
    })();
    
    
})();*/
