let bill = document.getElementById('bill')
let fivePercent = document.getElementById('btn-5');
let tenPercent = document.getElementById('btn-10');
let fifteenPercent = document.getElementById('btn-15');
let twentyFivePercent = document.getElementById('btn-25');
let fiftyPercent = document.getElementById('btn-50');
let custom = document.getElementById('custom-btn');
let people = document.getElementById('people');
let tipAmountPerPerson = document.getElementById('amount-per-person');
let totalAmountPerPerson = document.getElementById('total-amount');
let reset = document.getElementById('reset');


// let billValue = bill.value;
// let numberOfPeople = people.value;

//truncate value to two decimal places without rounding up
function truncate(number, index = 2) {
    return +number.toString().slice(0, (number.toString().indexOf(".")) + (index + 1));
}

//calculate total per person
function totalAmount(bill, tipAmt, noOfPerson){
    let tipValue = bill * tipAmt
    return ((parseFloat(tipValue) + parseFloat(bill)) /  noOfPerson ).toFixed(2)
}
  

function tipFivePercent(){
    let fivePercent = 5 / 100;
    let billValue = bill.value;
    let numberOfPeople = people.value;
    let percentageCalc = (billValue * fivePercent ) / numberOfPeople;
    tipAmountPerPerson.innerHTML = truncate(percentageCalc, 2);
    totalAmountPerPerson.innerHTML = totalAmount(billValue, fivePercent, numberOfPeople);
}

function tipTenPercent(){
    let tenPercent = 10 / 100;
    let billValue = bill.value;
    let numberOfPeople = people.value;
    let percentageCalc = (billValue * tenPercent ) / numberOfPeople;
    tipAmountPerPerson.innerHTML = truncate(percentageCalc, 2);
    totalAmountPerPerson.innerHTML = totalAmount(billValue, tenPercent, numberOfPeople);
}

function tipFiffteenPercent(){
    let fifteenPercent = 15 / 100;
    let billValue = bill.value;
    let numberOfPeople = people.value;
    let percentageCalc = (billValue * fifteenPercent ) / numberOfPeople;
    tipAmountPerPerson.innerHTML = truncate(percentageCalc, 2);
    totalAmountPerPerson.innerHTML = totalAmount(billValue, fifteenPercent, numberOfPeople);
}

function tipTwentyFivePercent(){
    let twentyFivePercent = 25 / 100;
    let billValue = bill.value;
    let numberOfPeople = people.value;
    let percentageCalc = (billValue * twentyFivePercent ) / numberOfPeople;
    tipAmountPerPerson.innerHTML = percentageCalc.toFixed(2);
    totalAmountPerPerson.innerHTML = totalAmount(billValue,  twentyFivePercent, numberOfPeople);
}

function tipFiftyPercent(){
    let fiftyPercent = 50 / 100;
    let billValue = bill.value;
    let numberOfPeople = people.value;
    let percentageCalc = (billValue * fiftyPercent ) / numberOfPeople;
    tipAmountPerPerson.innerHTML = percentageCalc.toFixed(2);
    totalAmountPerPerson.innerHTML = totalAmount(billValue, fiftyPercent, numberOfPeople);
}

function tipCustomPercent(){
    let billValue = bill.value;
    let customValue = custom.value;
    let customPercent = customValue / 100;
    let numberOfPeople = people.value;
    let percentageCalc = (billValue * customPercent ) / numberOfPeople;
    tipAmountPerPerson.innerHTML = percentageCalc.toFixed(2);
    totalAmountPerPerson.innerHTML = totalAmount(billValue, customPercent, numberOfPeople);
}


fivePercent.addEventListener('click', tipFivePercent);
tenPercent.addEventListener('click', tipTenPercent);
fifteenPercent.addEventListener('click', tipFiffteenPercent);
twentyFivePercent.addEventListener('click', tipTwentyFivePercent);
fiftyPercent.addEventListener('click', tipFiftyPercent);
custom.addEventListener('change',  tipCustomPercent);

//reset to default values
reset.addEventListener('click', function () {
    bill.value = '';
    custom.value = '';
    people.value = '';
    tipAmountPerPerson.innerHTML = '';
    totalAmountPerPerson.innerHTML = '';
})


