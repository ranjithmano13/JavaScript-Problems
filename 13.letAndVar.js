const car = () => {
  console.log(carName);
  console.log(price);
  var carName = "Toyota";
  let price = 3000;
};

 
/*
Output will be :
undefined 
ReferenceError: Cannot access 'price' before initialization

1st output: whenever we are decalring a variable, javascript allows to use the variables before declaring,
2nd output: whenever we are declaring a variable using let, javascript wont allow to use the variable before declaring

*/
