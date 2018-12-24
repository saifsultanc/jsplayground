


function calculateTip(amount,tip){

let percent = (tip/100);//0.05

let tipAmount = amount * percent;
let totalAmount = amount + tipAmount;

if(tip<=5){
console.log('You have to do better than that.' + '\n' + tip + '% percent is very low');
console.log('You left a tip of ' + tipAmount + ' dollars');
console.log('Your total amount is ' + totalAmount + ' dollars');
}
else if(tip>=20)
{
    console.log('You are very generous' + '\n' + tip + '% percent is very good');
console.log('You left a tip of ' + tipAmount + ' dollars');
console.log('Your total amount is ' + totalAmount + ' dollars');
}
else{
    console.log('You left a good tip.' + '\n' + tip + '% percent is good');
console.log('You left a tip of ' + tipAmount + ' dollars');
console.log('Your total amount is ' + totalAmount + ' dollars');
}

}

calculateTip(50,4);
calculateTip(100,15);
calculateTip(123,25);