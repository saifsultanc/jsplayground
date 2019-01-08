
//quarters 25 cent
//dime 10 cents
//nickel 5 cents
// penny 1 cent




function returnChange(amount){
    let quarters = Math.floor(amount/25);
    console.log(`There are ${quarters} quarters in your change`);
    amount = amount % 25;
    console.log(`And your change is : ${amount} cents`);


    let dimes = Math.floor(amount/10);
    console.log(`There are ${dimes} dimes in your change`);
    amount = amount % 10;
    console.log(`And your change is : ${amount} cents`);
    
    let nickels = Math.floor(amount/5);
    console.log(`There are ${nickels} nickels in your change`);
    amount = amount % 5;
    console.log(`And your change is : ${amount} cents`);
    

    let pennies = Math.floor(amount/1);
    console.log(`There are ${pennies} pennies in your change`);
    


    //console.log(quarters);
    
}
returnChange(10)