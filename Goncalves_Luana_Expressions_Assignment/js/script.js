
 /*
Luana Goncalves
SDI Section #3
Expressions Assignment
1/15/2015
 */

//alert("Testing to see if the JS file is attached to the html.");

//Calculating the bank's percentage markup of a currency's exchange rate you want to purchase in US dollars.

 alert("We are calculating the bank's percentage markup of a currency's exchange rate you want to purchase in USD. Also we will compare how much USD you will need to purchase a certain currency with the bank rate."); //introduction of the calculator

 var bankExchange = prompt("Please enter the bank's exchange rate:"); //for user to input bank rate of the currency they are planning to purchase
console.log (bankExchange);

 var marketExchange = prompt("Please enter the market exchange:");//for user to input market rate of the currency they are planning to purchase
console.log(marketExchange);

 var percentage = (bankExchange - marketExchange)/marketExchange * 100;//the equation to figure the out the percentage markup

  alert("The percentage markup of your exchange rate is  " + parseInt(percentage) + "%");//user's percentage mark up result

 //Tested out to make sure the prompts and the calculation works. Used 2.75 for bank rate and 2.64 for market rate.

 //Now we are going to calculate how much the user will need to purchase in USD
 var amount = prompt ("Now we will calculate how much USD you will need. Please enter desired foreign currency you need:");
console.log(amount);

 var currency = prompt("Is the foreign currency more expensive than the USD? \nYes or No");

 if (currency === "yes") {
  var total1 = amount * bankExchange;
  console.log(total1);
  alert("You will need $" + total1);
 }
else
 {
  var total2 = amount / bankExchange;
  console.log(total2);
  alert("You will need $" + parseInt(total2));
 }