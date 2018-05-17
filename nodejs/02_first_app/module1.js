function myFunction(){
  console.log('Function was called');
}

var myString = 'String';

//Export the myFunction & myString function
module.exports.myFunction = myFunction;
module.exports.myString = myString;
