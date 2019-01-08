(function(){

    // declare the customers array (initially empty)
    let customers = [];
    // current array index (and array size) is 0
    let index = 0;

    // object constructor function
    function Customer(name, img, rating, text) {

        // set the values as received on the parameter
        this.name = name;
        this.img = img;
        this.rating = rating;
        this.text = text;
    }

    // create customer function
    function createCustomer(name, img, rating, text) {

        // full image path
        let fullImg = `img/customer-${img}.jpg`;

        // create a customer instance
        const customer = new Customer(name, fullImg, rating, text);

        // push the created customer object to the array
        customers.push(customer);
    }

    // create stars function to create star figure based on rating value
    function createStars(rating) {

        // rounding the rating value to nearest half
        rating = Math.round(rating * 2) / 2;

        // preparing the output html
        let output = [];
      
        // push all the full stars
        for (var i = rating; i >= 1; i--) {
          output.push('<span class="star-icon"><i class="fas fa-star fa-2x"></i></span>');
        }
      
        // now check for any half star
        if (i == .5) {
            output.push('<span class="star-icon"><i class="fas fa-star-half-alt fa-2x"></i></span>');
        }
      
        // finally push the empty stars
        for (let i = (5 - rating); i >= 1; i--)
          output.push('<span class="star-icon"><i class="far fa-star fa-2x"></i></span>');
      
        // return the star output html  
        return output.join('');
      
      }

    // using the functions, create customer objects to add to the array
    createCustomer('John', 1, 4.1, `Great one there!`);
    createCustomer('Mike', 2, 5.0, `Excellent work there. Very well done. Much appreciated`);
    createCustomer('Tyson', 3, 4.5, `Ok`);
    createCustomer('Lorem', 4, 3.5, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit voluptatum illo? Quae fugiat aspernatur harum aperiam, quis eos officia.`);

    // process on both buttons 
    document.querySelectorAll('.btn').forEach(function(item) {

        // add the 'click' event listener
        item.addEventListener('click', function(event) {

            // disable the default behaviour of the click
            event.preventDefault();
            
            // process for the previous button (or left chevron)
            if (event.target.parentElement.classList.contains('prevBtn') || event.target.classList.contains('prevBtn') || event.target.parentElement.classList.contains('fa-chevron-left')) {
                // decrement index (previous customer)
                index--;

                // circle around on negative index
                if (index < 0) {
                    index = customers.length-1;
                }

                // get the image-name-text-rating elements and update values from the array
                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;
                document.getElementById('stars').innerHTML = createStars(customers[index].rating);
            }
            // process for the next button (or right chevron)
            else if (event.target.parentElement.classList.contains('nextBtn') || event.target.classList.contains('nextBtn') || event.target.parentElement.classList.contains('fa-chevron-right')) {
                // increment index (next customer)
                index++;

                // circle around on index out of bounds
                if (index >= customers.length) {
                    index = 0;
                }

                // get the image-name-text-rating elements and update values from the array
                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;
                document.getElementById('stars').innerHTML = createStars(customers[index].rating);
            }
        })
    })

})();