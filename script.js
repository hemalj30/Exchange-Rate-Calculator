var curr_one = document.getElementById("currency_one");
var amt_one = document.getElementById("amount_one");

var curr_two = document.getElementById("currency_two");
var amt_two = document.getElementById("amount_two");


var swap = document.getElementById("swap");
var rate = document.getElementById("rate");



async function calculate(){

    var curr_one_value = curr_one.value;
    
    var curr_two_value = curr_two.value;


    var output = await fetch('https://api.exchangerate-api.com/v4/latest/'+ curr_one_value);

    console.log(output);

    var data = await output.json();

    console.log(data);



    var data_rate=data.rates[curr_two_value];

    rate.innerHTML="1"+curr_one_value+"="+data_rate+" "+curr_two_value;

    var ONE=Number(amt_one.value);


    amt_two.value = parseInt(((ONE)*(data_rate)));

    
}


function swapfunc(){

    var temp = curr_one.value;

    curr_one.value=curr_two.value;

    curr_two.value=temp;

    calculate();

}

curr_one.addEventListener('change', calculate);
amt_one.addEventListener('input', calculate);

curr_two.addEventListener('change', calculate);
amt_two.addEventListener('input', calculate);

swap.addEventListener('click',swapfunc);